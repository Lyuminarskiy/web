# 6. Flexbox. Формы. Пользовательские свойства и вычисляемые значения

## Темы занятия

- [CSS Flexible box Layout](https://metanit.com/web/html5/12.1.php).
- Элементы для создания [форм](https://webref.ru/html/type/form) и связянные 
с ними [псевдоклассы](https://webref.ru/css/type/form).
- [Пользовательские свойства
](https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_variables),
псевдокласс [`:root`](https://webref.ru/css/root) и 
функция [`var()`](https://webref.ru/css/value/var).
- Вычисляемые значения свойств с помощью функций
[`attr()`](https://webref.ru/css/value/attr) и
[`calc()`](https://webref.ru/css/value/attr).

## Теоретические сведения

### HTML

- Элементы для создания форм:

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

### CSS
  
- CSS Flexible box Layout:

  - Направление основной оси [`flex-direction`
  ](https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction).
  - Выравнивание элементов вдоль основной оси [`justify-content`
  ](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content).
  - Выравнивание элементов вдоль побочной оси [`align-items`
  ](https://developer.mozilla.org/ru/docs/Web/CSS/align-items).
  - Фактор расширения элементов [`flex-grow`
  ](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow)
  
- Псевдоклассы для стилизации форм:

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
  
- Пользовательские свойства:

  - [Объявление переменной
  ](https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_variables).
  - Функция [`var()`](https://webref.ru/css/value/var) для использования 
  переменной.
  - Псевдокласс [`:root`](https://webref.ru/css/root) для создания глобальных
   переменных.
   
- Вычисляемые значения свойств:

  - Функция [`attr()`](https://webref.ru/css/value/attr) для доступа к 
  значениям атрибута элемента.
  - Функция [`calc()`](https://webref.ru/css/value/attr) для вычисления 
  выражения.
  
Модель работы CSS Flexible box Layout ([источник
](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox)):

![Модель работы CSS Flexible box Layout](./assets/flex_model.png)
  
### 6.1. CSS Flexible box Layout

::: warning Обратите внимание!
Чтобы использовать свойства CSS Flexible box Layout, создайте  
**элемент-контейнер** с помощью объявления `display: flex`. Все элементы, 
которые планируется размещать на сетке, поместите внутрь этого 
элемента-контейнера.
:::

<disqus-comments
  page-uuid="9f516f8d-5063-43f1-a1cc-82c5b66b627b"
  page-title="6. Flexbox. Формы. Пользовательские свойства и
    вычисляемые значения | Практические занятия"/>

<script-button/>