---
sidebar: auto
---

# 5. Наследование и каскадность стилей. Позиционирование и CSS Grid

## Общая информация

::: warning Обратите внимание!
Не совсем корректно описан механизм расчёта 
[специфичности](https://www.w3.org/TR/selectors/#specificity). Следует 
привести описание в соответствие со спецификацией.

Перенести пример с Grid Layout в сценарий и убрать зависимость от JSFiddle.
:::

Затраты времени (из доступных **180 минут**):

- **100-120 минут** - объяснение материала.
- **60-80 минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### Псевдокласс `:not()`

Псевдокласс [`:not()`](https://webref.ru/css/not) задаёт правила стилей для 
элементов, которые не содержат указанный селектор. Пример использования 
 псевдокласса:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Псевдокласс :not()</title>
  <style>
    p:not([title]) {
      color: red;
    }
  </style>
</head>

<body>
  <p title="Всплывающая подсказка">Абзац 1</p>
  <p>Абзац 2</p>
  <p>Абзац 3</p>
</body>

</html>
```

### Наследование стилей

Для упрощения определения стилей в CSS применяется механизм
[наследования стилей](https://metanit.com/web/html5/5.9.php). Этот механизм 
предполагает, что вложенные элементы могут наследовать стили своих 
элементов-контейнеров.

Если нам нежелателен унаследованный стиль, то мы его можем переопределить 
для определенных элементов. При нескольких уровнях вложенности элементы 
наследуют стили только ближайшего контейнера.

Однако не ко всем свойствам CSS применяется наследование стилей. Например, 
свойства, которые представляют отступы
([`margin`](https://webref.ru/css/margin) и
[`padding`](https://webref.ru/css/padding)) и границы
([`border`](https://webref.ru/css/border)) элементов, не наследуются. В 
справочнике у каждого свойства указано, наследуется ли оно.

В примере наследования стилей продемонстрировать, что:

1. Два селектора `h2, div > p` можно заменить на один `div`.
2. Унаследованные стили можно переопределять.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Наследование стилей</title>
  <style>
    /* body {
      color: orange;
    } */

    h2, div > p {
      color: red;
    }
  </style>
</head>

<body>
  <div>
    <h2>Заголовок в блоке</h2>
    <p>Абзац в блоке</p>
  </div>
  <p>Абзац</p>
</body>

</html>
```

### Каскадность стилей, специфичность и значение `!important`

В CSS действует механизм
[каскадности](https://metanit.com/web/html5/5.10.php), которую можно 
определить как набор правил, определяющих последовательность применения 
множества стилей к одному и тому же элементу.

Если к элементу веб-страницы применяется несколько стилей, которые не 
конфликтуют между собой, то браузер объединяет их в один стиль:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Каскадность стилей</title>
  <style>
    a {
      color: white;
    }

    .link {
      background-color: red;
    }

    a[href="#"] {
      text-decoration: none;
    }
  </style>
</head>

<body>
  <a class="link" href="#">Основы CSS 3</a>
</body>

</html>
```

Если же стили конфликтуют между собой, например, определяют разный цвет 
текста, то в этом случае применяется сложная система правил для вычисления 
[специфичности](https://www.w3.org/TR/selectors/#specificity) каждого стиля.

CSS предоставляет возможность полностью отменить значимость стилей. Для 
этого в конце стиля указывается значение
[`!important`](https://webref.ru/css/%21important). Это значение стоит 
использовать только при работе с чужим кодом. Когда разрабатывается 
собственный сайт, и в нём применяется значение
[`!important`](https://webref.ru/css/%21important), то что-то с этим сайтом 
не так.

В примере каскадности стилей:

1. Показать, что свойства [`font-size`](https://webref.ru/css/font-size) и
[`font-style`](https://webref.ru/css/font-style) не конфликтуют и оба 
применяются к элементу.
2. Вместе со студентами вычислить селектор с наибольшей специфичностью.
3. Добавить значение [`!important`](https://webref.ru/css/%21important) к 
селектору с наименьшей специфичностью.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Расчёт специфичности</title>
  <style>
    /* Специфичность: 12 = 10 + 1 + 1 */
    .nav li a {
      color: red;
      font-size: 16pt;
    }

    /* Специфичность: 101 = 100 + 1 */
    #menu a {
      color: blue;
    }

    /* Специфичность: 20 = 10 + 10 */
    .nav .menuItem {
      color: green;
      font-style: italic;
    }

    /* Специфичность: 21 = 10 + 10 + 1 */
    a.menuItem:not(.newsLink) {
      color: orange;
    }

    /* Специфичность: 4 = 1 + 1 + 1 + 1 */
    div ul li a {
      color: purple;
    }
  </style>
</head>

<body>
  <div id="menu">
    <ul class="nav">
      <li><a class="menuItem">Ссылка</a></li>
    </ul>
  </div>
</body>

</html>
```

Таблица для расчёта специфичности:

| Специфичность | Применимость |
| :-----------: | ------------ |
| `0`           | [Универсальный](https://webref.ru/css/selector/universal), [вложенный](https://webref.ru/css/selector/descendant), [дочерний](https://webref.ru/css/selector/child), [соседний](https://webref.ru/css/selector/adjacent), [родственный](https://webref.ru/css/selector/sibling) селекторы и псевдокласс [`:not()`](https://webref.ru/css/not). |
| `1`           | [Селектор типа](https://webref.ru/css/selector/tag) и [псевдоэлементы](https://webref.ru/css/type/pseudoelement). |
| `10`          | Селекторы [класса](https://webref.ru/css/selector/class), [атрибута](https://webref.ru/css/selector/attr) и [псевдоклассы](https://webref.ru/css/type/pseudoclass). |
| `100`         | [Селектор идентификатора](https://webref.ru/css/selector/id). |
| `1000`        | Объявления, указанные с помощью универсального атрибута [`style`](https://webref.ru/html/attr/style). |

### Способы задания цвета

[Цвет](https://webref.ru/css/value/color) в стилях можно задавать разными 
способами:

- По названию: `red`, `green`, `blue` и т.п.
- По шестнадцатеричному значению:

  - Без альфа-канала: `#RRGGBB` или `#RGB`.
  - С альфа-каналом: `#RRGGBBAA` или `#RGBA`.

- В форматах `RGB` и `RGBA` (красный-зелёный-синий):

  - Без альфа-канала: `rgb(0-255, 0-255, 0-255)` или `rgb(0-100%, 0-100%, 
  0-100%)`.
  - С альфа-каналом: `rgba(0-255, 0-255, 0-255, 0.0-1.0)` или `rgba(0-100%, 
  0-100%, 0-100%, 0.0-1.0)`.

- В форматах `HSL` и `HSLA` (оттенок-насыщенность-светлота):

  - Без альфа-канала: `hsl(0-359, 0-100%, 0-100%)`.
  - С альфа-каналом: `hsla(0-359, 0-100%, 0-100%, 0.0-1.0)`.

Цветовая модель `RGB`
([источник](https://engineering.purdue.edu/~abe305/HTMLS/rgbspace.htm)):

- Фронтальный вид:

![Фронтальный вид](~practice/05/assets/rgb1.gif)

- Вид с обратной стороны:

![Вид с обратной стороны](~practice/05/assets/rgb2.gif)

Цветовая модель `HSL`
([источник](http://www.erinsowards.com/articles/2011/01/colors.php)):

![Пространство цветов HSL](~practice/05/assets/hsl-colors.png)

С помощью свойства [`opacity`](https://webref.ru/css/opacity) можно задать 
уровень прозрачности элемента:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Способы задания цвета</title>
  <style>
    .block {
      width: 100px;
      height: 100px;
      border: 1px solid rgb(10%, 10%, 10%);
      background-color: hsl(0, 50%, 50%);
      opacity: 0.5;
    }
  </style>
</head>

<body>
  <div class="block"></div>
</body>

</html>
```

### Способы задания размеров

Для задания [размеров](https://webref.ru/css/value/size) различных элементов
в CSS используются абсолютные и относительные единицы измерения. Абсолютные 
единицы не зависят от устройства вывода, а относительные единицы определяют 
размер элемента относительно значения другого размера.

Все единицы измерения в конечном счёте превращаются в пиксели.

Мы уже знакомы с некоторыми абсолютными единицами: пискелями `px` и пунктами
`pt`. Абсолютные единицы представляют собой физические размеры — дюймы, 
сантиметры, миллиметры, пункты, а также пиксели.

Абсолютные единицы:

- `px` - пиксель.
- `in` - дюйм.
- `pt` - пункт (1/72 дюйма).
- `cm` - сантиметр.
- `mm` - миллиметр.

Также мы знаем одну относительную величину - процент `%`.

Относительные единицы:

- `%` - значение относительно родительского элемента
- `em` - значение относительно размера шрифта текущего элемента (свойство 
[`font-size`](https://webref.ru/css/font-size)). Значения `1em` и `100%` 
равнозначны.
- `rem` - значение относительно размера шрифта корневого элемента (элемент 
[`<html>`](https://webref.ru/html/html)).
- `vw` - значение в размере 1% от ширины области просмотра.
- `vh` - значение в размере 1% от высоты области просмотра.
- `vmin` - значение в размере 1% от меньшего из значений ширины и высоты 
области просмотра.
- `vmax` - значение в размере 1% от большего из значений ширины и высоты 
области просмотра.

Пример задания размеров:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Способы задания цвета</title>
  <style>
    .em-values li {
      font-size: 0.8em;
    }

    .rem-values li {
      font-size: 0.8rem;
    }

    .block {
      height: 50vmax;
      border: 1px solid black;
      background-color: red;
    }
  </style>
</head>

<body>
  <ul class="em-values">
    <li>Первый уровень
      <ul>
        <li>Второй уровень
          <ul>
            <li>Третий уровень</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <ul class="rem-values">
    <li>Первый уровень
      <ul>
        <li>Второй уровень
          <ul>
            <li>Третий уровень</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <div class="block"></div>
</body>

</html>
```

### Позиция элементов

Значения свойства [`position`](https://webref.ru/css/position):

- `static` - статичное позиционирование. Значение по умолчанию. 
Использование свойств
[`top`](https://webref.ru/css/top), [`right`](https://webref.ru/css/right),
[`bottom`](https://webref.ru/css/bottom) и [`left`](https://webref.ru/css/left)
не приводит к каким-либо результатам.

- `relative` относительное позиционирование. Положение элемента 
устанавливается относительно его исходного места. Добавление свойств
[`top`](https://webref.ru/css/top), [`right`](https://webref.ru/css/right),
[`bottom`](https://webref.ru/css/bottom) и [`left`](https://webref.ru/css/left)
изменяет позицию элемента и сдвигает его в ту или иную сторону от 
первоначального расположения.

- `absolute` - абсолютное позиционирование. Указывает, что элемент абсолютно
позиционирован, при этом другие элементы отображаются на веб-странице словно
абсолютно позиционированного элемента и нет. Положение элемента задаётся 
свойствами [`top`](https://webref.ru/css/top),
[`right`](https://webref.ru/css/right),
[`bottom`](https://webref.ru/css/bottom) и
[`left`](https://webref.ru/css/left), также на положение влияет значение 
свойства [`position`](https://webref.ru/css/position) родительского элемента.
Так, если у родителя значение [`position`](https://webref.ru/css/position) 
установлено как `static` или родителя нет, то отсчёт координат ведётся от 
края окна браузера. Если у родителя значение
[`position`](https://webref.ru/css/position) задано как `relative`, то 
отсчёт координат ведётся от края родительского элемента.

- `fixed` - фиксированное позиционирование. По своему действию это значение 
близко к `absolute`, но в отличие от него привязывается к указанной 
свойствами [`top`](https://webref.ru/css/top),
[`right`](https://webref.ru/css/right),
[`bottom`](https://webref.ru/css/bottom) и [`left`](https://webref.ru/css/left)
точке на экране и не меняет своего положения при прокрутке веб-страницы.

- `sticky` - сочетание относительного и фиксированного позиционирования.
Элемент рассматривается как позиционированный относительно, пока он не 
пересекает определённый порог, после чего рассматривается как фиксированный.
Обычно применяется для фиксации заголовка на одном месте, пока содержимое, к
которому относится заголовок, прокручивается на странице.

Свойство [`position`](https://webref.ru/css/position) применяется совместно 
со свойствами, устанавливающими расстояние от
верхнего [`top`](https://webref.ru/css/top),
правого [`right`](https://webref.ru/css/right),
нижнего [`bottom`](https://webref.ru/css/bottom),
левого [`left`](https://webref.ru/css/left) краёв родительского элемента до 
соответствующего края дочернего элемента.

Пример позиционирования элементов:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Позиционирование элементов</title>
  <style>
    body {
      height: 1000px;
    }

    div {
      padding: 5px;
      border: 1px solid black;
      margin: 5px;

      text-align: center;
    }

    div:not(.relative) {
      width: 100px;
      height: 100px;
    }

    .static {
      background-color: orange;
    }

    .relative {
      position: relative;
      left: 50%;

      background-color: red;
      color: white;
    }

    .absolute {
      position: absolute;
      top: 30px;

      background-color: green;
      color: white;
    }

    .fixed {
      position: fixed;
      right: 0;
      bottom: 0;

      color: white;
      background-color: blue;
    }

    .sticky {
      position: sticky;
      top: 5px;

      background-color: yellow;
    }
  </style>
</head>

<body>
  <div class="static">static</div>
  <div class="relative">
    <span>relative</span>
    <div class="absolute">absolute</div>
  </div>
  <div class="fixed">fixed</div>
  <div class="sticky">sticky</div>
</body>

</html>
```

Порядок наложения элементов друг на друга определяется свойством
[`z-index`](https://webref.ru/css/z-index). Любые позиционированные элементы
на веб-странице могут накладываться друг на друга в определенном порядке, 
имитируя тем самым третье измерение, перпендикулярное экрану. Каждый элемент
может находиться как ниже, так и выше других объектов веб-страницы, их 
размещением по z-оси и управляет [`z-index`](https://webref.ru/css/z-index).
Это свойство работает только для элементов, у которых значение свойства 
[`position`](https://webref.ru/css/position) задано как `absolute`, `fixed` 
или `relative`.

Пример использования свойства [`z-index`](https://webref.ru/css/z-index):

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>z-индекс</title>
  <style>
    div {
      width: 100px;
      height: 100px;
      border: 1px solid black;

      position: fixed;
    }

    .block1 {
      z-index: 2;

      background-color: rgba(255, 0, 0, 0.9);
    }

    .block2 {
      top: 40px;
      left: 40px;
      z-index: 1;

      background-color: rgba(0, 128, 0, 0.9);
    }

    .block3 {
      top: 80px;
      left: 80px;
      z-index: 3;

      background-color: rgba(0, 0, 255, 0.9);
    }
  </style>
</head>

<body>
  <div class="block1"></div>
  <div class="block2"></div>
  <div class="block3"></div>
</body>

</html>
```

### CSS Grid Layout

Отличная статья по теме: [A Complete Guide to Grid
](https://css-tricks.com/snippets/css/complete-guide-grid)

CSS Grid Layout:

- Количество и размер строк [`grid-template-rows`
](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows),
столбцов [`grid-template-columns`
](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
и комбинированное свойство [`grid-template`
](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template).
- Функция [`repeat()`
](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) и
единица [`fr`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value).
- Макет сетки [`grid-template-areas`
](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).
- Привязка элемента в области сетки [`grid-area`
](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area).
- Промежуток между строками [`grid-row-gap`
](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap),
столбцами [`grid-column-gap`
](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
и комбинированное свойство [`grid-gap`
](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).

Мы не будем рассматривать все свойства CSS Grid Layout, а 
только самые основные. Из-за этого мы не сможем, например накладывать 
элементы сетки друг на друга.

Кроме точных размеров можно задавать автоматические размеры с помощью слова 
`auto`. В этом случае ширина столбцов и высота строк вычисляются исходя из 
размеров содержимого.

Для установки пропорциональных размеров применяется специальная единица 
измерения `fr`. Она представляет собой часть пространства (fraction), 
которое отводится для данного столбца или строки. Значение `fr` еще называют
*flex-фактором* (flex factor).

Пример использования CSS Grid Layout:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>z-индекс</title>
  <style>
    div {
      border: 1px solid;
    }

    .container {
      display: grid;
      padding: 5px;
      grid-template-areas:
        "block1 block1 block2"
        "block4 .      block2"
        "block4 block3 block3";
      grid-template: repeat(3, 30vh) / 1fr 2fr 3fr;
      grid-gap: 5px;
    }

    .block1 {
      grid-area: block1;
      background-color: red;
    }

    .block2 {
      grid-area: block2;
      background-color: green;
    }

    .block3 {
      grid-area: block3;
      background-color: blue;
    }

    .block4 {
      grid-area: block4;
      background-color: yellow;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="block1"></div>
    <div class="block2"></div>
    <div class="block3"></div>
    <div class="block4"></div>
  </div>
</body>

</html>
```

### Cемантические элементы

Семантические элементы, формирующие структуру документа:

- Элемент [`<main>`](https://webref.ru/html/main) (от англ. *main — 
основной, главный*) предназначен для основного содержимого документа. На 
странице может быть только один [`<main>`](https://webref.ru/html/main) и он
не должен располагаться внутри элементов
[`<article>`](https://webref.ru/html/article),
[`<aside>`](https://webref.ru/html/aside),
[`<footer>`](https://webref.ru/html/footer),
[`<header>`](https://webref.ru/html/header),
[`<nav>`](https://webref.ru/html/nav) или
[`<section>`](https://webref.ru/html/section). Элемент
[`<main>`](https://webref.ru/html/main) включает в себя содержимое, которое 
является уникальным для данного документа, и не должен включать 
повторяющиеся разделы сайта, такие как навигация, название сайта, логотип, 
поисковая форма, баннеры и др.

- Элемент [`<header>`](https://webref.ru/html/header) (от англ. *header — 
верхний колонтитул, шапка*) задаёт «шапку» сайта или раздела веб-страницы. 
Внутри «шапки» сайта обычно располагается логотип, название сайта, поисковая
форма, навигационные ссылки и др. [`<header>`](https://webref.ru/html/header)
нельзя вкладывать внутрь другого [`<header>`](https://webref.ru/html/header),
а также внутрь элементов [`<address>`](https://webref.ru/html/address) и
[`<footer>`](https://webref.ru/html/footer). Внутри
[`<header>`](https://webref.ru/html/header) не должно быть элемента
[`<main>`](https://webref.ru/html/main).

- Элемент [`<footer>`](https://webref.ru/html/footer) (от англ. *footer — 
нижний колонтитул, подвал*) задаёт «подвал» сайта или раздела веб-страницы, 
в нём может располагаться имя автора, дата документа, контактная и правовая 
информация. [`<footer>`](https://webref.ru/html/footer) нельзя вкладывать 
внутрь другого [`<footer>`](https://webref.ru/html/footer), а также внутрь 
элементов [`<address>`](https://webref.ru/html/address) и
[`<header>`](https://webref.ru/html/header). Внутри
[`<footer>`](https://webref.ru/html/footer) не должно быть элемента
[`<main>`](https://webref.ru/html/main).

- Элемент [`<aside>`](https://webref.ru/html/aside) (от англ. *aside — в 
стороне, отступление*) представляет собой раздел страницы, который имеет 
косвенное отношение к содержимому страницы и может быть рассмотрен отдельно 
от этого содержимого. [`<aside>`](https://webref.ru/html/aside) применяется 
для боковых панелей, рекламных блоков, ссылок на архив, меток и другой 
информации, которая отделена от основного содержимого страницы.

- Элемент [`<nav>`](https://webref.ru/html/nav) (от англ. *navigation — 
навигация*) задаёт навигацию по сайту. Если на странице несколько блоков 
ссылок, то в [`<nav>`](https://webref.ru/html/nav) обычно помещают 
приоритетные ссылки. Также допустимо использовать несколько
[`<nav>`](https://webref.ru/html/nav) в документе.
Запрещается вкладывать [`<nav>`](https://webref.ru/html/nav) внутрь
[`<address>`](https://webref.ru/html/address).

- Элемент [`<article>`](https://webref.ru/html/article) (от англ. *article —
статья*) представляет собой независимый фрагмент веб-страницы и, как 
правило, включает «шапку», основное содержимое и «подвал», в которых 
располагаются такие части, как заголовок, текст, имя автора, дата 
публикации, метки, рейтинг статьи и др.
[`<article>`](https://webref.ru/html/article) обычно применяется для статей 
сайта, сообщений блога и форума, комментариев.
Внутри [`<article>`](https://webref.ru/html/article) запрещено использовать 
элемент [`<main>`](https://webref.ru/html/main). Каждый элемент
[`<article>`](https://webref.ru/html/article) обязательно должен содержать 
заголовок через [`<h1>`](https://webref.ru/html/h1),
[`<h2>`](https://webref.ru/html/h2), [`<h3>`](https://webref.ru/html/h3),
[`<h4>`](https://webref.ru/html/h4), [`<h5>`](https://webref.ru/html/h5) или
[`<h6>`](https://webref.ru/html/h6).

- Элемент [`<section>`](https://webref.ru/html/section) (от англ. *section —
раздел*) задаёт раздел документа, может применяться для блока новостей, 
контактной информации, глав текста, вкладок в диалоговом окне и др. Раздел 
обычно содержит заголовок. Допускается вкладывать один элемент
[`<section>`](https://webref.ru/html/section) внутрь другого.

Прочие семантические элементы:

- Элемент [`<address>`](https://webref.ru/html/address) (от англ. *address — 
адрес*) предназначен для хранения контактной информации автора (адрес, 
телефон, e-mail, ссылка на сайт и др.) и может включать в себя любые 
элементы HTML вроде ссылок, текста, выделений и т. д. Планируется, что 
поисковые системы будут анализировать содержимое этого элемента для сбора 
информации об авторах. [`<address>`](https://webref.ru/html/address) не 
должен использоваться для разметки почтовых адресов в целом, только для 
контактной информации. Внутри [`<address>`](https://webref.ru/html/address) 
нельзя размещать заголовки [`<h1>`](https://webref.ru/html/h1),
[`<h2>`](https://webref.ru/html/h2), [`<h3>`](https://webref.ru/html/h3),
[`<h4>`](https://webref.ru/html/h4), [`<h5>`](https://webref.ru/html/h5),
[`<h6>`](https://webref.ru/html/h6), элементы
[`<header>`](https://webref.ru/html/header),
[`<footer>`](https://webref.ru/html/footer) и другой
[`<address>`](https://webref.ru/html/address).
Используйте [`<address>`](https://webref.ru/html/address) в следующем 
контексте:

  - Если [`<address>`](https://webref.ru/html/address) располагается внутри 
  [`<body>`](https://webref.ru/html/body), то информация внутри
  [`<address>`](https://webref.ru/html/address) относится ко всему документу
  в целом.
  - Если [`<address>`](https://webref.ru/html/address) располагается внутри 
  [`<article>`](https://webref.ru/html/article), то информация внутри
  [`<address>`](https://webref.ru/html/address) относится к автору статьи.

- Элемент [`<time>`](https://webref.ru/html/time) (от англ. *time — время*) 
помечает текст внутри себя как дату, время, или оба значения. Может 
указываться непосредственно внутри контейнера
[`<time>`](https://webref.ru/html/time), либо задаваться через атрибут 
[`datetime`](https://webref.ru/html/time/datetime).

Пример с применением пройденный элементов:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Структура документа</title>
</head>

<body>
  <header>
    <h2>Шапка страницы</h2>
  </header>

  <nav>
    <h2>Панель навигации</h2>
    <a>Ссылка 1</a>
    <a>Ссылка 2</a>
    <a>Ссылка 3</a>
  </nav>

  <main>
    <section>
      <h3>Блок новостей</h3>
      <article>
        <address>Автор новости 1</address>
        <time>00:00:00</time>
        <h4>Заголовок новости 1</h4>
        <p>Текст новости 1</p>
      </article>
      <article>
        <address>Автор новости 2</address>
        <time>00:00:00</time>
        <h4>Заголовок новости 2</h4>
        <p>Текст новости 2</p>
      </article>
    </section>

    <section>
      <h2>Блок статей</h2>
      <article>
        <address>Автор статьи 1</address>
        <time>00:00:00</time>
        <h4>Заголовок статьи 1</h4>
        <p>Текст статьи 1</p>
      </article>
      <article>
        <address>Автор статьи 2</address>
        <time>00:00:00</time>
        <h4>Заголовок статьи 2</h4>
        <p>Текст статьи 2</p>
      </article>
    </section>
  </main>

  <aside>
    <h1>Рекламный блок 1</h1>
  </aside>

  <aside>
    <h1>Рекламный блок 2</h1>
  </aside>

  <footer>Подвал страницы</footer>
  <address>Автор страницы</address>
</body>

</html>
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.