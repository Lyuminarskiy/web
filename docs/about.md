---
sidebar: auto
---

# План курса

Общая продолжительность курса - 7 месяцев.

Курс состоит из двух тематических блоков и двух-трёх лабораторных работ. Разбиение блоков по времени:

- HTML и CSS - 2 месяца (29%),
- JavaScript - 5 месяцев (71%).

## 1. HTML и CSS

Блок рассчитан на два месяца, т.е. примерно восемь еженедельных занятий по две пары. Ниже рассмотрим план на каждое занятие.

Ожидаемый итог - студент свободно оперирует HTML-элементами и создаёт блоки объявлений CSS.

В конце блока студенту выдаётся первая лабораторная работа.

### 1.1. Введение

::: tip На заметку
Затраты времени (из доступных **180 минут**):

- **30-50 минут** - объяснение материала.
- **50-150 минут** - выполнение заданий студентами.
:::

Темы занятия:

- Инструменты разработчика Chrome.
- Базовые элементы HTML.
- Атрибуты элементов, универсальные атрибуты.
- Свойства CSS для установки цвета текста и фона.

#### Что нового?

- HTML:

  - Тип документа [`<!DOCTYPE>`](https://webref.ru/html/!doctype).
  - Корневой элемент [`<html>`](https://webref.ru/html/html).
  - Блок невизуальных элементов [`<head>`](https://webref.ru/html/head).
  - Блок визуальных элементов [`<body>`](https://webref.ru/html/body).
  - Заголовок документа [`<title>`](https://webref.ru/html/title).
  - Контекстная информация о документе [`<meta>`](https://webref.ru/html/meta) и его атрибут [`charset`](https://webref.ru/html/meta/charset).
  - Блок текста [`<p>`](https://webref.ru/html/p).
  - Заголовки [`<h1>`](https://webref.ru/html/h1), [`<h2>`](https://webref.ru/html/h2), [`<h3>`](https://webref.ru/html/h3), [`<h4>`](https://webref.ru/html/h4), [`<h5>`](https://webref.ru/html/h5), [`<h6>`](https://webref.ru/html/h6).
  - Горизонтальная линия [`<hr>`](https://webref.ru/html/hr).
  - Комментарий [`<!-- -->`](https://webref.ru/html/!--).
  - Всплывающая подсказка - универсальный атрибут [`title`](https://webref.ru/html/attr/title).
  - Стилизация элемента - универсальный атрибут [`style`](https://webref.ru/html/attr/style).
  - Универсальный строчный элемент [`<span>`](https://webref.ru/html/span).

- CSS:

  - Цвет текста [`color`](https://webref.ru/css/color).
  - Цвет фона [`background-color`](https://webref.ru/css/background-color).

#### Сценарий

Представиться студентам. Попросить их не шуметь, переговариваться шёпотом, не ругаться и уважать друг друга. Если у студентов возникнут вопросы в ходе лекции, можно немедленно их задавать.

Дать ссылку на этот веб-сайт. Кратко описать содержимое ссылок на главной странице.

Открываем в браузере любой сайт и открываем инструменты разработчика. Демонстрируем, как выглядят HTML и CSS в современном сайте.

Показываем [список элементов HTML](https://webref.ru/html) и [свойств CSS](https://webref.ru/css). Их довольно много, при случае лучше обращаться к этому справочнику.

Показываем структуру HTML-элемента.

![Cтруктура HTML-элемента](./practice/01/html_tag.svg)

Обратить внимание, что все угловые скобки должны быть закрыты, в закрывающем тэге должна быть косая черта перед именем элемента. Атрибут и его значение разделяются знаком `=`, значение атрибута обрамляется двойными кавычками.

Показываем, как правильно настроить [Visual Studio Code](https://code.visualstudio.com/), чтобы можно было повторять действия за преподавателем:

1. Установить расширение [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Открыть папку через редактор.
3. Создать файл `index.html`.
4. Нажать на кнопку `Go Live`.

Показываем базовую структуру страницы. `<!DOCTYPE>` обозначает тип документа.

```html
<!DOCTYPE html>

<html>
  <head></head>
  <body></body>
</html>
```

Добавляем в `<head>` заголовок страницы и указание кодировки содержимого. Здесь у `<meta>` появляется атрибут, к тому же этот элемент не требует наличие закрывающего тэга.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Заголовок страницы</title>
  </head>
  <body>Содержимое страницы</body>
</html>
```

Заполняем элементами `<body>`. Появляется параграф `<p>`, заголовки шести уровней `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` и горизонтальная линия `<hr>`. Показываем, что в HTML можно добавлять комментарии в виде `<!-- -->`. Указываем у любого элемента универсальный атрибут `title` - всплывающая подсказка.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Базовые элементы</title>
  </head>
  <body>
    <!-- Блок текста -->
    <p>Параграф</p>

    <!-- Заголовки -->
    <h1>Заголовок первого уровня</h1>
    <h2>Заголовок второго уровня</h2>
    <h3>Заголовок третьего уровня</h3>
    <h4>Заголовок четвёртого уровня</h4>
    <h5>Заголовок пятого уровня</h5>
    <h6>Заголовок шестого уровня</h6>

    <!-- Горизонтальная линия -->
    <hr title="Горизонтальная линия">
  </body>
</html>
```

Выбирать уровень заголовка следует исходя из текущего контекста, а не его внешнего вида. Внешний вид заголовка (размер шрифта и т.п.) следует устанавливать с помощью CSS.

Оформляем текст с помощью универсального атрибута `style`. Устанавливаем цвет текста `color` и фона `background-color`. Свойства записываютсяс помощью *объявлений* вида `свойство: значение`. Несколько *объявлений* разделяются точкой с запятой. С помощью элемента `<span>` можно применять стили к отдельным участкам текста внутри элемента `<p>`.

Цвет можно записать по названию, либо по его шестнадцатеричному значению. Подробнее можно прочитать [в статье](https://webref.ru/html/value/color).

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Цвет текста и фона</title>
  </head>
  <body>
    <p style="color: blue">Синий текст</p>
    <p style="background-color: yellow">Текст на жёлтом фоне</p>
    <p style="color: #ffffff; background-color: #ff0000">
      Белый текст на красном фоне
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
      magna aliquam erat volutpat.
      <span title="Зелёный текст" style="color: green">
        Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea
        commodo consequat.
      </span>
      Duis autem vel eum iriure dolor in hendrerit in vulputate
      velit esse molestie consequat, vel illum dolore eu feugiat
      nulla facilisis at vero eros et accumsan et iusto odio
      dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi.
    </p>
  </body>
</html>
```

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что нужно сделать в заданиях. Обратить внимание на раздел `Теоретические сведения`, а также на подсказки к заданиям.

### 1.2. Правила CSS. Списки

::: tip На заметку
Затраты времени (из доступных **180 минут**):

- **60-70 минут** - объяснение материала.
- **40-100 минут** - выполнение заданий студентами.

Добавить описание универсального атрибута, группировки атрибутов, селектора классов (указание имени элемента, мультиклассы).
Забыл упомянуть, что можно для текста устанавливать несколько теней.
:::

Темы занятия:

- Элемент [`<style>`](https://webref.ru/html/style).
- Селекторы элементов, идентификаторов и классов.
- Свойства CSS для стилизации текста.
- Элементы для создания списков.
- Свойства CSS для стилизации списков.

#### Что нового?

- HTML:

  - Таблицы стилей для всего документа [`<style>`](https://webref.ru/html/style).
  - Идентификатор элемента - универсальный атрибут [`id`](https://webref.ru/html/attr/id).
  - Класс элемента - универсальный атрибут [`class`](https://webref.ru/html/attr/class).

  - Элементы списков:

    - Маркированный список [`<ul>`](https://webref.ru/html/ul).
    - Нумерованный список [`<ol>`](https://webref.ru/html/ol) и его атрибуты [`reversed`](https://webref.ru/html/ol/reversed) и [`start`](https://webref.ru/html/ol/start).
    - Пункт списка [`<li>`](https://webref.ru/html/li).

- CSS:

  - Селекторы:

    - Селектор элементов - указать имя элемента.
    - Селектор идентификаторов - указать идентификатор, предварив его знаком `#`.
    - Селектор классов - указать класс, предварив его знаком `.`.

  - Характеристики шрифта:

    - Начертание шрифта [`font-style`](https://webref.ru/css/font-style).
    - Способ отображения строчных букв [`font-variant`](https://webref.ru/css/font-variant).
    - Насыщенность шрифта [`font-weight`](https://webref.ru/css/font-weight).
    - Размер шрифта [`font-size`](https://webref.ru/css/font-size).
    - Минимальная высота строки текста [`line-height`](https://webref.ru/css/line-height).
    - Семейство шрифта [`font-family`](https://webref.ru/css/font-family).
    - Универсальное свойство для установки различных характеристик шрифта и текста [`font`](https://webref.ru/css/font).

  - Отображения текста:

    - Горизонтальное выравнивание текста [`text-align`](https://webref.ru/css/text-align).
    - Величина отступа первой строки блока текста [`text-indent`](https://webref.ru/css/text-indent).
    - Интервал между словами [`word-spacing`](https://webref.ru/css/word-spacing).
    - Интервал между символами [`letter-spacing`](https://webref.ru/css/letter-spacing).
    - Преобразование регистра символов текста [`text-transform`](https://webref.ru/css/text-transform).

  - Оформление текста:

    - Тень текста [`text-shadow`](https://webref.ru/css/text-shadow).
    - Добавление декоративной линии к тексту [`text-decoration-line`](https://webref.ru/css/text-decoration-line).
    - Стиль декоративной линии [`text-decoration-style`](https://webref.ru/css/text-decoration-style).
    - Цвет декоративной линии [`text-decoration-color`](https://webref.ru/css/text-decoration-color).
    - Универсальное свойство для добавления декоративной линии [`text-decoration`](https://webref.ru/css/text-decoration).

  - Оформление списков:

    - Вид маркеров элементов списка [`list-style-type`](https://webref.ru/css/list-style-type).
    - Положение маркеров элементов списка относительно текста [`list-style-position`](https://webref.ru/css/list-style-position).
    - Изображение вместо стандартных маркеров элементов списка [`list-style-image`](https://webref.ru/css/list-style-image).
    - Универсальное свойство для оформления списков [`list-style`](https://webref.ru/css/list-style).

#### Сценарий

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и уважать друг друга. Если у студентов возникнут вопросы в ходе лекции, можно немедленно их задавать.

Напомнить им, что к невыполненным в прошлый раз заданиям сегодня прибавятся новые. Чтобы долг не накапливался, сегодня надо и сдать долги, и выполнить новые задания.

Поинтересоваться, почему некоторые студенты посчитали нормальным уйти с занятия не получив разрешения.

Помимо универсального атрибута [`style`](https://webref.ru/html/attr/style) существует также элемент[`<style>`](https://webref.ru/html/style). Его следует помещать в элемент [`<head>`](https://webref.ru/html/head). Он позволяет описать правила CSS, которые будут действовать на весь документ.

В дальнейшем стилизовать элементы с помощью атрибута [`style`](https://webref.ru/html/attr/style) следует лишь в тех случаях, где применение элемента [`style`](https://webref.ru/html/attr/style) по какой-либо причине не обосновано.

Показываем структуру правила CSS.

![Cтруктура правила CSS](./practice/02/css_ruleset.svg)

Каждое правило CSS имеет две основные части — *селектор* и *блок объявлений*. *Селектор*, расположенный в левой части правила, определяет, на какие части документа распространяется правило. *Блок объявлений* располагается в правой части правила. Он помещается в фигурные скобки, и, в свою очередь, состоит из одного или более *объявлений*, разделённых знаком `;`. Каждое *объявление* представляет собой сочетание *свойства* CSS и *значения*, разделённых знаком `:`. Селекторы могут группироваться в одной строке через запятую. В таком случае свойство применяется к каждому из них.

Блок объявлений мы писали на прошлом занятии. Сейчас рассмотрим, что из себя представляет селектор. Селекторы бывают разные. Мы начнём с селектора элементов.

Селектор элементов позволяет применить блок объявлений к одноимённому элементу. Также в примере показать, как писать комментарии в CSS.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Селектор элементов</title>
    <style>
      /* Применить ко всем заголовкам первого уровня. */
      h1 { color: blue; }

      /* Применить ко всем блокам текста. */
      p { color: green; }

      /* Группировка селекторов */
      h1, p { background-color: yellow; }
    </style>
  </head>
  <body>
    <h1>Заголовок</h1>
    <p>Первый абзац</p>
    <p>Второй абзац</p>
  </body>
</html>
```

Помимо имени, к элементам можно обращаться индивидуально с помощью универсального атрибута [`id`](https://webref.ru/html/attr/id), который даёт элементу идентификатор - уникальное имя. Идентификатор состоит по меньшей мере из одного символа и не должен содержать пробел. В имя идентификатора допустимо включать цифры, символ подчёркивания, дефис и др. Идентификатор, как и имена элементов и атрибутов, лучше писать на английском. Имя идентификатора должно отображать смысл содержимого элемента.

Чтобы применить правило CSS к элементу с уникальным именем, необходимо использовать селектор идентификаторов. Селектор идентификаторов представляет собой имя идентификатора конкретного элемента, предварённое символом `#`.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Селектор идентификаторов</title>
    <style>
      /* Применить к элементу с идентификатором "about". */
      #about { color: orange; }
    </style>
  </head>
  <body>
    <p id="about">Блок текста</p>
  </body>
</html>
```

Чтобы применить стиль к одному элементу или группе элементов независимо от их типов или идентификаторов, используется селектор классов. Чтобы у элемента появился класс, необходимо использовать универсальный атрибут [`class`](https://webref.ru/html/attr/class). В значении атрибута допускается указывать сразу несколько классов, разделяя их между собой пробелом. К имени класса предъявляются те же требования, что и к имени идентификатора.

Чтобы применить правило CSS к элементам с требуемым классом, необходимо использовать селектор классов. Селектор классов представляет собой имя требуемого класса, предварённое символом `.`.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Селектор классов</title>
    <style>
      /* Применить ко всем элементам с классом "blue-text". */
      .blue-text { color: blue; }

      /* Применить ко всем элементам с классом "yellow-background". */
      .yellow-background { background-color: yellow; }
    </style>
  </head>
  <body>
    <p class="blue-text">Синий текст</p>
    <p class="yellow-background">Текст на жёлтом фоне</p>

    <!-- У этого элемента указаны два класса -->
    <p class="blue-text yellow-background">
      Синий текст на жёлтом фоне
    </p>
  </body>
</html>
```

Теперь перейдём к рассмотрению свойств CSS, предназначенных для стилизации текста, и их значений. Во время описания нового свойства сначала открывать страницу с его описанием в справочнике, а затем показывать его применение на практике (если необходимо).

А начнём мы с группы свойств, устанавливающих различные характеристики шрифта:

- Начертание шрифта [`font-style`](https://webref.ru/css/font-style).
- Способ отображения строчных букв [`font-variant`](https://webref.ru/css/font-variant).
- Насыщенность шрифта [`font-weight`](https://webref.ru/css/font-weight).
- Размер шрифта [`font-size`](https://webref.ru/css/font-size).
- Минимальная высота строки текста [`line-height`](https://webref.ru/css/line-height).
- Семейство шрифта [`font-family`](https://webref.ru/css/font-family).
- Универсальное свойство для установки различных характеристик шрифта и текста [`font`](https://webref.ru/css/font).

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Характеристики шрифта</title>
    <style>
      p {
        font: italic 14pt Arial;
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

Следующая группа свойств позволяет устанавливать параметры отображения текста:

- Горизонтальное выравнивание текста [`text-align`](https://webref.ru/css/text-align).
- Величина отступа первой строки блока текста [`text-indent`](https://webref.ru/css/text-indent).
- Интервал между словами [`word-spacing`](https://webref.ru/css/word-spacing).
- Интервал между символами [`letter-spacing`](https://webref.ru/css/letter-spacing).
- Преобразование регистра сиволов текста [`text-transform`](https://webref.ru/css/text-transform).

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Параметры отображения текста</title>
    <style>
      p {
        text-align: justify;
        text-indent: 20pt;
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

Следующая группа свойств позволяет добавлять оформление текста:

- Тень текста [`text-shadow`](https://webref.ru/css/text-shadow).
- Добавление декоративной линии к тексту [`text-decoration-line`](https://webref.ru/css/text-decoration-line).
- Стиль декоративной линии [`text-decoration-style`](https://webref.ru/css/text-decoration-style).
- Цвет декоративной линии [`text-decoration-color`](https://webref.ru/css/text-decoration-color).
- Универсальное свойство для добавления декоративной линии [`text-decoration`](https://webref.ru/css/text-decoration).

При показе примера спросить студентов, как будет выглядеть конечный результат, перед тем, как отобразить его в браузере.

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Оформление текста</title>
    <style>
      h1 { text-shadow: 5px 5px 3px lightgray; }
      p { text-decoration: underline wavy red; }
    </style>
  </head>
  <body>
    <h1>Заголовок</h1>
    <p>Блок текста</p>
  </body>
</html>
```

Теперь рассмотрим группу элементов, позволяющих создать списки:

- Маркированный список [`<ul>`](https://webref.ru/html/ul).
- Нумерованный список [`<ol>`](https://webref.ru/html/ol) и его атрибуты [`reversed`](https://webref.ru/html/ol/reversed) и [`start`](https://webref.ru/html/ol/start).
- Пункт списка [`<li>`](https://webref.ru/html/li).

Атрибут [`reversed`](https://webref.ru/html/ol/reversed) позволяет сменить нумерацию в списке на обратный порядок. Атрибут [`start`](https://webref.ru/html/ol/start) позволяет задать число, с которого будет начинаться нумерованный список.

Оба вида списка хранят в себе пункты списка, либо другие вложенные списки. Ничего другого класть внутрь списков не желательно.


```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>Списки</title>
    <style>
      ul {
        list-style: square;
      }

      ol {
        list-style: upper-roman
      }
    </style>
  </head>
  <body>
    <p>Основные ингредиенты теста для хлеба в хлебопечке:</p>
    <ul>
      <li>Мука</li>
      <li>Соль</li>
      <li>Сахар</li>
      <li>Дрожжи</li>
      <li>Пищевая сода и пекарный порошок</li>

      <li>Жидкие ингредиенты:</li>
      <ul>
        <li>Молоко</li>
        <li>Соки</li>
        <li>Пиво</li>
      </ul>

      <li>Яйца</li>
      <li>Жиры и растительный масла</li>
    </ul>

    <p>Цвета радуги:</p>
    <ol reversed>
      <li>Фиолетовый</li>
      <li>Голубой</li>
      <li>Синий</li>
      <li>Зелёный</li>
      <li>Жёлтый</li>
      <li>Оранжевый</li>
      <li>Красный</li>
    </ol>
  </body>
</html>
```

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что нужно сделать в заданиях. Обратить внимание на раздел `Теоретические сведения`, а также на подсказки к заданиям. Для тех, у кого есть долги, сейчас самое время сдать их, перед началом работы над новыми заданиями.

### 1.3. "Мультимедиа и ссылки + ещё немного CSS"

Темы занятия:

- Элементы мультимедиа: изображения, аудио и видео.
- Ссылки.
- Элемент `iframe`.
- Элемент `link`: иконка сайта и подключаемые стили.
- Свойства CSS для установки размеров, границ и др. применимое для рассматриваемых элементов.
- Элементы для создания таблиц.
- Свойства CSS для стилизации таблиц.
- Псевдоклассы, необходимые для стилизации таблиц.
- Псевдоклассы, необходимые для стилизации текста.
- Универсальный селектор.

### 1.4. "Dive into CSS"

Темы занятия:

1. Остальные псевдоклассы.
2. Псевдоэлементы.
3. Остальные виды селекторов.

### 1.5. "Про позиционирование"

Темы занятия:

1. Свойства CSS для позиционирования.
2. CSS Grid Layout.
3. CSS Flexible box Layout.
4. Семантические элементы HTML, описывающие структуру документа.

### 1.6. "Полезные вещи"

Темы занятия:

1. [Emmet](https://emmet.io) - разработка на HTML на стероидах.
2. [Методология БЭМ](https://ru.bem.info).

### 1.7. "Всякие полезности".

Темы занятия:

1. Другие полезные семантические элементы HTML.
2. Полезные метатэги.
3. Другие полезные свойства CSS.
4. Вендорные префиксы.

### 1.8. "Красивости"

Темы занятия:

1. @-правила.
2. Анимации и переходы.

## 2. JavaScript