# 5. Наследование и каскадность стилей. Позиционирование и CSS Grid Layout. Семантические элементы

Темы занятия:

- Псевдокласс [`:not()`](https://webref.ru/css/not).
- [Наследование](https://metanit.com/web/html5/5.9.php) и [каскадность](https://metanit.com/web/html5/5.10.php) стилей, специфичность и значение [`!important`](https://webref.ru/css/%21important).
- Способы задания [цвета](https://webref.ru/css/value/color).
- Единицы измерения CSS для задания [размеров](https://webref.ru/css/value/size).
- Свойства CSS для указания позиции элементов и ограничения размеров.
- [CSS Grid Layout](https://metanit.com/web/html5/13.1.php).
- Элементы, формирующие структуру документа и другие семантические элементы.

### Теоретические сведения

На этом занятии мы рассмотрели следующее:

- HTML:

  - Структура документа:

    - Основное содержимое документа [`<main>`](https://webref.ru/html/main).
    - Шапка документа [`<header>`](https://webref.ru/html/header).
    - Подвал документа [`<footer>`](https://webref.ru/html/footer).
    - Боковая панель документа [`<aside>`](https://webref.ru/html/aside).
    - Панель навигации [`<nav>`](https://webref.ru/html/nav).
    - Единичная статья [`<article>`](https://webref.ru/html/article).
    - Блок статей [`<section>`](https://webref.ru/html/section).

  - Семантические элементы:

    - Информация об авторе [`<address>`](https://webref.ru/html/address).
    - Указание даты и времени [`<time>`](https://webref.ru/html/time) и его атрибут [`datetime`](https://webref.ru/html/time/datetime).

- CSS:

  - Ограничение границ действия селектора - псевдокласс [`:not()`](https://webref.ru/css/not).

  - Уровень прозрачности элемента [`opacity`](https://webref.ru/css/opacity).

  - Позиция элементов:

    - Способ позиционирования элемента [`position`](https://webref.ru/css/position).
    - Расстояние от верхнего [`top`](https://webref.ru/css/top), правого [`right`](https://webref.ru/css/right), нижнего [`bottom`](https://webref.ru/css/bottom), левого [`left`](https://webref.ru/css/left) краёв родительского элемента до соответствующего края дочернего элемента.
    - Порядок наложения элементов друг на друга [`z-index`](https://webref.ru/css/z-index).

  - Ограничение размеров:

    - Минимальная [`min-width`](https://webref.ru/css/min-width) и максимальная [`max-width`](https://webref.ru/css/max-width) ширина.
    - Минимальная [`min-height`](https://webref.ru/css/min-height) и максимальная [`max-height`](https://webref.ru/css/max-height) высота.

  - CSS Grid Layout:

    - Количество и размер строк [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows), столбцов [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns), комбинированное свойство [`grid`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) и функция [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).
    - Промежуток между строками [`grid-row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap), столбцами [`grid-column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) и комбинированное свойство [`grid-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
    - Шаблон сетки [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).
    - Привязка элемента в области сетки [`grid-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area).

Таблица для расчёта специфичности:

| Специфичность | Применимость                                                                                                                                                                                                                                                                                                                                   |
| :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0             | [Универсальный](https://webref.ru/css/selector/universal), [вложенный](https://webref.ru/css/selector/descendant), [дочерний](https://webref.ru/css/selector/child), [соседний](https://webref.ru/css/selector/adjacent), [родственный](https://webref.ru/css/selector/sibling) селекторы и псевдокласс [`:not()`](https://webref.ru/css/not). |
| 1             | [Селектор типа](https://webref.ru/css/selector/tag) и [псевдоэлементы](https://webref.ru/css/type/pseudoelement).                                                                                                                                                                                                                              |
| 10            | Селекторы [класса](https://webref.ru/css/selector/class), [атрибута](https://webref.ru/css/selector/attr) и [псевдоклассы](https://webref.ru/css/type/pseudoclass).                                                                                                                                                                            |
| 100           | [Селектор идентификатора](https://webref.ru/css/selector/id).                                                                                                                                                                                                                                                                                  |
| 1000          | Объявления, указанные с помощью универсального атрибута [`style`](https://webref.ru/html/attr/style).                                                                                                                                                                                                                                          |

Пример использования CSS Grid Layout:

<iframe src="//jsfiddle.net/Vladislav_Lyuminarskiy/zdt086p1/embedded/html,css,result/dark/" width="100%" height="400" frameborder="0"></iframe>

## 5.1. Расчёт специфичности

Подсчитайте специфичность селекторов. Какой цвет текста будет установлен?

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Расчёт специфичности</title>
  <style>
    *.list > li > a {
      color: red;
    }

    a.link:not(#hotlink) {
      color: orange;
    }

    .block > ul li a {
      color: purple;
    }

    #block a {
      color: blue;
    }

    .list .link {
      color: green;
    }
  </style>
</head>

<body>
  <div id="block">
    <ul class="list">
      <li><a class="link">Текст ссылки</a></li>
    </ul>
  </div>
</body>

</html>
```