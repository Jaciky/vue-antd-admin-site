# 侧边栏和路由

侧边栏的数据和路由同源，从系统设计和维护层面考虑，这是最为高效的一种方案。

大体思路：配置路由的时候遵循一些约定的规则，以便于能够通过规则筛选出可用菜单数据，经过筛选后的菜单可直接用来渲染菜单列表。

## 路由约束规则

先了解各约束字段含义，文件在 `@/router/index.js`

```json
hidden: true //当值为Truthy，该路由将会在导航栏中隐藏，如401、login等页面，或一些编辑页面/edit/1
alwaysShow: true //当值为Truthy，当路由有且含有一个非隐藏的子路由的情况下，始终显示父级菜单
name: "router-name" //须与对应组件的name保持一致，否则<keep-alive>不生效
meta: {
  roles: ["admin", "editor"] //设置该路由访问权限，支持多个权限叠加，不设置此字段表示无权限限制
  title: "title" //设置该路由在导航栏中展示的名字
  icon: "icon-type" //设置该路由在导航栏中展示的图标(默认使用antd组件)
  cache: true //当值为Truthy，<keep-alive>才会生效(默认 false)
  activeMenu: "/example/list" //当访问一个被隐藏菜单的路由时，此属性可指定菜单激活项
}
```

**示例：**

```js
{
  path: '/message',
  component: Layout,
  redirect: '/message/index',
  hidden: true, // 不在侧边栏线上
  alwaysShow: true, // 实在显示
  meta: {
    title: '消息反馈',
    icon: 'code',
    roles: ['admin','editor'] //你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
  },
  children: [
    {
      path: '/message/index',
      component: () => import(/* webpackChunkName:"message"*/ '_views/message/index.vue')
      name: 'Message',
      meta: {
        title: '消息反馈',
        icon: 'message'
        role: ['admin','editor'], // 一个子路由设置自己的权限
        cache: true // 会被 <keep-alive> 缓存
      }
    }
  ]
}
```

## 路由

路由根据权限可分为两类，`constantRoutes` 和 `asyncRoutes`

**constantRoutes：** 在初始化时就已注册，如登录页、404 等页面。

**asyncRoutes：** 通过 `addRoutes` 动态添加的页面，在登录并成功获取用户信息后注册的页面。

路由的设计及权限相关，请参考[路由设计](/guide/advanced/router.md)、[权限系统](/guide/advanced/permission.md)页面。

## 侧边栏

项目基于 `Ant Design` 的 `Menu` 组件，由于侧边栏数据来源于路由，须结合前面的约束字段动态判断生成，所以需要使用单文件方式递归生成菜单。

::::tip 代码参考
[@/views/layout/components/Sidebar](https://github.com/Jaciky/vue-antd-admin/blob/master/src/views/layout/Sidebar.vue)
::::

**结构**

关于 `Menu` 组件的使用，请参考 [官方文档](https://www.antdv.com/components/menu-cn/)

`selected-keys`：当前激活的菜单项，可多选所以这里为数组 `[]`

`@click`：路由跳转基于 `click`事件

`menus`：根据路由数据筛选出来的菜单数据

```html
<template>
  <a-menu
    :theme="theme"
    mode="inline"
    :selected-keys="[activeMenu]"
    @click="routerGo"
  >
    <template v-for="route in menus">
      <a-menu-item v-if="!route.children" :key="route.path">
        <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
        <span>{{ route.meta.title }}</span>
      </a-menu-item>

      <sidebar-item v-else :key="route.path" :item="route" />
    </template>
  </a-menu>
</template>
```

**sidebar-item** 为单文件方式递归组件，结构如下：

```html
<template functional>
  <a-sub-menu :key="props.item.path">
    <span slot="title">
      <a-icon v-if="props.item.meta.icon" :type="props.item.meta.icon" />
      <span>{{ props.item.meta.title }}</span>
    </span>

    <template v-for="child in props.item.children">
      <template v-if="!child.hidden">
        <a-menu-item v-if="!child.children" :key="child.path">
          <a-icon v-if="child.meta.icon" :type="child.meta.icon" />
          <span>{{ child.meta.title }}</span>
        </a-menu-item>

        <sidebar-item v-else :key="child.path" :item="child" />
      </template>
    </template>
  </a-sub-menu>
</template>
```

::::tip 注意
考虑渲染性能，此组件声明为 **函数式组件**。有对此不熟悉的，请参考[函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)。
::::

**数据**

在对数据的处理上，思考了很久也参考了很多开源项目，如开源项目 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/)的菜单设计，本项目很多地方都参考和学习了该项目，比如路由和权限，十分感谢。在对菜单的设计上，判断逻辑和状态过于繁琐，在对代码进行审视时，发现不宜维护和阅读，于是想着在渲染模版时就对数据先按约束规则进行处理，然后就有了如下的方案：

```js
computed: {
    menus() {
      const munus = this.$store.getters.routes
      return this.filterRoutes(munus)
    },
    activeMenu() {
      const { meta, path } = this.$route
      return meta?.activeMenu ?? path
    }
  },
  methods: {
    routerGo({ key }) {
      console.log(key)
      this.$router.push({ path: key })
    },
    // 根据路由字段递归筛选出可直接渲染且免于判断各种状态的菜单数据
    filterRoutes(routes = []) {
      const res = []

      routes.forEach(item => {
        if (!item.hidden) {
          const showingChildren = item.children?.filter(item => !item.hidden)

          if (showingChildren?.length == 0) {
            delete item.children
            res.push(item)
          } else if (showingChildren?.length == 1) {
            !item.alwaysShow ? res.push(showingChildren[0]) : res.push(item)
          } else {
            res.push(item)
            this.filterRoutes(item.children)
          }
        }
      })

      return res
    }
  }
```
