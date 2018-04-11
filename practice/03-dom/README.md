[Назад к описанию курса](../../README.md)

# Объектная модель документа (DOM)

Содержание:
- [1. Навигация по элементам](#1-Навигация-по-элементам)
  - [1.1. Ссылки](#11-Ссылки)
  - [1.2. Задачи](#12-Задачи)
    - [1.2.1. Доступ к элементу](#121-Доступ-к-элементу)
    - [1.2.2. Работа с таблицей](#122-Работа-с-таблицей)
- [2. Поиск элементов](#2-Поиск-элементов)
  - [2.1. Ссылки](#21-Ссылки)
  - [2.2. Задачи](#22-Задачи)
    - [2.2.1. Поиск элементов форм](#221-Поиск-элементов-форм)
    - [2.2.2. Обход дерева элементов](#222-Обход-дерева-элементов)
- [3. Свойства элементов](#3-Свойства-элементов)
  - [3.1. Ссылки](#31-Ссылки)
  - [3.2. Задачи](#32-Задачи)
    - [3.2.1. Добавление класса](#321-Добавление-класса)
    - [3.2.2. Установка класса](#322-Установка-класса)
    - [3.2.3. Установка стилей](#323-Установка-стилей)
- [4. Добавление и удаление элементов](#4-Добавление-и-удаление-элементов)
  - [4.1. Ссылки](#41-Ссылки)
  - [4.2. Задачи](#42-Задачи)
    - [4.2.1. Удаление потомков элемента](#421-Удаление-потомков-элемента)
    - [4.2.2. Сортировка таблицы](#422-Сортировка-таблицы)

## 1. Навигация по элементам

`DOM` – это представление документа в виде дерева объектов, доступное для изменения через JavaScript. Доступ к `DOM` производится через встроенный объект `document`.

`DOM` состоит из узлов разных типов, вот некоторые из них:
- документ – точка входа в `DOM`,
- элементы – основные строительные блоки,
- текстовые узлы,
- комментарии.

Навигация по узлам относительно произвольного узла `node`:
- `node.parentNode` - родительский узел,
- `node.previousSibling` - предшествующий соседний узел,
- `node.nextSibling` - последующий соседний узел,
- `node.childNodes` - коллекция дочерних узлов,
- `node.firstChild` - первый дочерний узел,
- `node.lastChild` - последний дочерний узел.

Корневые элементы доступны напрямую:
- `document.documentElement` - элемент `html`,
- `document.head` - элемент `head`,
- `document.body` - элемент `body`.

Навигация по элементам относительно произвольного элемента `elem`:
- `elem.parentElement` - родительский элемент,
- `elem.previousElementSibling` - предшествующий соседний элемент,
- `elem.nextElementSibling` - последующий соседний элемент,
- `elem.children` - коллекция дочерних элементов,
- `elem.firstElementChild` - первый дочерний элемент,
- `elem.lastElementChild` - последний дочерний элемент.

Если элементы по ссылке не существуют, то значением свойства будет `null`. Например, у элемента `html` нет родителя и соседних элементов:

> ```js
> -> document.documentElement.parentElement
> <- null
> -> document.documentElement.previousElementSibling
> <- null
> -> document.documentElement.nextElementSibling
> <- null
> ```

Следующий пример в цикле выводит в консоль все дочерние элементы элемента `body`:

```js
for (var elem of document.body.children) {
  console.log(elem)
}
```

У некоторых элементов `DOM` могут быть свои дополнительные ссылки для большего удобства навигации. Например, такие ссылки есть у элементов таблиц:
- элемент `table`:
  - `table.rows` - коллекция строк таблицы (`tr`),
  - `table.caption` - заголовок таблицы (`caption`),
  - `table.tHead` - первая строка таблицы (`thead`),
  - `table.tFoot` - последняя строка таблицы (`tfoot`),
- элементы `thead`, `tfoot` и `tbody`:
  - `elem.rows` - коллекция строк секции (`tr`),
- элемент `tr`:
  - `tr.cells` - коллекция ячеек (`td` и `th`),
  - `tr.rowIndex` - номер строки в таблице,
- элементы `td` и `th`:
  - `td.cellIndex` - номер ячейки в строке.

### 1.1. Ссылки

- [Объект `Document`](https://developer.mozilla.org/ru/docs/Web/API/Document)

### 1.2. Задачи

#### 1.2.1. Доступ к элементу

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <p>Список:</p>
  <ul>
    <li>Первый</li>
    <li>Второй</li>
    <li>Третий</li>
  </ul>
</body>

</html>
```

Написать скрипт, который:
1. получит элемент списка `ul`,
2. получит второй элемент `li` списка.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var ul = document.body.children[1];
var li = ul.children[1];
```

<hr>
</details>

#### 1.2.2. Работа с таблицей

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    td {
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td><td>2:1</td><td>3:1</td><td>4:1</td><td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td><td>2:2</td><td>3:2</td><td>4:2</td><td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td><td>2:3</td><td>3:3</td><td>4:3</td><td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td><td>2:4</td><td>3:4</td><td>4:4</td><td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td><td>2:5</td><td>3:5</td><td>4:5</td><td>5:5</td>
    </tr>
  </table>
</body>

</html>
```

Написать скрипт, который выделит все ячейки `td` в таблице `table` по диагонали. Выделять ячейки с помощью следующей команды:

```js
td.style.backgroundColor = 'yellow';
```

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
  var row = table.rows[i];
  row.cells[i].style.backgroundColor = 'yellow';
}
```

<hr>
</details>

## 2. Поиск элементов

Методы поиска:

| Метод                                | Описание                                                                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `document.getElementById(id)`        | Получить элемент по его идентификатору `id`.                                                                |
| `elem.getElementsByTagName(tag)`     | Получить коллекцию элементов внутри элемента `elem` с тегом `tag`.                                          |
| `elem.getElementsByClassName(class)` | Получить коллекцию элементов внутри элемента `elem` с классом `class`.                                      |
| `elem.querySelectorAll(selector)`    | Получить коллекцию элементов внутри элемента `elem`, соответствующих селектору `selector`.                  |
| `elem.querySelector(selector)`       | Получить первый элемент внутри элемента `elem`, соответствующий селектору `selector`.                       |
| `elem.closest(selector)`             | Получить ближайший родительский элемент, соответствующий селектору `selector` (включая сам элемент `elem`). |

Можно получить всех потомков элемента, если в метод `elem.getElementsByTagName(tag)` вместо тега передать символ `*`:

```js
// Получить все элементы документа.
document.getElementsByTagName('*');

// Получить всех потомков элемента elem.
elem.getElementsByTagName('*');
```

### 2.1. Ссылки

- [Объект `Document`](https://developer.mozilla.org/ru/docs/Web/API/Document)

### 2.2. Задачи

#### 2.2.1. Поиск элементов форм

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form name="search">
    <label>Поиск по сайту:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Искать!">
  </form>

  <hr>

  <form name="search-person">
    Поиск по посетителям:
    <table id="age-table">
      <tr>
        <td>Возраст:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">до 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">более 50</label>
        </td>
      </tr>

      <tr>
        <td>Дополнительно:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Искать!">
  </form>
</body>

</html>
```

Написать скрипт, который найдёт на странице:
1. все элементы `label` внутри таблицы,
2. первую ячейку таблицы (со словом `Возраст`),
3. вторую форму в документе,
4. форму с именем `search`,
5. первый элемент `input` в форме с именем `search`,
6. элемент с именем `info[0]`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
// 1
document.getElementById('age-table').getElementsByTagName('label');

// 2
document.querySelector('#age-table td');

// 3
document.getElementsByTagName('form')[1];

// 4
document.querySelector('form[name="search"]');

// 5
document.querySelector('form[name="search"] input')

// 6
document.querySelector('[name="info[0]"]')[0];
```

<hr>
</details>

#### 2.2.2. Обход дерева элементов

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <ul>
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>

        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</body>

</html>
```

Написать скрипт, который для каждого элемента `li` выведет текст в этом элементе и количество вложенных в него элементов `li`. Текст элемента можно получить с помощью следующей команды:

```js
list[i].firstChild.data
```

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var list = document.getElementsByTagName('li');

for (i = 0; i < list.length; i++) {
  var title = list[i].firstChild.data.trim();
  var childCount = list[i].getElementsByTagName('li').length;
  alert(title + ' ' + childCount);
}
```

<hr>
</details>

## 3. Свойства элементов

Основные свойства элементов:

| Свойство         | Описание                                                                |
| ---------------- | ----------------------------------------------------------------------- |
| `elem.tagName`   | Получить имя тега элемента `elem`.                                      |
| `elem.innerHTML` | Позволяет получить и установить HTML-содержимое элемента в виде строки. |

Также элементы имеют другие свойства, зависящие от типа, например:
- `id` - идентификатор,
- `hidden` - видимость элемента,
- `href` - адрес ссылки.

Посмотреть все свойства элемента можно либо в документации, либо с помощью метода `console.dir(elem)` в интерактивной консоли браузера.

HTML-атрибуты и DOM-свойства обычно, но не всегда соответствуют друг другу. Бывают ситуации, когда атрибут имеет одно значение, а свойство – другое. Бывает и так, что атрибут есть, а свойства с таким названием не создаётся.

Методы для доступа к атрибутам элемента `elem`:
- `elem.hasAttribute(name)` – проверяет наличие атрибута,
- `elem.getAttribute(name)` – получает значение атрибута,
- `elem.setAttribute(name, value)` – устанавливает атрибут,
- `elem.removeAttribute(name)` – удаляет атрибут.

Методы для работы с классами элемента `elem`:
- `elem.classList.contains(name)` – проверяет наличие класса,
- `elem.classList.add(name)` - добавляет класс,
- `elem.classList.remove(name)` - удаляет класс,
- `elem.classList.toggle(name)` - если класса нет, добавляет его, если есть – удаляет.

Атрибуты элемента `elem`, имя которых начинается с `data-`, доступны через специальное свойство `elem.dataset`.

Установить стиль элемента `elem` можно через специальное свойство `elem.style`:

```js
// Стиль можно установить через свойства.
elem.style.width='100px';
elem.style.color='red';
elem.style.backgroundColor='blue';

// Сбросить поставленный стиль.
elem.style.width='';

// Либо в виде строки.
elem.style.cssText = 'width: 100px; color: red';
```

Получить значения стиля элемента `elem` можно с помощью встроенной функции `getComputedStyle(elem)`:

```js
// Выведет пустую строку.
alert(document.body.style.margin);

var computedStyle = getComputedStyle(document.body);

// Выведет реальное значение свойства.
alert(computedStyle.margin);
```

### 3.1. Ссылки

- [Объект `Document`](https://developer.mozilla.org/ru/docs/Web/API/Document)

### 3.2. Задачи

#### 3.2.1. Добавление класса

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div id="widget" data-widget-name="menu">Выберите жанр</div>
</body>

</html>
```

Написать скрипт, получающий значение атрибута `data-widget-name` элемента `div`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var div = document.getElementById('widget');
var widgetName = div.dataset.widgetName;
```

<hr>
</details>

#### 3.2.2. Установка класса

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .secure {
      color: white;
      background-color: green;
    }
  </style>
</head>

<body>
  <ul>
    <li><a href="https://google.com">https://google.com</a></li>
    <li><a href="http://nodejs.org">http://nodejs.org</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="https://vk.com">https://vk.com</a></li>
  </ul>
</body>

</html>
```

Написать скрипт, добавляющий класс `external` для всех ссылок, для которых указан защищённый протокол `https`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var links = document.querySelectorAll('a[href^="https://"]');
for (var link of links) {
  link.classList.add('secure');
}
```

<hr>
</details>

#### 3.2.3. Установка стилей

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <a class="button" href="#">Нажми меня</a>
</body>

</html>
```

Написать скрипт, устанавливающий для элемента `a` стиль (с помощью свойства `style`), аналогичный следующему:

```css
.button {
  border-radius: 8px;
  border: 2px groove green;
  display: block;
  height: 30px;
  line-height: 30px;
  width: 100px;
  text-decoration: none;
  text-align: center;
  color: red;
  font-weight: bold;
}
```

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var s = document.querySelector('a.button').style;
s.borderRadius = '8px';
s.border = '2px groove green';
s.display = 'block';
s.height = '30px';
s.lineHeight = '30px';
s.width = '100px';
s.textDecoration = 'none';
s.textAlign = 'center';
s.color = 'red';
s.fontWeight = 'bold';
```

<hr>
</details>

## 4. Добавление и удаление элементов

Список методов:

| Метод                                        | Описание                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `document.createElement(tag)`                | Создает новый элемент с указанным тегом `tag`.                                              |
| `parentElem.appendChild(elem)`               | Добавляет `elem` в конец дочерних элементов `parentElem`.                                   |
| `parentElem.insertBefore(elem, nextSibling)` | Вставляет `elem` в коллекцию детей `parentElem`, перед элементом `nextSibling`.             |
| `elem.cloneNode(deep)`                       | Клонирует элемент `elem`, если `deep == true`, то со всеми потомками, иначе – без потомков. |
| `parentElem.removeChild(elem)`               | Удаляет `elem` из списка детей `parentElem`.                                                |
| `parentElem.replaceChild(newElem, elem)`     | Среди детей `parentElem` удаляет `elem` и вставляет на его место `newElem`.                 |
| `elem.remove()`                              | Удаляет элемент `elem`.                                                                     |

### 4.1. Ссылки

- [Объект `Document`](https://developer.mozilla.org/ru/docs/Web/API/Document)

### 4.2. Задачи

#### 4.2.1. Удаление потомков элемента

Написать функцию `removeChildren(elem)`, которая удаляет всех потомков элемента `elem`:

> ```js
> -> elem.children.length
> <- 6
> -> removeChildren(elem)
> <- undefined
> -> elem.children.length
> <- 0
> ```

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}
```

<hr>
</details>

#### 4.2.2. Сортировка таблицы

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <table>
    <tbody>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Возраст</th>
      </tr>
      <tr>
        <td>Вася</td>
        <td>Петров</td>
        <td>Александрович</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Петя</td>
        <td>Иванов</td>
        <td>Петрович</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Владимир</td>
        <td>Ленин</td>
        <td>Ильич</td>
        <td>9</td>
      </tr>
    </tbody>
  </table>
</body>

</html>
```

Написать скрипт, который отсортирует таблицу по столбцу `Возраст`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var tbody = document.getElementsByTagName('tbody')[0];
var rows = [];

// Копируем строки в массив.
for (var i = 0; i < tbody.children.length; i++) {
  rows.push(tbody.children[i]);
}

// Сортируем строки в массиве.
rows.sort((a, b) => a.lastChild.innerHTML - b.lastChild.innerHTML)

// Переставляем строки в таблице.
for (var i = 0; i < rows.length; i++) {
  tbody.appendChild(rows[i]);
}
```

<hr>
</details>