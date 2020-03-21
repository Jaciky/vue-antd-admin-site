module.exports = {
  title: "vue-antd-admin",
  description: "do & unremitting",
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
    editLinks: true,
    lastUpdated: "最近更新",
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
                text: "Pagination 分页",
                link: "/feature/component/pagination.md"
              }
            ]
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
        text: "zxm",
        items: [
          { text: "markdown", link: "/learn/markdown/" },
          { text: "javascript", link: "/learn/javascript/" }
        ]
      }
      // {
      //   text: "捐赠",
      //   link: "/donate/"
      // },
      // {
      //   text: "招聘",
      //   link: "/job/"
      // }
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
            "/guide/advanced/chart.md",
            "/guide/advanced/icon.md",
            "/guide/advanced/cdn.md",
            "/guide/advanced/theme.md",
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
          title: "markdown",
          collapsable: true,
          children: ["/learn/markdown/"]
        },
        {
          title: "javascript",
          collapsable: true,
          children: ["/learn/javascript/"]
        }
      ]
    }
  }
};
