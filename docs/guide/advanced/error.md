# 错误处理

## 页面

**404**

页面级的错误处理由 `vue-router` 统一处理，所有匹配不到正确路由的页面都会进 `404`页面。

```js
{ path: '*', redirect: '/404' }
```

::: warning
**注意事项** 这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所有页面都会被拦截到`404` ，详细的问题见 [addRoutes when you've got a wildcard route for 404s does not work](https://github.com/vuejs/vue-router/issues/1176)
:::

**401**

在`@/permission.js`做了权限控制，所有没有权限进入该路由的用户都会被重定向到 `401`页面。

<br/>

## 请求

## 代码
