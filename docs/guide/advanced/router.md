# 路由设计

路由是整个项目的架子，在路由设计时，我考虑了以下几点：

- 按模块划分
- 路由与导航菜单数据同源
- 路由应该做到按需加载，即懒加载
- 路由主文件结构清晰

目录结构

![ ](http://q7osjwy3t.bkt.clouddn.com/1585187123%281%29.jpg)

代码结构

```js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* Layout */
import Layout from "_views/layout/Layout.vue";

/* Router Modules */
import business from "./modules/business";
import components from "./modules/components";

// 初始路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("_views/login/Login.vue"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true
  }
];

// 动态路由
export const asyncRoutes = [
  // 子路由数量只有一个时，也可放在在当前文件
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    alwaysShow: true,
    meta: { title: "首页", icon: "smile" },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName:"home"*/ "_views/home/Dashboard.vue"),
        meta: { title: "仪表盘", icon: "" }
      }
    ]
  },
  // 更多的路由模块依次引入并添加，顺序是根据放入先后决定
  business,
  components,

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes
});

export default router;
```

::: warning 注意事项
如果这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所以页面都会被拦截到`404` ，详细的问题见 [addRoutes when you've got a wildcard route for 404s does not work](https://github.com/vuejs/vue-router/issues/1176)
:::

## 按模块加载

在项目根目录 `@/router` 文件夹中，`@/router/index.js` 作为路由主文件，`@/router/modules` 用来存放路由模块。

在路由主文件中引入路由模块，添加到 `asyncRoutes`，如果子路由数据不多，也可以直接在当前数组中创建路由。为了让主文件结构清晰，原则上，尽量使用模块引入精简代码量。

## 路由额外字段

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

为了利用路由数据生产菜单，我们得为路由添加一些额外字段，比如我们菜单 title、icon 以及权限等信息都用 `meta` 字段来标识,它与路由的 `component` 平级，这在[Vue Router](https://router.vuejs.org/zh/)官方是有推荐的，请查看 [路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)

## 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

只需要这样引入组件即可实现懒加载

```js
component: () => import("_views/home/Dashboard.vue");
```

把某个路由下的所有组件都打包在同个异步块 (chunk) 中。用一个特殊的注释语法来提供 chunk name。

```js
component: () =>
  import(/* webpackChunkName:"home"*/ "_views/home/Dashboard.vue");
```

:::tip 注
以上路径中的“**\_views**”是 `webpack` 中配置的路径别名 `alias`，这是为了提高文件查找效率。
:::

更多信息参考[路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)
