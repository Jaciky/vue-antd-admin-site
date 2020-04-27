# Vuex 实践

## 目录结构

![ ](http://jaciky.codelove.cn/1585209406%281%29.jpg)

在根目录下创建 `store` 文件夹

`@/store/modules` 是模块存储地址

`@/store/getters` 高频使用字段可提到全局 getters

`@/store/index` 主文件

## 模块结构

```js
const state = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
```

## getters

```js
export default {
  sidebar: (state) => state.app.sidebar,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
};
```

## 主文件

```js
import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import app from "./modules/app";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters,
  modules: {
    app,
  },
});

export default store;
```

在项目入口文件 `main.js` 中引入并注册

```js
import store from "./store";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```

## 业务中使用

**直接访问 store**

```html
<template>
  <sidebar :theme="navTheme" :collapsed="$store.state.app.sidebar" />

  <span>{{ $store.getters.userName }}&nbsp;</span>

  <a-icon class="trigger" @click="$store.dispatch('app/toggleSideBar')" />
</template>

<script>
  clickHandle() {
    this.$store.dispatch('user/logout')
  }
</script>
```

**通过辅助函数访问**

```html
<template>
  <a-icon class="trigger" @click="toggleSideBar" />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  computed: {
    ...mapGetters(['sidebar'])
  },
  metheds: {
    ...mapActions('app', ['toggleSideBar'])
  }
</script>
```

**A/B 模块间相互通信**

```js
const actions = {
  getUserInfo({ commit, dispatch, state, rootState, rootGetters }) {
    console.log(rootState.user.name); // 调用user模块的 actions
    console.log(rootGetters["user/pay"]); // 调用user模块的 getters
    commit("user/SET_NAME", "", { root: true }); // 调用user模块的 mutations
    dispatch("user/getInfo", {}, { root: true }); // 调用user模块的 actions
  },
};
```

详细的用法，参考 [Vuex](https://vuex.vuejs.org/zh/)
