---
sidebar: auto
---

# 4. Блочная модель. Псевдоэлементы. Emmet

## Общая информация

::: warning Обратите внимание!
[Вложенный](https://webref.ru/css/selector/descendant),
[дочерний](https://webref.ru/css/selector/child),
[соседний](https://webref.ru/css/selector/adjacent) и
[родственный](https://webref.ru/css/selector/sibling) селекторы лучше называть
**комбинаторами**.
:::

Затраты времени (из доступных **180 минут**):

- **80-90 минут** - объяснение материала.
- **90-100 минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### Связь с внешними документами с помощью элемента `<link>`

Подключение иконки и внешних стилей с помощью элемента
[`<link>`](https://webref.ru/html/link) и его атрибутов
[`href`](https://webref.ru/html/link/href) и
[`rel`](https://webref.ru/html/link/rel).

Файл с кодом HTML:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Внешние документы</title>
  <link rel="icon" href="icons/icon192.png">
  <link rel="stylesheet" href="styles/style.css">
</head>

<body>
  <h1>Заголовок</h1>
</body>

</html>
```

Файл `styles/style.css` с кодом CSS:

```css
h1 {
  color: white;
  background-color: red;
}
```

### Блочная модель и относящиеся к ней свойства CSS

В [блочной модели](https://webref.ru/layout/learn-html-css/box-model) элемент
рассматривается как прямоугольный контейнер, имеющий область содержимого и 
необязательные рамки и отступы (внутренние и внешние).

![Блочная модель](~practice/04/assets/box_model.svg)

Блочная модель:

- *Содержимое* - содержимое элемента (например, текст или изображение, или 
другой элемент).
- *Поля* - расстояние между содержимым и границей элемента. Задаётся 
свойством [`padding`](https://webref.ru/css/padding).
- *Границы* - видимая граница элемента. Задаётся свойством
[`border`](https://webref.ru/css/border).
- *Отступы* - расстояние снаружи элемента от границы до соседних элементов. 
Задаётся свойством [`margin`](https://webref.ru/css/margin).

Показать блочную модель нескольких элементов в инструментах разработчика 
Chrome.

Алгоритм расчёта ширины и высоты элемента можно изменить с помощью свойства 
[`box-sizing`](https://webref.ru/css/box-sizing).

Пример работы с блочной моделью:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Блочная модель</title>
  <style>
    .box {
      box-sizing: border-box;
      width: 200px;
      padding: 50px;
      border: 3px solid red;
      margin: 50px;
    }
  </style>
</head>

<body>
  <p class="box">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
    magna aliquam erat volutpat.
    Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea
    commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate
    velit esse molestie consequat, vel illum dolore eu feugiat
    nulla facilisis at vero eros et accumsan et iusto odio
    dignissim qui blandit praesent luptatum zzril delenit augue
    duis dolore te feugait nulla facilisi.
  </p>
</body>

</html>
```

### Блочные, строчные и строчно-блочные элементы, свойство `display`

Свойство [`display`](https://webref.ru/css/display) определяет тип 
контейнера элемента. Для каждого элемента существует значение браузера по 
умолчанию. Это значение можно при необходимости изменить. Элементы бывают:

- [Блочные](https://webref.ru/course/block-inline/block) - `display: block` 
(`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<p>`, `<hr>`, `<ul>`, 
`<ol>`, `<li>`, `<table>` и др.). Создают разрыв строки перед элементом и 
после него, образуя прямоугольную область, по ширине занимающую всю ширину 
веб-страницы или блока-родителя (если для элемента не задано значение 
ширины). Блочные элементы могут содержать как строчные, так и блочные 
элементы, но не оба типа элементов сразу. Блочные элементы могут содержаться
только в пределах блочных элементов.
- [Строчные](https://webref.ru/course/block-inline/inline) - `display: 
inline` (`<span>`, `<a>`, `<img>`, `<iframe>` и др.). Ширина и высота 
строчного элемента зависит только от его содержимого, задать размеры с 
помощью CSS нельзя. Можно увеличить расстояние между соседними элементами по
горизонтали с помощью горизонтальных полей и отступов.
- [Строчно-блочные](https://webref.ru/course/block-inline/inline-block) - 
`display: inline-block` (`<audio>`, `<video>` и др.). Такие элементы 
являются строочными, но для них можно задавать поля, отступы, ширину и высоту.

Мы уже знаем универсальный строчный элемент
[`<span>`](https://webref.ru/html/span), который использовался для выделения
отдельных строк, символов или других строчных элементов для дальнейшего 
изменения их оформления с помощью стилей. Универсальный блочный элемент 
[`<div>`](https://webref.ru/html/div) предназначен для группирования 
элементов документа с целью изменения вида содержимого через стили.

Пример работы со свойством [`display`](https://webref.ru/css/display):

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Свойство display</title>
  <style>
    div {
      width: 50px;
      height: 50px;
      margin: 5px;
      padding: 5px;
      text-align: center;
    }

    .block {
      display: block;
      border: 3px solid red;
      background-color: orange;
    }

    .inline {
      display: inline;
      border: 3px solid black;
      background-color: lightgreen;
    }

    .inline-block {
      display: inline-block;
      border: 3px solid blue;
      background-color: yellow;
    }
  </style>
</head>

<body>
  <!-- display: block -->
  <div class="block">block1</div>
  <div class="block">block2</div>

  <!-- display: inline -->
  <div class="inline">inline1</div>
  <div class="inline">inline2</div>

  <!-- display: inline-block -->
  <div class="inline-block">inline-block1</div>
  <div class="inline-block">inline-block2</div>
</body>

</html>
```

Подробнее можно почитать в статье ["Открываем блочную модель"
](https://webref.ru/layout/learn-html-css/box-model).

### Не расмотренные ранее виды селекторов

Селекторы:

- [Селектор атрибута](https://webref.ru/css/selector/attr) - `[attr]`.

- Комбинаторы:

  - [Вложенный селектор](https://webref.ru/css/selector/descendant) - `A B`.
  - [Дочерний селектор](https://webref.ru/css/selector/child) - `A > B`.
  - [Соседний селектор](https://webref.ru/css/selector/adjacent) - `A + B`.
  - [Родственный селектор](https://webref.ru/css/selector/sibling) - `A ~ B`.

Комбинаторы, как и следует из названия, предназначены для объединения 
различных селекторов. Существует четыре типа комбинаторов для указания 
отношений между элементами.

Полный список вариантов использования селектора атрибута:

| Селектор          | Описание |
| :---------------: | -------- |
| `[attr]`          | Все элементы с атрибутом по имени `attr`. |
| `[attr="value"]`  | Все элементы с атрибутом по имени `attr`, значение которого в точности совпадает с `"value"`. |
| `[attr^="value"]` | Все элементы с атрибутом по имени `attr`, значение которого начинается с `"value"`. |
| `[attr$="value"]` | Все элементы с атрибутом по имени `attr`, значение которого заканчивается на `"value"`. |
| `[attr*="value"]` | Все элементы с атрибутом по имени `attr`, значение которого содержит по крайней мере одно вхождение  `"value"` как подстроки. |
| `[attr~="value"]` | Все элементы с атрибутом по имени `attr`, значением которого является набор слов, разделённых пробелами, одно из которых в точности совпадает с `"value"`. |
| `[attr|="value"]` | Все элементы с атрибутом по имени `attr`, значение которого или в точности совпадает с `"value"`, или начинается с `"value"`, после которого идёт дефис `"-"`. |

Пример использования селекторов:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Селекторы</title>
  <style>
    [title]:hover {
      font-size: 30px;
    }
  
    .block .block-footer {
      color: red;
    }
    
    .block > .block-image {
      border: 1px solid red;
    }
    
    .block-header + .block-text {
      color: blue;
    }
    
    .block-header ~ .block-footer {
      font-style: italic;
    }
  </style>
</head>

<body>
  <div class="block">
    <img src="" alt="" class="block-image">
    
    <div class="block-contents">
      <h2 class="block-header">Заголовок блока</h2>
      <p class="block-text" title="Подсказка">Абзац блока</p>
      <p class="block-footer">Подвал блока</p>
    </div>
  </div>
</body>

</html>
```

Повторить все виды селекторов, включая рассмотренные ранее.

### Псевдоэлементы

Псевдоэлементы позволяют задать стиль элементов не определённых в дереве 
элементов документа, а также генерировать содержимое, которого нет в 
исходном коде текста. Псевдоэлементы начинаются с `::`, чтобы отличить их от
псевдоклассов.

Псевдоэлементы (почти все существующие):

- Первый символ в тексте
[`::first-letter`](https://webref.ru/css/first-letter).
- Первая строка текста [`::first-line`](https://webref.ru/css/first-line).
- Отображения контента до содержимого элемента
[`::before`](https://webref.ru/css/before), после содержимого элемента 
[`::after`](https://webref.ru/css/after) и свойство
[`content`](https://webref.ru/css/content).
- Выделенный текст [`::selection`](https://webref.ru/css/first-line).

Пример использования псевдоэлементов:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Блочная модель</title>
  <style>
    p::first-letter {
      font-size: 30px;
      color: blue;
    }
    
    p::first-line {
      font-style: italic;
    }
    
    p::before, p::after {
      content: "+";
    }
    
    ::selection {
      color: white;
      background-color: red;
    }
  </style>
</head>

<body>
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
    magna aliquam erat volutpat.
    Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea
    commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate
    velit esse molestie consequat, vel illum dolore eu feugiat
    nulla facilisis at vero eros et accumsan et iusto odio
    dignissim qui blandit praesent luptatum zzril delenit augue
    duis dolore te feugait nulla facilisi.
  </p>
</body>

</html>
```

### Emmet

Рассказать про [Emmet](https://emmet.io). Этот инструмент позволяет ускорить 
разработку путём использования так называемых *сокращений*. Синтаксис 
сокращений создан на основе селекторов.

Пример сокращения:

```html
#contents.items-container>ul.items-list>li{Пункт $}*3
```

Результат:

```html
<div id="contents" class="items-container">
  <ul class="items-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
  </ul>
</div>
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.