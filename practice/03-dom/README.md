[Назад к описанию курса](../../README.md)

# Объектная модель документа (DOM)

Содержание:
- [1. Навигация по элементам](#1-Навигация-по-элементам)
    - [1.1. Ссылки](#11-Ссылки)
    - [1.2. Задачи](#12-Задачи)

## 1. Навигация по элементам

`DOM` – это представление документа в виде дерева объектов, доступное для изменения через JavaScript. Доступ к `DOM` производится через встроенный объект `document`.

Корневые элементы доступны напрямую:
- `document.documentElement` - элемент `html`,
- `document.head` - элемент `head`,
- `document.body` - элемент `body`.

Навигация относительно произвольного элемента `elem`:
- `elem.parentElement` - родительский элемент,
- `elem.previousElementSibling` - предшествующий соседний элемент,
- `elem.nextElementSibling` - последующий соседний элемент,
- `elem.children` - коллекция дочерних элементов,
- `elem.firstElementChild` - первый дочерний элемент,
- `elem.lastElementChild ` - последний дочерний элемент.

Если элементы по ссылке не существуют, то значением свойства будет `null`. Например, у элемента `html` нет родителя и соседних элементов:

> ```js
> -> document.documentElement.parentElement
> <- null
> -> document.documentElement.previousElementSibling
> <- null
> -> document.documentElement.nextElementSibling
> <- null
> ```

Следующий пример в цикле выводит в консоль все дочерние элементы элемента `body`:

```js
for (var elem of document.body.children) {
  console.log(elem)
}
```

У некоторых элементов `DOM` могут быть свои дополнительные ссылки для большего удобства навигации. Например, такие ссылки есть у элементов таблиц:
- элемент `table`:
    - `table.rows` - коллекция строк таблицы (`tr`),
    - `table.caption` - заголовок таблицы (`caption`),

### 1.1. Ссылки

- [Объект `Document`](https://developer.mozilla.org/ru/docs/Web/API/Document)

### 1.2. Задачи