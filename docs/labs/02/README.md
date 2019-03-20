# 2. JavaScript и Node.js

## Общая информация

В этой лабораторной работе вам предлагается создать многостраничный
динамический веб-сайт - блог на основе макета, разработанного 
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
репозитория для второй лабораторной работы.

4. При выполнении лабораторной работы придерживайтесь следующей структуры
каталогов веб-сайта:
   
    ```
    ┬Lab2-... (корневой каталог)
    │
    ├──┬client (файлы клиентской части)
    │  └──...
    │
    └──┬server (файлы серверной части)
      └──...
    ```

5. **Создайте страницы веб-сайта**, максимально приближенные к тому, что 
представлено на макете, а также:

    - Создайте стили для элементов, допустимых в свойстве `body` (см. 
    описание серверной части).
                
    - Укажите заголовок, иконку, имя автора, описание и список ключевых слов у
    всех страниц веб-сайта.
    
    - Укажите кодировку у всех файлов HTML и CSS.
    
6. **Создайте веб-сервер**, который будет динамически формировать и возвращать 
страницы веб-сайта.

7. **Опубликуйте веб-сервер** с помощью
[Microsoft Azure](https://azure.microsoft.com/ru-ru).

### Клиент

Клиентская часть должна реализовывать две страницы:

1. Главная страница.
2. Страница поста.

Содержимое всех страниц можно разделить на два типа:

- _Статическое содержимое_ - одинаково для всех страниц веб-сайта 
(например, шапка и подвал).
- _Динамическое содержимое_ - формируется веб-сервером по запросу клиента.

Для **главной страницы** динамически формируются страницы с ссылками на посты
по шесть постов на страницу.

Для **страницы поста** динамически формируются её содержимое:

- изображение поста,
- автор,
- дата и время публикации,
- категории,
- тэги,
- заголовок,
- содержимое,
- комментарии.

Все файлы, относящиеся к клиентской части, разместите в каталоге `client` со 
следующей структурой:

```
┬client (файлы клиентской части)
│
├──┬shared (общие ресурсы)
│  │
│  ├──┬assets (медиафайлы)
│  │  ├─icon.png (иконка веб-сайта)
│  │  └─...
│  │
│  ├──┬styles (стили)
│  │  └─...
│  │
│  └──┬scripts (скрипты)
│     └─...
│
└──┬pages (страницы веб-сайта)
   │
   ├──┬index (файлы главной страницы)
   │  ├─index.html
   │  ├─index.css
   │  ├─index.js
   │  └──┬assets
   │     └─...
   │
   ├──┬post (файлы страницы поста)
   │  ├─post.html
   │  ├─post.css
   │  ├─post.js
   │  └──┬assets
   │     └─...
   │
   └──...
```


### Сервер

Все файлы, относящиеся к серверной части, разместите в каталоге `server` со 
следующей структурой:

```
┬server (файлы серверной части)
│
├──┬scripts (скрипты)
│  ├─server.js (модуль сервера)
│  ├─data.js (модуль получения данных)
│  └─...
│
└──┬data (данные)
   ├─posts.json (посты)
   ├─comments.json (комментарии)
   ├─users.json (пользователи)
   ├─categories.json (категории)
   ├─tags.json (тэги)
   └─...
```

В каталоге `data` разместите данные. Данные должны быть представлены в формате 
JSON в виде массива объектов. Все изображения в данных храните в кодировке
[Base64](https://ru.wikipedia.org/wiki/Data:_URL). Данные разместите в 
нескольких файлах:
 
- `posts.json` - данные постов:
    
  - Описание данных:
  
    Свойство | Тип | Описание
    :-------:|:---:| --------
    `id` | `Number` | Уникальный идентификатор.
    `author` | `Number` | Идентификатор автора.
    `publication` | `String` | Дата и время публикации в стандартном формате.
    `categories` | `Array` | Идентификаторы категорий.
    `tags` | `Array` | Идентификаторы тэгов.
    `title` | `String` | Заголовок поста.
    `image` | `String` | Изображение поста.
    `body` | `String` | Содержимое в виде кода HTML. Допустимые элементы: [`<img>`](https://webref.ru/html/img), [`<h2>`](https://webref.ru/html/h2), [`<ul>`](https://webref.ru/html/ul), [`<ol>`](https://webref.ru/html/ol), [`<li>`](https://webref.ru/html/li), [`<p>`](https://webref.ru/html/p) и [`<q>`](https://webref.ru/html/q).
    
  - Пример данных:

    ```json
    [
      {
        "id": 55,
        "author": 2,
        "publication": "2019-01-26T13:51:50.417+04:00",
        "categories": [1, 2, 4],
        "tags": [5, 7, 4],
        "title": "Вышла новая версия Google Chrome",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJR0lGODlhEAAOAcGCmTIHEIUEq",
        "body": "<p>Абзац</p><img src='data:image/gif;base64,0lGODlhEAAOALMAAOazToeHh0tLSCwLJoEEq' alt='Изображение'/><ul><li>Первый</li><li>Второй</li></ul>"
      }
    ]
    ```

- `comments.json` - данные комментариев:
    
  - Описание данных:
  
    Свойство | Тип | Описание
    :-------:|:---:| --------
    `id` | `Number` | Уникальный идентификатор.
    `post` | `Number` | Идентификатор поста.
    `author` | `Number` | Идентификатор автора.
    `reply` | `Number` `null` | Идентификатор исходного комментария, если этот комментарий является ответом на него, иначе - [`null`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/null).
    `publication` | `String` | Дата и время публикации в стандартном формате.
    `body` | `String` | Содержимое комментария.
    
  - Пример данных:

    ```json
    [
      {
        "id": 59,
        "post": 3,
        "author": 4,
        "reply": null,
        "publication": "2019-02-05T10:00:59.014+04:00",
        "body": "Спасибо, с удовольствием прочитал ваш пост!"
      },
      {
        "id": 62,
        "post": 3,
        "author": 6,
        "reply": 59,
        "publication": "2019-02-05T14:02:23.014+04:00",
        "body": "Всегда пожалуйста!"
      }
    ]
    ```

- `users.json` - данные пользователей:
    
  - Описание данных:
  
    Свойство | Тип | Описание
    :-------:|:---:| --------
    `id` | `Number` | Уникальный идентификатор.
    `name` | `String` | Имя пользователя.
    `picture` | `String` | Изображение пользователя.
    
  - Пример данных:

    ```json
    [
      {
        "id": 3,
        "name": "Иванов Иван",
        "picture": "data:image/jpeg;base64,/9j/4AAQSkZJR0lGODlhEAAOAcGCmTIUEq"
      }
    ]
    ```

- `categories.json` - данные категорий:
    
  - Описание данных:
  
    Свойство | Тип | Описание
    :-------:|:---:| --------
    `id` | `Number` | Уникальный идентификатор.
    `name` | `String` | Имя категории.
    
  - Пример данных:

    ```json
    [
      { "id": 3, "name": "Программирование" },
      { "id": 6, "name": "Интернет" },
      { "id": 7, "name": "Образование" }
    ]
    ```

- `categories.json` - данные тэгов:
    
  - Описание данных:
  
    Свойство | Тип | Описание
    :-------:|:---:| --------
    `id` | `Number` | Уникальный идентификатор.
    `name` | `String` | Имя тэга.
    
  - Пример данных:

    ```json
    [
      { "id": 3, "name": "HTML" },
      { "id": 5, "name": "CSS" },
      { "id": 6, "name": "JavaScript" }
    ]
    ```

<disqus-comments
  page-uuid="73464fea-046b-4dad-ac0d-a2e973598a45"
  page-title="2. JavaScript и Node.js | Лабораторные работы"/>