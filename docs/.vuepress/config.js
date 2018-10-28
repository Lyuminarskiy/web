module.exports = {
  base: '/Web-course-website/',
  head: [
    ['meta', {
      name: 'author',
      content: 'Владислав Люминарский'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['link', {
      rel: 'icon',
      href: '/icons/icon512.png'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.webmanifest'
    }]
  ],
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Web-программирование',
      description: 'Учебные материалы по курсу "Web-программирование"'
    }
  },
  themeConfig: {
    nav: [{
        text: 'Практика',
        link: '/practice/'
      },
      {
        text: 'Лабораторные',
        link: '/labs/'
      },
      {
        text: 'Экзамен',
        link: '/exam/'
      }
    ],
    sidebar: {
      '/practice/': [
        '',
        {
          title: 'HTML и CSS',
          collapsable: false,
          children: [
            '01/',
            '02/',
            '03/',
            '04/'
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false
        }
      ],
      '/labs/': [
        '',
        {
          title: 'Лабораторные работы',
          collapsable: false,
          children: []
        }
      ]
    },
    lastUpdated: 'Последнее обновление',
    repo: 'Vladislav-Lyuminarskiy/Web-course',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Редактировать эту страницу',
    serviceWorker: {
      updatePopup: {
        message: "Доступно новое содержимое.",
        buttonText: "Обновить"
      }
    },
    algolia: {
      apiKey: '892ad28dc056e1eb225c126678ef1c09',
      indexName: 'c_vladislav',
      algoliaOptions: {
        facetFilters: ["tags:web"]
      }
    }
  },
  serviceWorker: true,
  evergreen: true
}