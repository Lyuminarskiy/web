# 4. Блочная модель. Псевдоэлементы. Emmet

Темы занятия:

- Связь с внешними документами с помощью элемента [`<link>`](https://webref.ru/html/link).
- Блочная модель и относящиеся к ней свойства CSS.
- Блочные, строчные и строчно-блочные элементы, свойство [`display`](https://webref.ru/css/display).
- Прочие виды селекторов.
- Псевдоэлементы.
- [Emmet](https://emmet.io).

### Теоретические сведения

На этом занятии мы рассмотрели следующее:

- HTML:

  - Связь с внешним документом [`<link>`](https://webref.ru/html/link) и его атрибуты [`href`](https://webref.ru/html/link/href) и [`rel`](https://webref.ru/html/link/rel).
  - Универсальный блочный элемент [`<div>`](https://webref.ru/html/div)

- CSS:

  - Блочная модель (вместо `*` подставить одно из следующих значений: `top`, `bottom`, `left`, `right`):

    - Величина полей [`padding`](https://webref.ru/css/padding) и `padding-*`.
    - Величина отступа [`margin`](https://webref.ru/css/padding) и `margin-*`.

  - Алгоритм расчёта ширины и высоты элемента [`box-sizing`](https://webref.ru/css/box-sizing).
  - Способ отображения элемента [`display`](https://webref.ru/css/display).

  - Селекторы:

    - [Вложенный селектор](https://webref.ru/css/selector/descendant).
    - [Дочерний селектор](https://webref.ru/css/selector/child).
    - [Соседний селектор](https://webref.ru/css/selector/adjacent).
    - [Родственный селектор](https://webref.ru/css/selector/sibling).
    - [Селектор атрибутов](https://webref.ru/css/selector/attr).

  - Псевдоэлементы:

    - Первый символ в тексте [`::first-letter`](https://webref.ru/css/first-letter).
    - Первая строка текста [`::first-line`](https://webref.ru/css/first-line).
    - Отображения контента до содержимого элемента [`::before`](https://webref.ru/css/before), после содержимого элемента [`::after`](https://webref.ru/css/after) и свойство [`content`](https://webref.ru/css/content).
    - Выделенный текст [`::selection`](https://webref.ru/css/first-line).

Блочная модель:

![Блочная модель](./box_model.svg)

## 4.1. Псевдоэлементы

Доработайте веб-страницу, созданную в задании [`3.3. Стилизация списков`](../../practice/03/#_3-3-иnnюстрации), выполнив следующие задачи:

1. Найдите портрет А. И. Куприна и установите его в качестве иконки веб-страницы.
2. Вынесите весь код CSS в отдельный файл под названием `style.css`.
3. Увеличьте верхний и нижний отступы у заголовков и изображений.
4. При наведении на заголовок добавлять перед ним символ `#` произвольного цвета.
5. Установите произвольный цвет текста и размер шрифта для первого символа первого абзаца каждой из частей (буквица).
6. Установите произвольные цвет и фон для выделенного текста.

