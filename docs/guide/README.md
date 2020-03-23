# 介绍

[![vue](https://img.shields.io/badge/vue-2.6.11-brightgreen.svg)](https://github.com/vuejs/vue)
[![Build Status](https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master)](https://travis-ci.org/PanJiaChen/vue-element-admin)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Jaciky/vue-antd-admin/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Jaciky/vue-antd-admin.svg?style=social&label=Stars)](https://github.com/Jaciky/vue-antd-admin)

<!-- [![ant-design-vue](https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square)](https://www.npmjs.org/package/ant-design-vue) -->
<!-- [![GitHub release](https://img.shields.io/github/release/Jaciky/vue-antd-admin.svg)](https://github.com/Jaciky/vue-antd-admin/releases) -->

[vue-antd-admin](http://Jaciky.github.io/vue-antd-admin) 是一个后台前端解决方案，基于 [vue](https://github.com/vuejs/vue) 和 [Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)实现。它使用了最新的前端技术栈，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。

## 目录结构

合理的目录结构是一个项目重要的根基，本项目根据实践经验总结生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── dist                                        # 打包输出目录
├── public
├── src                                         # 源码目录
│   ├── api                                     # 接口统一管理
│   │   ├── common.js
│   │   └── system.js
│   ├── assets                                  # 静态资源
│   │   ├── icons                               # 字体图标
│   │   ├── images
│   │   └── styles
│   ├── components                              # 全局组件
│   ├── config                                  # 基本配置
│   ├── directives                              # 全局指令
│   ├── filters                                 # 全局过滤器
│   ├── libs                                    # 工具库
│   │   ├── global.js                           # 全局常量及公用函数类组件
│   │   ├── request.js                          # axios封装
│   │   ├── rule.js                             # 公用校验规则
│   │   ├── utils.js                            # 工具函数
│   │   └── validate.js                         # 公用校验方法
│   ├── mixins                                  # 全局混入
│   ├── plugins                                 # 插件
│   ├── router                                  # 路由
│   ├── store                                   # 全局状态管理
│   ├── views                                   # 所有页面
│   ├── App.vue                                 # 入口页面
│   ├── main.js                                 # 入口文件 初始化
│   └── permission.js                           # 权限
├── .env.development                            # 环境变量 - 开发环境
├── .env.prod                                   # 环境变量 - 生产环境
├── .env.test                                   # 环境变量 - 测试环境
├── .eslintrc.js                                # 代码格式校验
├── .gitignore
├── .travis.yml                                 # 自动化CI配置
├── babel.config.js                             # babel配置
├── LICENSE
├── package-lock.json
├── package.json
├── prettier.config.js                          # prettier代码格式
├── README.me
└── vue.config.js                               # 脚手架配置
```

:::tip 建议
如果你是初学者，请先不要尝试去理解每一个文件的含义，请在实现功能的基础上学习和体会。
:::
