---
sidebar: auto
---

# 2. Таблицы стилей. Списки

## Общая информация

::: warning Обратите внимание!
Перенести описание [селектора атрибута](https://webref.ru/css/selector/attr) 
из четвёртого занятия во второе.
:::

Затраты времени (из доступных **180 минут**):

- **60-70 минут** - объяснение материала.
- **40-120 минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### Элемент `<style>`

Помимо универсального атрибута [`style`](https://webref.ru/html/attr/style) 
существует также элемент[`<style>`](https://webref.ru/html/style). Его 
следует помещать в элемент [`<head>`](https://webref.ru/html/head). Он 
позволяет описать правила CSS, которые будут действовать на весь документ.

В дальнейшем стилизовать элементы с помощью атрибута
[`style`](https://webref.ru/html/attr/style) следует лишь в тех случаях, где 
применение элемента [`style`](https://webref.ru/html/attr/style) по 
какой-либо причине не обосновано.

Показываем структуру правила CSS.

![Cтруктура правила CSS](./assets/css_ruleset.svg)

Каждое правило CSS имеет две основные части — *селектор* и *блок объявлений*.
*Селектор*, расположенный в левой части правила, определяет, на какие части 
документа распространяется правило. *Блок объявлений* располагается в правой
части правила. Он помещается в фигурные скобки, и, в свою очередь, состоит 
из одного или более *объявлений*, разделённых знаком `;`. Каждое 
*объявление* представляет собой сочетание *свойства* CSS и *значения*, 
разделённых знаком `:`. Селекторы могут группироваться в одной строке через 
запятую. В таком случае свойство применяется к каждому из них.

Блок объявлений мы писали на прошлом занятии. Сейчас рассмотрим, что из себя
представляет селектор. Селекторы бывают разные. Мы начнём с селектора 
элементов.

Селектор типа позволяет применить блок объявлений к одноимённому элементу. 
Также в примере показать, как писать комментарии в CSS.

```html
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>Селектор типа</title>
  <style>
    /* Применить ко всем заголовкам первого уровня. */
    h1 {
      color: blue;
    }    
    
    /* Применить ко всем блокам текста. */
    p {
      color: green;
    }
    
    /* Группировка селекторов */
    h1, p {
      background-color: yellow;
    }
  </style>
</head>

<body>
  <h1>Заголовок</h1>
  <p>Первый абзац</p>
  <p>Второй абзац</p>
</body>

</html>
```

В CSS код можно добавлять комментарии. Синтаксис комментариев:

```css
/* Однострочный комментарий. */

/*
Многострочный
комментарий.
*/
```

### Универсальные атрибуты `id` и `class`. Селекторы

Помимо типа, к элементам можно обращаться индивидуально с помощью 
универсального атрибута [`id`](https://webref.ru/html/attr/id), который даёт
элементу идентификатор - уникальное имя. Идентификатор состоит по меньшей 
мере из одного символа и не должен содержать пробел. В имя идентификатора 
допустимо включать цифры, символ подчёркивания, дефис и др. Идентификатор, 
как и имена элементов и атрибутов, лучше писать на английском. Имя 
идентификатора должно отображать смысл содержимого элемента.

Чтобы применить правило CSS к элементу с уникальным именем, необходимо
использовать [селектор идентификатора](https://webref.ru/css/selector/id). 
Синтаксис селектора:

```css
#идентификатор { /* блок объявлений */ }
```

Чтобы применить стиль к одному элементу или группе элементов независимо от 
их типов или идентификаторов, используется
[селектор класса](https://webref.ru/css/selector/class). Синтаксис селектора:

```css
тип.класс { /* блок объявлений */ }
.класс { /* блок объявлений */ }
```

Чтобы у элемента 
появился класс, необходимо использовать универсальный атрибут 
[`class`](https://webref.ru/html/attr/class). В значении атрибута 
допускается указывать сразу несколько классов, разделяя их между собой 
пробелом. К имени класса предъявляются те же требования, что и к имени 
идентификатора.

У одного элемента может быть сколько угодно классов. В таком случае для него 
можно указать несколько
[селекторов класса](https://webref.ru/css/selector/class) одновременно:

```css
.класс1.класс2 { /* блок объявлений */ }
```

Чтобы применить правила CSS ко всем элементам на странице, необходимо 
использовать [универсальный селектор](https://webref.ru/css/selector/universal).
Синтаксис селектора:

```css
* { /* блок объявлений */ }
```

В некоторых случаях указывать универсальный селектор не обязательно. Так, 
например, записи `*.class ` и `.class` являются идентичными по своему 
результату.

Пример использования селекторов:

```html
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>Селектор классов</title>
  <style>
    /* Применить к элементу с идентификатором "about". */
    #about {
      color: orange;
    }
    
    /* Применить ко всем элементам с классом "blue-text". */
    .blue-text {
      color: blue;
    }

    
    /* Применить ко всем элементам с классом "yellow-background". */
    .yellow-background {
      background-color: yellow;
    }
    
    /* Применить ко всем элементам. */
    * {
      font: italic 14pt Arial;
    }
  </style>
</head>

<body>
  <p id="about">Блок текста</p>
  
  <p class="blue-text">Синий текст</p>
  <p class="yellow-background">Текст на жёлтом фоне</p>

  <!-- У этого элемента указаны два класса -->
  <p class="blue-text yellow-background">
    Синий текст на жёлтом фоне
  </p>
</body>

</html>
```

Чтобы избежать дублирования кода в случае, когда к одинаковым правилам CSS 
применяются различные селекторы, можно использовать
[группирование селекторов](http://htmlbook.ru/samcss/gruppirovanie). 
Для этого необходимо перечислить эти селекторы через запятую:

```html
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>Селектор классов</title>
  <style>
    #about {
      color: blue;
    }
    
    .blue-text {
      color: blue;
    }
    
    /* Можно сгруппировать селекторы */
    /*
    #about, .blue-text {
      color: blue;
    }
    */
  </style>
</head>

<body>
  <p id="about">Блок текста</p>
  <p class="blue-text">Синий текст</p>
</body>

</html>
```

### Стилизация текста

Теперь перейдём к рассмотрению свойств CSS, предназначенных для стилизации 
текста, и их значений. Во время описания нового свойства сначала открывать 
страницу с его описанием в справочнике, а затем показывать его применение на
практике (если необходимо).

А начнём мы с группы свойств, устанавливающих различные характеристики шрифта:

- Начертание шрифта [`font-style`](https://webref.ru/css/font-style).
- Способ отображения строчных букв
[`font-variant`](https://webref.ru/css/font-variant).
- Насыщенность шрифта [`font-weight`](https://webref.ru/css/font-weight).
- Размер шрифта [`font-size`](https://webref.ru/css/font-size).
- Минимальная высота строки текста
[`line-height`](https://webref.ru/css/line-height).
- Семейство шрифта [`font-family`](https://webref.ru/css/font-family).
- Универсальное свойство для установки различных характеристик шрифта и текста
[`font`](https://webref.ru/css/font).

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
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum 
    zzril delenit augue duis dolore te feugait nulla facilisi.
  </p>
</body>

</html>
```

Следующая группа свойств позволяет устанавливать параметры отображения текста:

- Горизонтальное выравнивание текста
[`text-align`](https://webref.ru/css/text-align).
- Величина отступа первой строки блока текста
[`text-indent`](https://webref.ru/css/text-indent).
- Интервал между словами [`word-spacing`](https://webref.ru/css/word-spacing).
- Интервал между символами
[`letter-spacing`](https://webref.ru/css/letter-spacing).
- Преобразование регистра сиволов текста
[`text-transform`](https://webref.ru/css/text-transform).

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
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum 
    zzril delenit augue duis dolore te feugait nulla facilisi.
  </p>
</body>

</html>
```

Следующая группа свойств позволяет добавлять оформление текста:

- Тень текста [`text-shadow`](https://webref.ru/css/text-shadow).
- Добавление декоративной линии к тексту
[`text-decoration-line`](https://webref.ru/css/text-decoration-line).
- Стиль декоративной линии
[`text-decoration-style`](https://webref.ru/css/text-decoration-style).
- Цвет декоративной линии
[`text-decoration-color`](https://webref.ru/css/text-decoration-color).
- Универсальное свойство для добавления декоративной линии
[`text-decoration`](https://webref.ru/css/text-decoration).

Сложные значения состоят из нескольких значений, разделённых пробелом.

Для одного и того же текста можно установить несколько теней. Для этого надо 
перечислить эти значения через запятую.

При показе примера спросить студентов, как будет выглядеть конечный 
результат, перед тем, как отобразить его в браузере.

```html
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>Оформление текста</title>
  <style>
    h1 {
      text-shadow: 5px 5px 3px lightgray;
    }
    
    p {
      text-decoration: underline wavy red;
    }
  </style>
</head>

<body>
  <h1>Заголовок</h1>
  <p>Блок текста</p>
</body>

</html>
```

### Элементы списков и их стилизация

Теперь рассмотрим группу элементов, позволяющих создать списки:

- Маркированный список [`<ul>`](https://webref.ru/html/ul).
- Нумерованный список [`<ol>`](https://webref.ru/html/ol) и его атрибуты 
[`reversed`](https://webref.ru/html/ol/reversed) и
[`start`](https://webref.ru/html/ol/start).
- Пункт списка [`<li>`](https://webref.ru/html/li).

Атрибут [`reversed`](https://webref.ru/html/ol/reversed) позволяет сменить 
нумерацию в списке на обратный порядок. Атрибут
[`start`](https://webref.ru/html/ol/start) позволяет задать число, с 
которого будет начинаться нумерованный список.

Оба вида списка могут хранить в себе только пункты списка. Вложенные списки 
необходимо помещать внутрь пунктов списка. Ничего другого класть внутрь 
списков не желательно.

Оформление списков:

- Вид маркеров элементов списка
[`list-style-type`](https://webref.ru/css/list-style-type).
- Положение маркеров элементов списка относительно текста
[`list-style-position`](https://webref.ru/css/list-style-position).
- Изображение вместо стандартных маркеров элементов списка
[`list-style-image`](https://webref.ru/css/list-style-image).
- Универсальное свойство для оформления списков
[`list-style`](https://webref.ru/css/list-style).

Пример создания и стилизации списков:

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
  <!-- Ненумерованный список -->
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Вложенный список:
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
      </ul>
    </li>
  </ul>
  
  <!-- Нумерованный список -->
  <ol reversed>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
  </ol>
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