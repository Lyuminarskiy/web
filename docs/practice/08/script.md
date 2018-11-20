---
sidebar: auto
---

# 8. Подведение итогов блока. Git и GitHub. Публикация статических сайтов

## Общая информация

Затраты времени (из доступных **180 минут**):

- **X минут** - объяснение материала.
- **Y минут** - выполнение заданий студентами.

- Тени `box-shadow`.
- Тени `drop-shadow()`.
- Фильтрация изображений `filter`.
- Полезные метатэги (цвет заголовка окна в мобильном браузере, интеграция с 
поисковыми машинами и соцсетями, вьюпорт для мобильных устройств).

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### Нерасмотренные ранее элементы HTML

С некоторыми элементами мы познакомимся уже в следующих блоках.

Элементы интерфейса:

- Раскрывающийся блок [`<details>`](https://webref.ru/html/details), его 
атрибут `open` и заголовок раскрывающегося блока
[`<summary>`](https://webref.ru/html/summary).
- Полоса прогресса [`<progress>`](https://webref.ru/html/progress) и её 
атрибуты `value` и `max`.
- Шкала [`<meter>`](https://webref.ru/html/meter) и её атрибуты.

Семантические элементы:

- Аббревиатура [`<abbr>`](https://webref.ru/html/abbr).
- Цитата [`<blockquote>`](https://webref.ru/html/blockquote) (блочный элемент)
 и [`<q>`](https://webref.ru/html/q) (строчный элемент).
- Программный код [`<code>`](https://webref.ru/html/code).
- Группа элементов [`<figure>`](https://webref.ru/html/figure) и подпись к 
ним [`<figcaption>`](https://webref.ru/html/figcaption).

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Элемент meter</title>
</head>

<body>
  <p>Температура воды</p>
  <meter value="0" max="100" low="10" high="60">Низкая</meter>
  <meter value="30" max="100" low="10" high="60">Нормальная</meter>
  <meter value="80" max="100" low="10" high="60">Горячая</meter>
  <meter value="100" max="100">Кипяток</meter>
  
  <abbr title="Common Gateway Interface, общий шлюзовый интерфейс">CGI</abbr>
  
  <article>
   <figure>
    <p><img src="image/thumb1.jpg" alt=""></p>
    <figcaption>Софийский собор</figcaption>
   </figure>
   <figure>
    <p><img src="image/thumb2.jpg" alt=""></p>
    <figcaption>Польский костел</figcaption>
   </figure>
  </article>
</body>

</html>
```

### Нерасмотренные ранее свойства CSS

С некоторыми свойствами мы познакомимся уже в следующих блоках.

- Обтекание элементов [`float`](https://webref.ru/css/float) и запрет обтекания
[`clear`](https://webref.ru/css/clear).

```
float: left | right | none
clear: none | left | right | both
```

- Рамка:

  - Цвет рамки [`outline-color`](https://webref.ru/css/outline-color).
  - Стиль рамки [`outline-style`](https://webref.ru/css/outline-style).
  - Ширина рамки [`outline-width`](https://webref.ru/css/outline-width).
  - Универсальное свойство [`outline`](https://webref.ru/css/outline).
  - Расстояние между рамкой и границей
  [`outline-offset`](https://webref.ru/css/outline-offset).

```
outline-color: invert | <цвет>
outline-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset
outline-width: thin | medium | thick | <размер>
outline: outline-color || outline-style || outline-width

outline-offset: <размер>
```

- Отображение содержимого, выходящего за границы элемента:

  - По горизонтали [`overflow-x`](https://webref.ru/css/overflow-x) и по 
  вертикали [`overflow-y`](https://webref.ru/css/overflow-y).
  - По обоим направлениям [`overflow`](https://webref.ru/css/overflow).
  
```
overflow: auto | hidden | scroll | visible
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.