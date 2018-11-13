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
[`calc()`](https://webref.ru/css/value/calc).

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
  
- Общие для элементов форм атрибуты:
 
  - Уникальное имя элемента формы
  [`name`](https://webref.ru/html/input/name).
  - Установка поля формы обязательным для заполнения
  [`required`](https://webref.ru/html/input/required).
  - Блокировка доступа к полю формы
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
  ](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow).
  
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


### 6.1. Пользовательские свойства

Доработайте веб-страницу, созданную в задании
[`5.2. Позиционирование`](/practice/05/#_5-2-позиционирование), добавив
глобальные пользовательские свойства, содержащие значения:

1. Цвета текста и фона, начертания шрифта прямой речи.
2. Цвет фона и тени заголовков частей рассказа.
3. Отступа первой строки абзацев.
4. Шрифта текста на странице.
5. Вида маркеров ненумерованного списка.
6. Цвета текста посещённых и непосещённых ссылок.
7. Параметров левой границы, добавляемой для абзаца при наведении на него 
указателя мыши.
8. Ширины изображений.
9. Верхнего и нижнего отступов у заголовков и изображений.
10. Цвета текста и размера шрифта первого символа первого абзаца каждой из 
частей.
11. Цвета и фона выделенного текста.
12. Левого отступа основного содержимого документа.
13. Позиции панели навигации на странице.
14. Параметры пунктирных границ у основного содержимого документа, панели 
навигации и заголовков частей.

Примените все созданные вами пользовательские свойства.

::: warning Обратите внимание!
**Имена пользовательских свойств** должны начинаться с двух дефисов, слова 
должны быть разделены одним дефисом, например:

```css
:root {
  --direct-speech-text-color: white;
  --direct-speech-background-color: red;
}
```

При наименовании пользовательских свойств используйте **латинские символы и 
английские слова**.
:::

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