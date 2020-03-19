module.exports = {
  title: "vue-antd-admin",
  description: "一个中后台单页项目",
  base: "/vue-antd-admin-site/",
  // head: [
  //   [
  //     "link",
  //     {
  //       rel: "icon",
  //       href: "/favicon.ico"
  //     }
  //   ]
  // ],
  themeConfig: {
    // logo: "/home.png",
    // sidebarDepth: 3,
    smoothScroll: true, // 页面滚动效果
    editLinkText: "在 GitHub 上编辑此页",
    repo: "Jaciky/vue-antd-admin", // 仓库地址
    docsRepo: "Jaciky/vue-antd-admin-site", // 文档地址
    docsDir: "docs",
    // sidebar: "auto",
    editLinks: true,
    lastUpdated: "Last Updated", // string | boolean
    algolia: {
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>"
    },
    nav: [
      {
        text: "指南",
        ariaLabel: "Language Menu",
        link: "/guide/"
      },
      {
        text: "功能",
        items: [
          {
            text: "组件",
            items: [
              {
                text: "富文本",
                link: "/feature/component/rich-editor.md"
              },
              {
                text: "Markdown 编辑器",
                link: "/feature/component/markdown-editor.md"
              },
              {
                text: "Svg Icon 图标",
                link: "/feature/component/svg-icon.md"
              },
              {
                text: "复制粘贴",
                link: "/feature/component/clipboard.md"
              },
              {
                text: "Excel",
                link: "/feature/component/excel.md"
              },
              {
                text: "Pagination 分页",
                link: "/feature/component/pagination.md"
              },
              {
                text: "Tree Table 树形表格",
                link: "/feature/component/tree-table.md"
              }
            ]
          },
          {
            text: "Script",
            items: [
              {
                text: "Svgo",
                link: "/feature/script/svgo.md"
              },
              {
                text: "New",
                link: "/feature/script/new.md"
              }
            ]
          }
        ]
      },
      // {
      //   text: "生态系统",
      //   items: [
      //     {
      //       text: "项目",
      //       items: [
      //         {
      //           text: "vue-element-admin",
      //           link: "https://github.com/PanJiaChen/vue-element-admin"
      //         },
      //         {
      //           text: "vue-admin-template",
      //           link: "https://github.com/PanJiaChen/vue-admin-template"
      //         },
      //         {
      //           text: "electron-vue-admin",
      //           link: "https://github.com/PanJiaChen/electron-vue-admin"
      //         },
      //         {
      //           text: "vue-typescript-admin-template",
      //           link: "https://github.com/Armour/vue-typescript-admin-template"
      //         },
      //         {
      //           text: "awesome-project",
      //           link:
      //             "https://github.com/PanJiaChen/vue-element-admin/issues/2312"
      //         },
      //         {
      //           text: "vue-countTo",
      //           link: "https://github.com/PanJiaChen/vue-countTo"
      //         },
      //         {
      //           text: "vue-split-pane",
      //           link: "https://github.com/PanJiaChen/vue-split-pane"
      //         },
      //         {
      //           text: "awesome-bookmarks",
      //           link: "https://github.com/PanJiaChen/awesome-bookmarks",
      //           type: "ZH"
      //         }
      //       ]
      //     },
      //     {
      //       text: "帮助",
      //       items: [
      //         {
      //           text: "国内文档(解决Github.io访问慢的问题)",
      //           link: "https://panjiachen.gitee.io/vue-element-admin-site/zh"
      //         },
      //         {
      //           text: "Gitter讨论组",
      //           link: "https://gitter.im/vue-element-admin/discuss"
      //         },
      //         {
      //           text: "作者Blog",
      //           link: "https://jianshiapp.com/circles/1209"
      //         },
      //         {
      //           text: "常见问题",
      //           link: "/guide/other/faq.md"
      //         },
      //         {
      //           text: "QQ群",
      //           link:
      //             "https://github.com/PanJiaChen/vue-element-admin/issues/602"
      //         },
      //         {
      //           text: "作者个人微博",
      //           link: "https://weibo.com/u/3423485724"
      //         },
      //         {
      //           text: "更新记录",
      //           link: "https://github.com/PanJiaChen/vue-element-admin/releases"
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        text: "zxm",
        link: "/learn/"
      },
      {
        text: "捐赠",
        link: "/donate/"
      },
      {
        text: "招聘",
        link: "/job/"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            "/guide/",
            "/guide/essentials/layout.md",
            "/guide/essentials/router-and-nav.md",
            "/guide/essentials/permission.md",
            "/guide/essentials/tags-view.md",
            "/guide/essentials/new-page.md",
            "/guide/essentials/style.md",
            "/guide/essentials/server.md",
            "/guide/essentials/mock-api.md",
            "/guide/essentials/import.md",
            "/guide/essentials/deploy.md",
            "/guide/essentials/env.md"
          ]
        },
        {
          title: "进阶",
          collapsable: false,
          children: [
            "/guide/advanced/cors.md",
            "/guide/advanced/eslint.md",
            "/guide/advanced/git-hook.md",
            "/guide/advanced/style-guide.md",
            "/guide/advanced/lazy-loading.md",
            "/guide/advanced/chart.md",
            "/guide/advanced/icon.md",
            "/guide/advanced/cdn.md",
            "/guide/advanced/theme.md",
            "/guide/advanced/i18n.md",
            "/guide/advanced/error.md",
            "/guide/advanced/webpack.md"
          ]
        },
        {
          title: "其它",
          collapsable: false,
          children: ["/guide/other/faq.md", "/guide/other/release-notes.md"]
        }
      ],
      "/feature/component/": [
        "/feature/component/rich-editor.md",
        "/feature/component/markdown-editor.md",
        "/feature/component/svg-icon.md",
        "/feature/component/clipboard.md",
        "/feature/component/excel.md",
        "/feature/component/pagination.md",
        "/feature/component/tree-table.md",
        "/feature/script/svgo.md",
        "/feature/script/new.md"
      ],
      "/feature/script/": ["/feature/script/svgo.md", "/feature/script/new.md"]
    }
  }
};
