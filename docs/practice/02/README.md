# 2. Таблицы стилей. Списки

## Темы занятия

- Элемент [`<style>`](https://webref.ru/html/style).
- Универсальные атрибуты [`id`](https://webref.ru/html/attr/id) и
[`class`](https://webref.ru/html/attr/class).
- Универсальный селектор, cелекторы типа, идентификатора и класса.
- Свойства CSS для стилизации текста.
- Элементы для создания списков и свойства CSS для стилизации списков.

## Теоретические сведения

### HTML

- [`<style>`](https://webref.ru/html/style) - таблицы стилей для всего 
документа.
- [`id`](https://webref.ru/html/attr/id) - идентификатор элемента,
_универсальный атрибут_.
- [`class`](https://webref.ru/html/attr/class) - класс элемента,
_универсальный атрибут_.

- [Элементы списков](https://metanit.com/web/html5/2.5.php):

  - [`<ul>`](https://webref.ru/html/ul) - маркированный список.
  - [`<ol>`](https://webref.ru/html/ol) - нумерованный список, и его атрибуты 
  [`reversed`](https://webref.ru/html/ol/reversed) и
  [`start`](https://webref.ru/html/ol/start).
  - [`<li>`](https://webref.ru/html/li) - пункт списка.

### CSS

- Селекторы:

  - [Селектор типа](https://webref.ru/css/selector/tag).
  - [Универсальный селектор](https://webref.ru/css/selector/universal).
  - [Селектор идентификатора](https://webref.ru/css/selector/id).
  - [Селектор класса](https://webref.ru/css/selector/class).
  - [Группирование селекторов](http://htmlbook.ru/samcss/gruppirovanie). 

- Характеристики шрифта:

  - [`font-style`](https://webref.ru/css/font-style) - начертание шрифта.
  - [`font-variant`](https://webref.ru/css/font-variant) - способ отображения
  строчных букв.
  - [`font-weight`](https://webref.ru/css/font-weight) - насыщенность шрифта.
  - [`font-size`](https://webref.ru/css/font-size) - размер шрифта.
  - [`line-height`](https://webref.ru/css/line-height) - минимальная высота 
  строки текста.
  - [`font-family`](https://webref.ru/css/font-family) - семейство шрифта.
  - [`font`](https://webref.ru/css/font) - _универсальное свойство_ для 
  установки различных характеристик шрифта и текста.

- Отображения текста:

  - [`text-align`](https://webref.ru/css/text-align) - горизонтальное 
  выравнивание текста.
  - [`text-indent`](https://webref.ru/css/text-indent) - величина отступа 
  первой строки блока текста.
  - [`word-spacing`](https://webref.ru/css/word-spacing) - интервал между 
  словами.
  - [`letter-spacing`](https://webref.ru/css/letter-spacing) - интервал между
  символами.
  - [`text-transform`](https://webref.ru/css/text-transform) - преобразование
  регистра символов текста.

- Оформление текста:

  - [`text-shadow`](https://webref.ru/css/text-shadow) - тень текста.
  - [`text-decoration-line`](https://webref.ru/css/text-decoration-line) - 
  добавление декоративной линии к тексту.
  - [`text-decoration-style`](https://webref.ru/css/text-decoration-style) -
  стиль декоративной линии.
  - [`text-decoration-color`](https://webref.ru/css/text-decoration-color) -
  цвет декоративной линии.
  - [`text-decoration`](https://webref.ru/css/text-decoration) - 
  _универсальное свойство_ для добавления декоративной линии.

- Оформление списков:

  - [`list-style-type`](https://webref.ru/css/list-style-type) - вид маркеров
  элементов списка.
  - [`list-style-position`](https://webref.ru/css/list-style-position) -
  положение маркеров элементов списка относительно текста.
  - [`list-style-image`](https://webref.ru/css/list-style-image) - 
  изображение вместо стандартных маркеров элементов списка.
  - [`list-style`](https://webref.ru/css/list-style) - _универсальное 
  свойство_ для оформления списков

Cтруктура правила CSS:

![Cтруктура правила CSS](./assets/css_ruleset.svg)

## 2.1. Селекторы

Доработайте веб-страницу, созданную в задании
[`1.3. Стилизация текста`](/practice/01/#_1-3-стиnизация-текста), выполнив 
 следующие задачи:

1. Добавьте класс `direct-speech` у всех элементов, содержимым которых 
является прямая речь.
2. Замените стилизацию, установленную ранее с помощью универсального 
атрибута [`style`](https://webref.ru/html/attr/style), создав новое правило 
CSS, которое будет устанавливать цвет и/или фон текста у всех элементов 
класса `direct-speech`, а также менять начертание шрифта на курсивное.

## 2.2. Стилизация текста

Доработайте веб-страницу, созданную в предыдущем задании, выполнив следующие
задачи:

1. Укажите идентификаторы `header`, `part1`, `part2` и `part3` у заголовка 
рассказа и трёх частей рассказа соответственно.
2. Преобразуйте все символы элемента с идентификатором `header` к верхнему 
регистру, добавьте к нему декоративную двойную линию произвольного цвета под
текстом и выровняйте текст по центру.
3. Добавьте одинаковую тень произвольного цвета к элементам с 
идентификаторами `part1`, `part2` и `part3` и выровняйте их текст по центру.
4. Для каждого абзаца добавьте отступ первой строки произвольного размера и 
установите выравнивание текста по ширине.
5. Для всего текста на веб-странице установите шрифт `Arial`.

::: warning Обратите внимание!
Если у нескольких правил CSS блоки определения идентичны, а различаются 
только селекторы, то **объедините эти правила**, используя [группировку 
селекторов](http://htmlbook.ru/samcss/gruppirovanie).
:::

## 2.3. Элементы списков и их стилизация

Задачи:

1. После заголовка рассказа добавьте **абзац** и **ненумерованный список** 
следующего вида:

> Содержание:
>
> - Часть первая
> - Часть вторая
> - Часть третья

2. У элемента ненумерованного списка установите идентификатор `contents`.
3. Поменяйте вид маркеров списка на квадраты.
4. Преобразуйте все символы элементов списка к верхнему регистру.

::: warning Обратите внимание!
Если у элемента указан идентификатор, то для индивидуального обращения к 
нему следует использовать **селектор идентификаторов**.
:::
  
<script-button/>

<disqus-comments
  page-uuid="cf29a6d2-adbf-4612-a5f4-646a9fc03944"
  page-title="2. Таблицы стилей. Списки | Практические занятия"/>