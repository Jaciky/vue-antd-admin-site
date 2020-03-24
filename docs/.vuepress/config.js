module.exports = {
  title: "vue-antd-admin",
  description: "基于Vue的中后台系统",
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
    // smoothScroll: true, // 页面滚动效果
    editLinkText: "在 GitHub 上编辑此页",
    repo: "Jaciky/vue-antd-admin", // 仓库地址
    docsRepo: "Jaciky/vue-antd-admin-site", // 文档地址
    docsDir: "docs",
    editLinks: true,
    lastUpdated: "最近更新",
    algolia: {
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>"
    },
    nav: [
      {
        text: "指南",
        link: "/guide/"
      },
      {
        text: "组件",
        items: [
          {
            text: "Pagination 分页",
            link: "/feature/component/pagination.md"
          }
        ]
      },
      {
        text: "生态系统",
        items: [
          {
            text: "项目",
            items: [
              {
                text: "vue-antd-admin",
                link: "https://github.com/Jaciky/vue-antd-admin"
              }
            ]
          },
          {
            text: "帮助",
            items: [
              {
                text: "常见问题",
                link: "/guide/other/faq.md"
              },
              {
                text: "关于作者",
                link: "/about/"
              },
              {
                text: "更新记录",
                link: "https://github.com/Jaciky/vue-antd-admin/releases"
              }
            ]
          }
        ]
      },
      {
        text: "知识体系",
        link: "/learn/",
        items: [
          { text: "概览", link: "/learn/map/" },
          { text: "HTML", link: "/learn/html/" },
          { text: "CSS", link: "/learn/css/" },
          { text: "Javascript", link: "/learn/javascript/" },
          { text: "Vuejs", link: "/learn/vuejs/" },
          { text: "Markdown", link: "/learn/markdown/" }
        ]
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
            "/guide/essentials/nav.md",
            "/guide/essentials/style.md",
            "/guide/essentials/login.md",
            "/guide/essentials/adntd.md",
            "/guide/essentials/server.md",
            "/guide/essentials/icon.md",
            "/guide/essentials/theme.md",
            "/guide/essentials/codeing_style.md",
            "/guide/essentials/import.md",
            "/guide/essentials/deploy.md",
            "/guide/essentials/env.md"
          ]
        },
        {
          title: "进阶",
          collapsable: false,
          children: [
            "/guide/advanced/eslint.md",
            "/guide/advanced/router.md",
            "/guide/advanced/vuex.md",
            "/guide/advanced/permission.md",
            "/guide/advanced/axios.md",
            "/guide/advanced/form.md",
            "/guide/advanced/list.md",
            "/guide/advanced/chart.md",
            "/guide/advanced/defend.md",
            "/guide/advanced/error.md",
            "/guide/advanced/webpack.md"
          ]
        },
        {
          title: "其它",
          children: ["/guide/other/faq.md", "/guide/other/release-notes.md"]
        }
      ],
      "/feature/component/": ["/feature/component/pagination.md"],
      "/learn/": [
        {
          title: "HTML",
          collapsable: false,
          children: []
        },
        {
          title: "CSS",
          collapsable: false,
          children: []
        },
        {
          title: "Javascript",
          collapsable: false,
          children: [
            "/learn/javascript/",
            "/learn/javascript/this.md",
            "/learn/javascript/data_type.md",
            "/learn/javascript/function.md",
            "/learn/javascript/prototype.md",
            "/learn/javascript/es6.md",
            "/learn/javascript/promise.md"
          ]
        },
        {
          title: "Vuejs",
          collapsable: false,
          children: []
        }
      ]
    }
  }
};
