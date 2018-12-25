const path = require("path");

module.exports = {
  head: [
    [
      "meta", {
      name: "author",
      content: "Владислав Люминарский"
    }
    ],
    [
      "meta", {
      name: "theme-color",
      content: "#3eaf7c"
    }
    ],
    [
      "link", {
      rel: "icon",
      href: "/icons/icon512.png"
    }
    ],
    [
      "link", {
      rel: "manifest",
      href: "/manifest.webmanifest"
    }
    ],
    [
      "link", {
      rel: "license",
      href: "/LICENSE"
    }
    ]
  ],
  locales: {
    "/": {
      lang: "ru-RU",
      title: "Web-программирование",
      description: "Учебные материалы по курсу \"Web-программирование\""
    }
  },
  themeConfig: {
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
          title: "JavaScript",
          collapsable: false,
          children: [
            "09/",
            "10/",
            "11/"
          ]
        }
      ],
      "/labs/": [
        "",
        {
          title: "Лабораторные работы",
          collapsable: false,
          children: [
            "01/"
          ]
        }
      ]
    },
    lastUpdated: "Последнее обновление",
    repo: "Web-courses/Web-course",
    docsDir: "docs",
    editLinks: true,
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
        facetFilters: ["tags:web"]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        practice: path.resolve(".", "docs/practice")
      }
    }
  },
  serviceWorker: true,
  evergreen: true
};