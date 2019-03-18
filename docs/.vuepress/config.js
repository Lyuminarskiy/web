const path = require("path");

module.exports = {
  evergreen: true,
  serviceWorker: true,
  configureWebpack: {
    resolve: {
      alias: {
        practice: path.resolve(".", "docs/practice")
      }
    }
  },
  head: [
    ["meta", {
      name: "author",
      content: "Владислав Люминарский"
    }],
    ["meta", {
      name: "theme-color",
      content: "#3eaf7c"
    }],
    ["link", {
      rel: "icon",
      href: "/icons/icon512.png"
    }],
    ["link", {
      rel: "manifest",
      href: "/manifest.webmanifest"
    }],
    ["link", {
      rel: "license",
      href: "/LICENSE"
    }]
  ],
  locales: {
    "/": {
      lang: "ru-RU",
      title: "Web-программирование",
      description: "Учебные материалы по курсу \"Web-программирование\"."
    }
  },
  themeConfig: {
    docsDir: "docs",
    repo: "Web-courses/Web-course",
    editLinks: true,
    logo: "/icons/icon512.png",
    lastUpdated: "Последнее обновление",
    editLinkText: "Редактировать эту страницу",
    serviceWorker: {
      updatePopup: {
        message: "Доступно новое содержимое.",
        buttonText: "Обновить"
      }
    },
    algolia: {
      apiKey: "892ad28dc056e1eb225c126678ef1c09",
      indexName: "c_vladislav",
      algoliaOptions: {
        facetFilters: [
          "lang:ru-RU",
          "tags:web-course"
        ]
      }
    },
    nav: [
      {
        text: "О курсе",
        link: "/about/"
      },
      {
        text: "Практика",
        link: "/practice/"
      },
      {
        text: "Лабораторные",
        link: "/labs/"
      },
      {
        text: "Экзамен",
        link: "/exam/"
      }
    ],
    sidebar: {
      "/practice/": [
        "",
        {
          title: "HTML и CSS",
          collapsable: false,
          children: [
            "01/",
            "02/",
            "03/",
            "04/",
            "05/",
            "06/",
            "07/",
            "08/"
          ]
        },
        {
          title: "JavaScript и Node.js",
          collapsable: false,
          children: [
            "09/",
            "10/",
            "11/",
            "12/",
            "13/",
            "14/",
            "15/"
          ]
        },
        {
          title: "Стек технологий MEVN",
          collapsable: false,
          children: [
            "16/",
            "17/",
            "18/",
            "19/"
          ]
        }
      ],
      "/labs/": [
        "",
        {
          title: "Лабораторные работы",
          collapsable: false,
          children: [
            "01/",
            "02/",
            "03/"
          ]
        }
      ]
    }
  }
};