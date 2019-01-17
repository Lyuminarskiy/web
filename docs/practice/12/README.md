# 12. Объектная модель документа. Программные модули

## Темы занятия

- [Объектная модель документа (DOM)
](https://developer.mozilla.org/ru/docs/DOM/DOM_Reference).
- [Навигация по элементам документа
](https://learn.javascript.ru/traversing-dom).
- [Поиск элементов в документе
](https://learn.javascript.ru/searching-elements-dom).
- [Методы для проверки элементов
](https://learn.javascript.ru/compare-document-position).
- [Создание и удаление элементов
](https://learn.javascript.ru/modifying-document).
- [Вставка элементов в документ
](https://learn.javascript.ru/multi-insert).
- [Основные свойства объектного представления элементов
](https://learn.javascript.ru/basic-dom-node-properties).
- [Работа с атрибутами элементов через DOM
](https://learn.javascript.ru/attributes-and-custom-properties) и универсальный
атрибут [`data-*`](https://webref.ru/html/attr/data).
- [Работа со свойствами CSS элементов через DOM
](https://learn.javascript.ru/attributes-and-custom-properties).
- Организация кода на JavaScript в виде
[программных модулей](https://learn.javascript.ru/modules).
- Инструкции [`export`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)
и [`import`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import).

## Теоретические сведения

### HTML

- Универсальный атрибут [`data-*`](https://webref.ru/html/attr/data).
- Атрибут [`type`
](https://developer.mozilla.org/ru/docs/Web/HTML/Element/script) элемента
[`<script>`](https://webref.ru/html/script).

### JavaScript

- [Объектная модель документа (DOM)
](https://developer.mozilla.org/ru/docs/DOM/DOM_Reference) (`document` - объект
[`document`](https://developer.mozilla.org/ru/docs/Web/API/Document),
`element` - произвольный элемент):

  - Доступ к элементам верхнего уровня:
    
    - [`document.documentElement`
    ](https://developer.mozilla.org/ru/docs/Web/API/Document/documentElement) -
    элемент [`<html>`](https://webref.ru/html/html).
    - [`document.body`
    ](https://developer.mozilla.org/ru/docs/Web/API/Document/body) -
    элемент [`<body>`](https://webref.ru/html/body).
    - [`document.head`
    ](https://developer.mozilla.org/ru/docs/Web/API/Document/head) -
    элемент [`<head>`](https://webref.ru/html/head).
    
  - [Навигация по элементам документа
  ](https://learn.javascript.ru/traversing-dom) (`table` - элемент
  [`<table>`](https://webref.ru/html/table), `tableRow` - элемент
  [`<tr>`](https://webref.ru/html/tr)):
  
    - [`element.parentElement`
    ](https://developer.mozilla.org/ru/docs/Web/API/Node/parentElement) -
    родительский элемент.
    - [`element.previousElementSibling`
    ](https://developer.mozilla.org/ru/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling) - 
    предшествующий соседний элемент.
    - [`element.nextElementSibling`
    ](https://developer.mozilla.org/ru/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling) - 
    последующий соседний элемент.
    - [`element.children`
    ](https://developer.mozilla.org/ru/docs/Web/API/ParentNode/children) - 
    _коллекция_ дочерних элементов.
    - [`element.firstElementChild`
    ](https://developer.mozilla.org/ru/docs/Web/API/ParentNode/firstElementChild) -
    первый дочерний элемент.
    - [`element.lastElementChild`
    ](https://developer.mozilla.org/ru/docs/Web/API/ParentNode/lastElementChild) -
    последний дочерний элемент.     
    - [`table.caption`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/caption) -
    элемент [`<caption>`](https://webref.ru/html/caption) внутри таблицы.
    - [`table.tHead`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead) -
    элемент [`<thead>`](https://webref.ru/html/thead) внутри таблицы.
    - [`table.tFoot`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tFoot) -
    элемент [`<tfoot>`](https://webref.ru/html/tfoot) внутри таблицы.
    - [`table.tBodies`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tBodies) -
    _коллекция_ элементов [`<tbody>`](https://webref.ru/html/tbody) внутри 
    таблицы.
    - [`table.rows`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rows) -
    _коллекция_ всех строк [`<tr>`](https://webref.ru/html/tr) внутри таблицы.
    - [`tableRow.cells`
    ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement) -
    _коллекция_ всех ячеек [`<td>`](https://webref.ru/html/td) внутри 
    строки таблицы.
    
  - [Поиск элементов в документе
    ](https://learn.javascript.ru/searching-elements-dom):
  
    - Функция [`document.getElementById(id)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById)
    выполняет поиск элемента по его идентификатору `id` по всему документу.
    - Функция [`element.getElementsByTagName(type)`
    ](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName) -
    возвращает _коллекцию_ всех элементов типа `type` внутри элемента.
    - Функция [`element.getElementsByClassName(class)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Element/getElementsByClassName) -
    возвращает _коллекцию_ всех элементов с заданным классом `class` внутри 
    элемента.
    - Функции [`element.querySelector(selector)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelector) и
    [`element.querySelectorAll(selector)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelectorAll)
    возвращают соответственно первый элемент и _коллекцию_ элементов внутри
    элемента, которые соответствуют селектору CSS `selector`.
    - Функция [`element.closest(selector)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Element/closest) 
    возвращает ближайший родительский элемент (или сам элемент), который 
    соответствуют селектору CSS `selector`.    
    
  - [Методы для проверки элементов
  ](https://learn.javascript.ru/compare-document-position):
  
    - Функция [`element.matches(selector)`
    ](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) 
    проверяет, соответствует ли элемент селектору CSS `selector`.  
    - Функция [`parent.contains(element)`
    ](https://developer.mozilla.org/ru/docs/Web/API/Node/contains) 
    проверяет, является ли элемент потомком элемента `parent`.
  
  - [Создание и удаление элементов
  ](https://learn.javascript.ru/modifying-document):
  
  - [Вставка элементов в документ
  ](https://learn.javascript.ru/multi-insert):
  
  - [Основные свойства объектного представления элементов
  ](https://learn.javascript.ru/basic-dom-node-properties):
  
  - [Работа с атрибутами элементов через DOM
  ](https://learn.javascript.ru/attributes-and-custom-properties):
  
  - [Работа со свойствами CSS элементов через DOM
  ](https://learn.javascript.ru/attributes-and-custom-properties):
    
- [Программные модули](https://learn.javascript.ru/modules):

  - Инструкция [`export`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)
  для экспорта содержимого из модуля.
  - Инструкция [`import`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import)
  для импорта содержимого из внешнего модуля.

Совокупость объектов, доступных из JavaScript
([источник](https://learn.javascript.ru/browser-environment)):

![Совокупость объектов, доступных из JavaScript](./assets/object_models.png)

На иллюстрации представлены три группы объектов:

- **JavaScript** - стандартные встроенные объекты языка JavaScript.

- **BOM (Browser Object Model)** - объектная модель браузера, даёт возможность 
взаимодействовать с браузером.

- **DOM (Document Object Model)** - объектная модель документа, даёт 
возможность взаимодействовать с содержимым страницы.

Навигация по дереву элементов документа
([источник](https://learn.javascript.ru/traversing-dom)):

![Навигация по дереву элементов документа](./assets/dom_navigation.png)

<script-button/>

<disqus-comments
  page-uuid="4d519cee-a0db-4708-8978-1de79cdde5ef"
  page-title="12. Объектная модель документа. Программные модули
    | Практические занятия"/>