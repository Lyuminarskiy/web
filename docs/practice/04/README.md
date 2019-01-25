# 4. Блочная модель. Псевдоэлементы. Emmet

## Темы занятия

- Связь с внешними документами с помощью элемента
[`<link>`](https://webref.ru/html/link).
- [Блочная модель](https://webref.ru/layout/learn-html-css/box-model).
- [Блочные](https://webref.ru/course/block-inline/block),
[строчные](https://webref.ru/course/block-inline/inline) и
[строчно-блочные](https://webref.ru/course/block-inline/inline-block) 
элементы, свойство [`display`](https://webref.ru/css/display).
- Не расмотренные ранее виды селекторов.
- Псевдоэлементы.p
- [Emmet](https://emmet.io).

## Теоретические сведения

### HTML

- [`<link>`](https://webref.ru/html/link) - связь с внешним документом, и его 
атрибуты [`href`](https://webref.ru/html/link/href) и
[`rel`](https://webref.ru/html/link/rel).

- Виды элементов:

  - [Блочные](https://webref.ru/course/block-inline/block).
  - [Строчные](https://webref.ru/course/block-inline/inline).
  - [Строчно-блочные](https://webref.ru/course/block-inline/inline-block)

- [`<div>`](https://webref.ru/html/div) - универсальный блочный элемент.

### CSS

- [Блочная модель](https://webref.ru/layout/learn-html-css/box-model)
(`*` - `top`, `bottom`, `left`, или `right`):

  - [`padding`](https://webref.ru/css/padding) и `padding-*` - величина полей
  (внутренних отступов).
  - [`margin`](https://webref.ru/css/padding) и `margin-*` - величина отступов
  (внешних отступов).

- [`box-sizing`](https://webref.ru/css/box-sizing) - алгоритм расчёта ширины и 
высоты элемента.

- [`display`](https://webref.ru/css/display) - способ отображения элемента.

Селекторы:

- [`[attr]`](https://webref.ru/css/selector/attr) - селектор атрибута.

- Комбинаторы:

  - [`A B`](https://webref.ru/css/selector/descendant) - вложенный селектор.
  - [`A > B`](https://webref.ru/css/selector/child) - дочерний селектор.
  - [`A + B`](https://webref.ru/css/selector/adjacent) - соседний селектор.
  - [`A ~ B`](https://webref.ru/css/selector/sibling) - родственный селектор.

- Псевдоэлементы:

  - [`::first-letter`](https://webref.ru/css/first-letter) -
  первый символ в тексте.
  - [`::first-line`](https://webref.ru/css/first-line) - первая строка текста.
  - [`::before`](https://webref.ru/css/before) и
  [`::after`](https://webref.ru/css/after) - отображения контента до 
  содержимого элемента и после содержимого элемента соответственно, и свойство
  [`content`](https://webref.ru/css/content).
  - [`::selection`](https://webref.ru/css/first-line) - выделенный текст.

Блочная модель:

![Блочная модель](./assets/box_model.svg)

## 4.1. Псевдоэлементы

Доработайте веб-страницу, созданную в задании
[`3.3. Изображения`](/practice/03/#_3-3-изображения), выполнив следующие 
задачи:

1. Найдите портрет А. И. Куприна и установите его в качестве иконки 
веб-страницы.
2. Вынесите весь код CSS в отдельный файл под названием `style.css`.
3. Установите одинаковый верхний и нижний отступы у заголовков и изображений.
4. При наведении на любой заголовок добавлять перед ним символ `#` 
произвольного цвета.
5. Установите произвольный цвет текста и размер шрифта для первого символа 
первого абзаца каждой из частей.
6. Установите произвольные цвет и фон для выделенного текста.

::: tip На заметку
При выполнении этого задания вам потребуется использовать псевдоэлементы. 
Если вы испытываете трудности с выбором правильного псевдоэлемента, обратите
внимание на раздел [Теоретические сведения](#теоретические-сведения).
:::

## 4.2. Виды элементов

Создайте веб-страницу следующего вида:

<practice-04-task-02/>

Подзадачи:

- Используйте следующую структуру элементов:

```html
<div class="card">
  <div class="card-image"></div>
  <div class="card-content">
    <div class="card-header"></div>
    <div class="card-text narrow"></div>
    <div class="card-text wide"></div>
    <div class="card-text wide"></div>
    <div class="card-text narrow"></div>
  </div>
</div>
```

- Используйте только [селекторы класса](https://webref.ru/css/selector/class).
- Установите у элементов с классом:

  1. `card-image` ширину `30%` и высоту `100%`.
  2. `card-content` ширину `60%` и высоту `100%`, а также свойство 
  [`vertical-align`](https://webref.ru/css/vertical-align).
  3. `narrow` ширину `30%`.
  4. `wide` ширину `60%`.

- Используйте следующую палитру цветов:

  1. `#333`,
  2. `#555`,
  3. `#eee`,
  4. `black`.

::: tip На заметку
Для выполнения этого задания вам понадобится изменять значение свойства 
[`display`](https://webref.ru/css/display) у элементов.
:::

::: warning Обратите внимание!
В этом задании потребовалось использовать ранее неизвестное для вас свойство
[`vertical-align`](https://webref.ru/css/vertical-align). Изучите его смысл 
и значения **самостоятельно**.
:::

## 4.3. Селекторы

Задачи:

1. Создайте новый документ с именем `index.html` со следующим содержимым:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Селекторы</title>
</head>

<body>
  <div class="card">
    <img class="card-image" src="#" alt="">
    <div class="card-content">
      <h2 class="card-header">Заголовок карточки</h2>
      <p class="card-datetime">01 сентября 2005 г.</p>
      <p class="card-text">Текст карточки</p>
    </div>
  </div>
</body>

</html>
```

2. В том же каталоге создайте файл `style.css` и подключите его к `index.html`.
3. Используя различные виды селекторов, напишите и продемонстрируйте 
преподавателю пять различных способов применить к элементу
[`<p>`](https://webref.ru/html/p) с классом `card-datetime` следующий блок 
объявлений:

```css
p.card-datetime {
  color: white;
  background-color: red;
}
```

::: tip На заметку
При выполнении этого задания вам потребуется использовать различные виды 
селекторов. Если вы испытываете трудности с выбором правильного вида 
селектора, обратите внимание на раздел
[`Теоретические сведения`](#теоретические-сведения)
:::

::: danger Распространённая ошибка!
Так как у элементов в примере **указаны классы**, то использование 
[селекторов класса](https://webref.ru/css/selector/class) является более 
предпочтительным, чем использование
[селекторов типа](https://webref.ru/css/selector/tag).
:::

## 4.4. Emmet

Напишите и продемонстрируйте преподавателю сокращение
[Emmet](https://emmet.io) для создания следующей структуры элементов:

```html
<div id="items-list">
  <p class="list-header">Список:</p>
  <ol reversed start="8">
    <li class="list-item">Пункт 08</li>
    <li class="list-item">Пункт 07</li>
    <li class="list-item">Пункт 06</li>
    <li class="list-item">Пункт 05</li>
    <li class="list-item">Пункт 04</li>
  </ol>
</div>
```

::: tip На заметку
Синтаксис сокращений [Emmet](https://emmet.io) схож с синтаксисом селекторов.
Подробное описание можно посмотреть в
[официальной документации](https://docs.emmet.io/abbreviations/syntax).
:::

::: warning Обратите внимание!
Так как вы только знакомитесь с [Emmet](https://emmet.io), то не стремитесь 
написать правильное сокращение с первого раза. Более продуктивно будет 
сначала создать сокращение для базовой структуры элементов, и затем 
постепенно усложнять его до тех пор, пока вы не получите требуемый результат.
:::
  
<script-button/>

<disqus-comments
  page-uuid="d4883cce-4d79-4289-9f0a-5df7b990ee43"
  page-title="4. Блочная модель. Псевдоэлементы.
    Emmet | Практические занятия"/>