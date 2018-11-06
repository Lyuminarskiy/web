---
sidebar: auto
---

# 6. Flexbox. Формы. Пользовательские свойства и вычисляемые значения

## Общая информация

Затраты времени (из доступных **180 минут**):

- **X минут** - объяснение материала.
- **Y минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### CSS Flexible box Layout

[A Complete Guide to Flexbox
](https://css-tricks.com/snippets/css/a-guide-to-flexbox)

CSS Flexible box Layout:

- Направление основной оси [`flex-direction`
](https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction).
- Выравнивание элементов вдоль основной оси [`justify-content`
](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content).
- Выравнивание элементов вдоль побочной оси [`align-items`
](https://developer.mozilla.org/ru/docs/Web/CSS/align-items).
- Фактор расширения элементов [`flex-grow`
](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow)

Псевдоклассы для стилизации форм:

- Доступные [`:enabled`](https://webref.ru/css/enabled) и
заблокированные [`:disabled`](https://webref.ru/css/disabled) поля формы.
- Необязательные [`:optional`](https://webref.ru/css/optional) и
обязательные [`:required`](https://webref.ru/css/required) поля формы.
- Поле формы, значение которого доступно
[`:read-write`](https://webref.ru/css/read-write) или недоступно
[`:read-only`](https://webref.ru/css/read-only) для изменения.
- Содержимое поля формы соответствует
[`:valid`](https://webref.ru/css/valid) или не соответствует
[`:invalid`](https://webref.ru/css/invalid) указанному типу.
- Значение поля формы входит
[`:in-range`](https://webref.ru/css/in-range) или не входит
[`:out-of-range`](https://webref.ru/css/out-of-range) в заданный диапазон.
- Поле формы, находящееся в состоянии "включено"
[`checked`](https://webref.ru/css/checked).

Направление основной оси [`flex-direction`
  ](https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction). Возможные 
значения:

- `row`: главная ось контейнера направлена горизонтально; точки 
`main-start` и `main-end` совпадают с направлением контента.
- `row-reverse`: ведёт себя аналогично `row`, но точки `main-start` и 
`main-end` поменяны местами.
- `column`: Главная ось контейнера такая же направлена вертикально.
- `column-reverse`: ведёт себя аналогично `column`, но точки `main-start` и 
`main-end` поменяны местами.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Формы</title>
  <style>
    .flex-container {
      display: flex;
      /* row | row-reverse | column | column-reverse */
      flex-direction: row;
      /*
        flex-start | flex-end | center |
        space-between | space-around | space-evenly
      */
      justify-content: flex-start;
      /* flex-start | flex-end | center */
      align-items: stretch;
      
      height: 100px;
      width: 100px;
      padding: 2px;
      border: 1px solid black;
    }
    
    .flex-item {
      flex-grow: 1;
      height: 20px;
      width: 20px;
    }
    
    .color1 {
      background-color: rgb(219, 50, 54);
    }
    
    .color2 {
      background-color: rgb(60, 186, 84);
    }
    
    .color3 {
      background-color: rgb(72, 133, 237);
    }
    
    .color4 {
      background-color: rgb(244, 194, 13);
    }
  </style>
</head>

<body>
  <div class="flex-container">
    <div class="flex-item color1"></div>
    <div class="flex-item color2"></div>
    <div class="flex-item color3"></div>
    <div class="flex-item color4"></div>
  </div>
</body>

</html>
```

### Формы

Элементы для создания форм:

- Форма [`<form>`](https://webref.ru/html/form).
- Кнопка [`<button>`](https://webref.ru/html/button) и её атрибут
[`type`](https://webref.ru/html/button/type).
- Элемент ввода [`<input>`](https://webref.ru/html/input) и его атрибуты.
- Текстовое поле [`<textarea>`](https://webref.ru/html/textarea) и его 
атрибуты.
- Раскрывающийся список [`<select>`](https://webref.ru/html/select) с 
пунктами [`<option>`](https://webref.ru/html/option), объединёнными в 
группы [`<optgroup>`](https://webref.ru/html/optgroup).
- Метка [`<label>`](https://webref.ru/html/label).
- Группа элементов [`<fieldset>`](https://webref.ru/html/fieldset) с 
заголовком [`<legend>`](https://webref.ru/html/legend).
- Общий для элементов форм атрибут блокировки
[`disabled`](https://webref.ru/html/input/disabled).

Элемент [`<button>`](https://webref.ru/html/button) (от англ. _button — 
кнопка_) создаёт на веб-странице кнопки и по своему действию напоминает 
результат, получаемый с помощью `<input>` (с атрибутом `type="button | reset | submit"`). В отличие от этого элемента, `<button>` предлагает расширенные возможности по созданию кнопок. Например, на подобной кнопке можно размещать любые элементы HTML, в том числе изображения. Используя стили можно определить вид кнопки путём изменения шрифта, цвета фона, размеров и других параметров.

Значения атрибута `type`:

- `reset` - очищает введённые данные формы и возвращает значения в 
первоначальное состояние.
- `submit` - отправляет данные формы на сервер.

Если атрибут не указывать, то это будет обычная кнопка.

### Пользовательские свойства и вычисляемые значения

Пользовательские свойства:

- [Объявление переменной
](https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_variables).
- Функция [`var()`](https://webref.ru/css/value/var) для использования 
переменной.
- Псевдокласс [`:root`](https://webref.ru/css/root) для создания глобальных
 переменных.
   
Вычисляемые значения свойств:

- Функция [`attr()`](https://webref.ru/css/value/attr) для доступа к 
значениям атрибута элемента.
- Функция [`calc()`](https://webref.ru/css/value/attr) для вычисления 
выражения.

Функция `var()` позволяет вставлять значения пользовательских переменных в значения стилевых свойств. `var()` нельзя использовать в именах селекторов и в свойствах.

Сами пользовательские переменные и их значения описываются внутри произвольного селектора и должны начинаться с двух дефисов. Через двоеточие переменной присваивается любое допустимое для CSS значение.

```css
aside {
  --my-font: Helvetica, Arial, sans-serif;
}
```
Для обращения к переменной `--my-font` используется запись `var(--my-font)`, 
которую можно вставлять в качестве значения свойства. При этом область видимости переменной ограничена указанным селектором (`aside` в данном случае) и применение `var(--my-font)` в другом селекторе не даст результата. Для создания глобальных переменных их следует описать внутри селектора `:root`.

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.