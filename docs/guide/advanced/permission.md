# 权限系统

本项目权限思路借鉴[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)，表示感谢！

权限几乎是每个项目都有的一个重要需求，做后台项目区别于做其它的项目，权限验证与安全性是非常重要的，可以说是一个后台项目一开始就必须考虑和搭建的基础核心功能。我们所要做到的是：不同的权限对应着不同的路由，同时侧边栏也需根据不同的权限，异步生成。

经过对现有的权限方案总结，大概有以下几种思路：

- 使用全局路由守卫，在对应路由标记权限，当用户访问路由时获取标记和用户信息是否匹配
- 路由数据由前端提前预设，并规定一些约束字段，在用户登录后经过筛选出可访问路由，并通过 `addRoutes` 动态挂载 (本项目采用)
- 菜单数据由后端返回，跳转时通过路由守卫把菜单和路由比对
- 菜单和路由都由后端返回

以上思路的具体实现，请参考[vue 权限路由实现方式总结](https://www.jianshu.com/p/bf4cda6b515f?from=groupmessage)

**本项目具体思路：**

- 登录：当用户填写完账号和密码后向服务端验证是否正确，验证通过之后，服务端会返回一个 **token**，拿到 token 之后（我会将这个 token 存贮到 cookie 中，保证刷新页面后能记住用户登录状态），前端会根据 token 再去拉取一个 **user_info** 的接口来获取用户的详细信息（如用户权限 role，用户名等等信息）。

- 权限验证：根据用户的 **role** 算出其对应有权限的路由，通过 **router.addRoutes** 动态挂载这些路由。

上述所有的数据和操作都是通过 vuex 全局管理控制的。

## 获取用户信息

用户登录成功之后，我们会在全局钩子`router.beforeEach` 中拦截路由，判断是否已获得 token，在获得 token 之后我们就要去获取用户的基本信息了

```js
// 判断用户是否已登录
const hasToken = getToken();

if (hasToken) {
  if (store.getters.roles?.length) {
    next();
  } else {
    // 获取用户角色信息
    await store.dispatch("user/getInfo");
  }
}
```

就如前面所说的，我只在本地存储了一个用户的 token，并没有存储别的用户信息（如用户权限，用户名，用户头像等）。有些人会问为什么不把一些其它的用户信息也存一下？主要出于如下的考虑：

假设我把用户权限和用户名也存在了本地，但我这时候用另一台电脑登录修改了自己的用户名，之后再用这台存有之前用户信息的电脑登录，它默认会去读取本地 cookie 中的名字，并不会去拉去新的用户信息。

所以现在的策略是：页面会先从 cookie 中查看是否存有 token，没有，就走一遍上一部分的流程重新登录，如果有 token,就会把这个 token 返给后端去拉取 user_info，保证用户信息是最新的。
当然如果是做了单点登录得功能的话，用户信息存储在本地也是可以的。当你一台电脑登录时，另一台会被提下线，所以总会重新登录获取最新的内容。

而且从代码层面我建议还是把 `login` 和 `get_user_info` 两件事分开比较好，在这个后端全面微服务的年代，后端同学也想写优雅的代码~

## 路由的生成

在用户登录成功后触发 `router.beforeEach`，回调函数为异步函数 `async`

```js
// 根据用户角色生成可访问路由
await store.dispatch("auth/generateRoutes");
```

在 `Vuex` 的 `actions` 中通过 `filterAsyncRoutes` 将 role 和路由表每个页面的需要的权限作比较过滤，生成最终用户可访问的路由表

```js
import { asyncRoutes } from '@/router'

generateRoutes({ commit, rootState }) {
  return new Promise(resolve => {
    const { roles } = rootState.user
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes || []
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('SET_ROUTES', accessedRoutes)
    resolve(accessedRoutes)
  })
}
```

::::tip 代码参考
[@/store/modules/auth.js](https://github.com/Jaciky/vue-antd-admin/blob/master/src/store/modules/auth.js)
::::

然后 `router.addRoutes` 动态挂载路由

```js
// 动态添加可访问路由
router.addRoutes(store.state.auth.addRoutes);
```

更多路由信息查看 [路由设计](/guide/advanced/router.html)

:::tip 说明
到此我们仅可以控制的是单个页面的访问权限，前端再怎么做权限控制都不是绝对安全的，后端的权限验证是逃不掉的。

后端应要保证验证每一个涉及请求的操作，验证其是否有该操作的权限，每一个后台的请求请求 header 里面携带用户的 token，后端会根据该 token 来验证用户是否有权限执行该操作。若没有权限则抛出一个对应的状态码，前端检测到该状态码，做出相对应的操作。
:::

## @/permission.js

由于权限逻辑复杂且重要，所以这样把该文件的位置提到了和 `main.js` 同级，可能有的人会直接吧代码放在入口文件 `main.js` 中，千万别这样做，入口文件必须保持简洁，有助于参与开发的人员快速理解我们的程序。

此文件代码逻辑简要概括如下：

在路由跳转之前被 `beforeEach` 拦截到并做了以下事情

1. 设置进度条开始 `NProgress.start()`

2. 销毁所以弹框 `Modal.destroyAll()`，为了防止意外去情况，比如使用浏览器前进或后退

3. 判断用户是否已经登录，分情况：

   - 访问的是登录页 `/login`，重定向到指定页面 `next({ path: "/" })`
   - 访问的是其他页面，就正常访问并没有多余的判断
   - 如果某些页面可以免登陆访问，这里提供一个全局变量 `whiteList`，存放所有免登陆页面地址，默认值有 `["/login"]`

4. 在跳转前都有判断用户信息是否存在，不存在就会拉取一下，并挂载路由数据，这是为了防止浏览器刷新，`store` 中数据丢失，前面也提到过为什么不把用户信息存到本地。

**以下是完整代码** [查看源代码](https://github.com/Jaciky/vue-antd-admin/blob/master/src/permission.js)

```js
import router from "./router";
import store from "./store";
import { getToken, getPageTitle } from "@/libs/utils";
import { Modal } from "ant-design-vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // 销毁所有提示框
  Modal.destroyAll();

  // 设置网页标题
  document.title = getPageTitle(to.meta?.title);

  // 判断用户是否已登录
  const hasToken = getToken();
  // 判断是否拉取用户信息
  const hasRoles = store.getters.roles?.length;

  if (hasToken) {
    if (hasRoles) {
      if (to.path === "/login") {
        next({ path: "/" });
        NProgress.done();
      } else {
        next();
      }
    } else {
      try {
        // 获取用户信息
        await store.dispatch("user/getInfo");

        // 根据用户角色生成可访问路由
        await store.dispatch("auth/generateRoutes");

        // 动态添加可访问路由
        router.addRoutes(store.state.auth.addRoutes);

        // 设置 replace: true， 防止用户信息更新后权限变更，而进入的是404
        next({ ...to, replace: true });
      } catch (error) {
        // 清除登录信息跳转至登录页
        await store.dispatch("user/clearInfo");
        next({
          path: "/login",
          query: { redirect: to.path, ...to.query },
          replace: true
        });
        NProgress.done();
      }
    }
  } else {
    /* has no token*/
    if (whiteList.includes(to.path)) {
      // 进入免登陆页面
      next();
    } else {
      next({ path: "/login", replace: true });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
```

此代码最终会被引入到 `main.js`

```js
// 鉴权
import "./permission";
```

## 按钮级别权限

**指令式：**

```js
import store from "@/store";

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const roles = store.getters && store.getters.roles;

    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;

      const hasPermission = roles.some(role => permissionRoles.includes(role));

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need roles! Like v-auth="['admin','editor']"`);
    }
  }
};
```

使用方式

```html
<a-button v-auth="[admin]" @click="delete">删除</a-button>
```

**组件式：**

## axios 拦截器

由于接口请求大多需要设置请求头，以及对异常状态做出反馈，使用这里就有必要对 axios 做一些全局的配置，具体思路将会在[Axios 封装](/guide/advanced/axios.html)章节讲解。

前面说到每一个请求都会根据请求头里面塞入 token 验证权限，所以这里我们针对业务封装了一下请求。

```js
/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    // 设置请求头 token
    store.getters.token && (config.headers["Authorization"] = getToken());

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  const { data, config } = response;

  if (data.success) {
    return data;
  } else {
    if (ridrectCode.includes(data.code)) {
      // 防止并发接口
      if (store.getters.userId) {
        const { path, query } = router.currentRoute;
        store.dispatch("user/clearInfo").then(() => {
          router.push({
            path: "/login",
            query: { redirect: path, ...query },
            replace: true
          });
        });
      }
    }

    let msg = resCode[data.code] || data.message || "系统异常";
    showMsg(msg);
    return Promise.reject(msg);
  }
});
```

从上面代码可以看出，`service.interceptors.request` 请求拦器截会为每个请求设置请求头，并附带 token 参数
从上面代码可以看出，`service.interceptors.response` 响应拦截器会判断接口状态，是否需要重定向，这个状态码是前后端约定好的，最常见的就是 token 过期。

**参考资料**

[手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
