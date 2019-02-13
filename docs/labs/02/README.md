# 2. JavaScript и Node.js

## Общая информация

В этой лабораторной работе вам предлагается создать многостраничный 
клиент-серверный веб-сайт - блог на основе макета, разработанного 
профессиональными дизайнерами.

## Макеты

Ниже представлены доступные для выбора макеты
([источник](https://colorlib.com/wp/cat/blog)).

Макеты распространяются по лицензии
[CC BY 3.0](https://creativecommons.org/licenses/by/3.0), согласно которой 
вы можете свободно изменять оригинальные материалы, но должны указать 
информацию об авторе в подвале страницы. Все макеты уже содержат такую 
информацию, так что вы должны просто оставить её такой, какая она есть.

Все макеты можно открыть для предпросмотра и скачать их исходный код.

### Vizew

![Внешний вид](./assets/Vizew.jpg)
[Страница макета](https://colorlib.com/wp/template/vizew) |
[Демонстрация](https://colorlib.com/preview/#vizew) |
[Исходный код](https://colorlib.com/download/2232)

### Wordify

![Внешний вид](./assets/Wordify.jpg)
[Страница макета](https://colorlib.com/wp/template/wordify) |
[Демонстрация](https://colorlib.com/preview/#wordify) |
[Исходный код](https://colorlib.com/download/2210)

### Ruft

![Внешний вид](./assets/Ruft.jpg)
[Страница макета](https://colorlib.com/wp/template/ruft) |
[Демонстрация](https://colorlib.com/preview/#ruft) |
[Исходный код](https://colorlib.com/download/2203)

### Wordsmith

![Внешний вид](./assets/Wordsmith.jpg)
[Страница макета](https://colorlib.com/wp/template/wordsmith) |
[Демонстрация](https://colorlib.com/preview/#wordsmith) |
[Исходный код](https://colorlib.com/download/1361)

### Fantom

![Внешний вид](./assets/Fantom.jpg)
[Страница макета](https://colorlib.com/wp/template/fantom) |
[Демонстрация](https://colorlib.com/preview/#fantom) |
[Исходный код](https://colorlib.com/download/1266)

### Callie

![Внешний вид](./assets/Callie.jpg)
[Страница макета](https://colorlib.com/wp/template/callie) |
[Демонстрация](https://colorlib.com/preview/#callie) |
[Исходный код](https://colorlib.com/download/1020)

### WebMag

![Внешний вид](./assets/WebMag.jpg)
[Страница макета](https://colorlib.com/wp/template/webmag) |
[Демонстрация](https://colorlib.com/preview/#webmag) |
[Исходный код](https://colorlib.com/download/959)

### Balita

![Внешний вид](./assets/Balita.jpg)
[Страница макета](https://colorlib.com/wp/template/balita) |
[Демонстрация](https://colorlib.com/preview/#balita) |
[Исходный код](https://colorlib.com/download/941)

### Avision

![Внешний вид](./assets/Avision.jpg)
[Страница макета](https://colorlib.com/wp/template/avision) |
[Демонстрация](https://colorlib.com/preview/#avision) |
[Исходный код](https://colorlib.com/download/932)

### Philosophy

![Внешний вид](./assets/Philosophy.jpg)
[Страница макета](https://colorlib.com/wp/template/philosophy) |
[Демонстрация](https://colorlib.com/demo?theme=philosophy) |
[Исходный код](https://colorlib.com/download/339)

## Задачи

1. **Выберите любой из предложенных макетов**, на основе которого вы бы хотели 
создать веб-сайт, и **сообщите преподавателю**, какой макет вы выбрали.

2. Скачайте и **изучите исходный код макета**.

3. **Получите ссылку от преподавателя** для автоматического создания
репозитория для первой лабораторной работы.

4. **Создайте страницы веб-сайта**, максимально приближенные к тому, что 
представлено на макете:

    - Главная страница.
    - Страница поста.
    
5. **Создайте веб-сервер**, который будет возвращать страницы веб-сайта.

6. **Опубликуйте веб-сервер** с помощью
[Microsoft Azure](https://azure.microsoft.com/ru-ru).

## Дополнительные требования

1. При выполнении лабораторной работы придерживайтесь следующей структуры
каталогов веб-сайта:

    ```
    ┬Lab2-... (корневой каталог)
    │
    ├──┬client (файлы клиента)
    │  │
    │  ├──┬shared (общие ресурсы)
    |  |  |
    │  |  ├──┬assets (медиафайлы)
    │  |  │  ├─icon.png (иконка веб-сайта)
    │  |  │  └─...
    │  |  │
    │  |  ├──┬styles (стили)
    │  |  │  └─...
    │  |  │
    │  |  └──┬scripts (скрипты)
    │  |     └─...
    │  │
    │  └──┬pages (страницы веб-сайта)
    |     |
    |     ├──┬index (файлы главной страницы)
    │     |  ├─index.html
    |     |  ├─index.css
    |     |  ├─index.js
    │     |  └──┬assets
    │     |     └─...
    |     |
    |     ├──┬post (файлы страницы поста)
    │     |  ├─post.html
    |     |  ├─post.css
    |     |  ├─post.js
    │     |  └──┬assets
    │     |     └─...
    |     |
    │     └──...
    │
    └──┬server (файлы сервера)
       |
       ├──┬scripts (скрипты)
       │  ├─server.js (модуль сервера)
       │  └─data.js (модуль получения данных)
       |
       └──┬data (данные)
          ├─posts.json (посты)
          ├─comments.json (комментарии)
          ├─users.json (пользователи)
          ├─categories.json (категории постов)
          └─tags.json (тэги к постам)
    ```
    
    - Разместите все файлы в каталогах `client` для клиента и `server` для 
    сервера соответственно.
    
    - В каталогах `client/pages/index` и `client/pages/post` разместите файлы, 
    отсносящиеся к главной странице и странице поста соответственно.
    
    - В каталогах `client/shared/assets`, `client/shared/styles` и
    `client/shared/scripts` разместите общие медиафайлы (изображения,
    шрифты и т.п.), стили и скрипты для всех страниц веб-сайта соответственно.

<disqus-comments
  page-uuid="73464fea-046b-4dad-ac0d-a2e973598a45"
  page-title="2. JavaScript и Node.js | Лабораторные работы"/>