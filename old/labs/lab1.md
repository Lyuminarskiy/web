[Назад к описанию курса](../README.md)

> **По всем вопросам, возникшим в процессе выполнения лабораторной работы, можно получить ответ, отправив письмо на почту Vladislav.Lyuminarskiy@gmail.com. В теме письма написать `Web-1` и указать инициалы.**

# Создание веб-страниц с помощью HTML

Содержание:
- [Описание лабораторной работы](#Описание-лабораторной-работы)
- [Задания](#Задания)
  - [1. Электронная книга](#1-Электронная-книга)
  - [2. Галерея изображений](#2-Галерея-изображений)
  - [3. Форма регистрации](#3-Форма-регистрации)

## Описание лабораторной работы

Ниже представлены задания, которые необходимо выполнить в рамках лабораторной работы.

Для каждого HTML-документа должна быть добавлена метаинформация (имя автора, описание, список ключевых слов), установлен заголовок, и указана иконка.

При выполнении заданий следует придерживаться следующей физической структуры веб-сайта:

```
┬(корневая папка сайта)
├─┬images
│ └──(изображения)
├─┬assets
│ └──(прочие медиафайлы)
├──index.html (главная страница сайта)
└──(прочие страницы сайта)
```

## Задания

### 1. Электронная книга

Задание:

> Найти фрагмент текста и оформить его в виде веб-страницы. Фрагмент текста должен носить научно-публицистический или технический характер и иметь целостную смысловую структуру.
>
> Объём текста: от 5000 слов.
>
> Веб-страница должна включать в себя:
> - оглавление/содержание,
> - главы/разделы,
> - списки и таблицы,
> - ссылки на источники.
>
> Также на веб-странице могут присутствовать изображения.

Обязательные элементы:
- Текстовые элементы и элементы форматирования текста: [`<abbr>`](http://htmlbook.ru/html/abbr), [`<address>`](http://htmlbook.ru/html/address), [`<b>`](http://htmlbook.ru/html/b), [`<blockquote>`](http://htmlbook.ru/html/blockquote), [`<br>`](http://htmlbook.ru/html/br), [`<cite>`](http://htmlbook.ru/html/cite), [`<dfn>`](http://htmlbook.ru/html/dfn), [`<em>`](http://htmlbook.ru/html/em), [`<h1>`](http://htmlbook.ru/html/h1)...`<h6>`, [`<hr>`](http://htmlbook.ru/html/hr), [`<i>`](http://htmlbook.ru/html/i), [`<p>`](http://htmlbook.ru/html/p),  [`<span>`](http://htmlbook.ru/html/span), [`<strong>`](http://htmlbook.ru/html/strong), [`<sup>`](http://htmlbook.ru/html/sup), [`<time>`](http://htmlbook.ru/html/time).
- Элементы списков: [`<li>`](http://htmlbook.ru/html/li), [`<ol>`](http://htmlbook.ru/html/ol), [`<ul>`](http://htmlbook.ru/html/ul).
- Элементы таблиц: [`<caption>`](http://htmlbook.ru/html/caption), [`<table>`](http://htmlbook.ru/html/table), [`<tbody>`](http://htmlbook.ru/html/tbody), [`<td>`](http://htmlbook.ru/html/td), [`<th>`](http://htmlbook.ru/html/th), [`<thead>`](http://htmlbook.ru/html/thead), [`<tr>`](http://htmlbook.ru/html/tr).
- Ссылки: [`<a>`](http://htmlbook.ru/html/a).
- Метаинформация: [`<link>`](http://htmlbook.ru/html/link), [`<meta>`](http://htmlbook.ru/html/meta), [`<title>`](http://htmlbook.ru/html/title).

Опциональные элементы:
- Текстовые элементы и элементы форматирования текста: [`<code>`](http://htmlbook.ru/html/code), [`<del>`](http://htmlbook.ru/html/del), [`<ins>`](http://htmlbook.ru/html/ins), [`<p>`](http://htmlbook.ru/html/p), [`<pre>`](http://htmlbook.ru/html/pre), [`<q>`](http://htmlbook.ru/html/q), [`<small>`](http://htmlbook.ru/html/small), [`<span>`](http://htmlbook.ru/html/span), [`<sub>`](http://htmlbook.ru/html/sub), [`<sup>`](http://htmlbook.ru/html/sup), [`<wbr>`](http://htmlbook.ru/html/wbr).
- Элементы списков: [`<dd>`](http://htmlbook.ru/html/dd), [`<dl>`](http://htmlbook.ru/html/dl), [`<dt>`](http://htmlbook.ru/html/dt).
- Элементы таблиц: [`<col>`](http://htmlbook.ru/html/col), [`<colgroup>`](http://htmlbook.ru/html/colgroup), [`<tfoot>`](http://htmlbook.ru/html/tfoot).
- Метаинформация: [`<base>`](http://htmlbook.ru/html/base).
- Мультимедиа: [`<figcaption>`](http://htmlbook.ru/html/figcaption), [`<figure>`](http://htmlbook.ru/html/figure), [`<img>`](http://htmlbook.ru/html/img).

### 2. Галерея изображений

Задание:

> Выбрать известного хужожника. Выбрать от 4 до 10 его работ и создать галерею изображений в виде веб-сайта.
>
> Главная страница веб-сайта должна состоять из двух основных блоков:
> - имя автора и его краткая биография,
> - галерея его работ.
>
> По нажатии на любое из изображений должна открываться другая веб-страница, на которой должно находиться изображение в большем масштабе и описание этого изображения.

Обязательные элементы:
- Текстовые элементы и элементы форматирования текста: [`<h1>`](http://htmlbook.ru/html/h1)...`<h6>`, [`<hr>`](http://htmlbook.ru/html/hr), [`<time>`](http://htmlbook.ru/html/time).
- Метаинформация: [`<link>`](http://htmlbook.ru/html/link), [`<meta>`](http://htmlbook.ru/html/meta), [`<title>`](http://htmlbook.ru/html/title).
- Мультимедиа: [`<figcaption>`](http://htmlbook.ru/html/figcaption), [`<figure>`](http://htmlbook.ru/html/figure), [`<img>`](http://htmlbook.ru/html/img).

Опциональные элементы:
- Текстовые элементы и элементы форматирования текста: [`<address>`](http://htmlbook.ru/html/address), [`<blockquote>`](http://htmlbook.ru/html/blockquote), [`<br>`](http://htmlbook.ru/html/br), [`<cite>`](http://htmlbook.ru/html/cite), [`<q>`](http://htmlbook.ru/html/q), [`<span>`](http://htmlbook.ru/html/span).
- Ссылки: [`<a>`](http://htmlbook.ru/html/a).
- Метаинформация: [`<base>`](http://htmlbook.ru/html/base).
- Мультимедиа: [`<audio>`](http://htmlbook.ru/html/audio), [`<source>`](http://htmlbook.ru/html/source), [`<track>`](http://htmlbook.ru/html/track), [`<video>`](http://htmlbook.ru/html/video).

### 3. Форма регистрации

Задание:

> Создать форму регистрации со следующими полями:
> - Имя
> - Фамилия
> - Отчество
> - Пол
> - Дата рождения
> - Город
> - Любимый цвет
> - Изображение профиля
> - Краткая информация о себе
> - Номер телефона
> - Электронная почта
> - Пароль
> - Подтверждение пароля
>
> Помимо прочих рекомендуется использовать следующие атрибуты: [placeholder](http://htmlbook.ru/html/input/placeholder), [pattern](http://htmlbook.ru/html/input/pattern), [list](http://htmlbook.ru/html/input/list), [required](http://htmlbook.ru/html/input/required), [accesskey](http://htmlbook.ru/html/input/accesskey), [autofocus](http://htmlbook.ru/html/input/autofocus), [tabindex](http://htmlbook.ru/html/input/tabindex).
>
> Для каждого поля использовать наиболее подходящий элемент формы. Для отправки данных формы использовать метод `GET`.

Обязательные элементы:
- Метаинформация: [`<link>`](http://htmlbook.ru/html/link), [`<meta>`](http://htmlbook.ru/html/meta), [`<title>`](http://htmlbook.ru/html/title).
- Формы: [`<button>`](http://htmlbook.ru/html/button), [`<datalist>`](http://htmlbook.ru/html/datalist), [`<input>`](http://htmlbook.ru/html/input), [`<form>`](http://htmlbook.ru/html/form), [`<label>`](http://htmlbook.ru/html/label), [`<optgroup>`](http://htmlbook.ru/html/optgroup), [`<option>`](http://htmlbook.ru/html/option), [`<select>`](http://htmlbook.ru/html/select), [`<textarea>`](http://htmlbook.ru/html/textarea).

Опциональные элементы:
- Метаинформация: [`<base>`](http://htmlbook.ru/html/base).
- Формы: [`<details>`](http://htmlbook.ru/html/details), [`<fieldset>`](http://htmlbook.ru/html/fieldset), [`<legend>`](http://htmlbook.ru/html/legend), [`<meter>`](http://htmlbook.ru/html/meter), [`<progress>`](http://htmlbook.ru/html/progress), [`<summary>`](http://htmlbook.ru/html/summary).