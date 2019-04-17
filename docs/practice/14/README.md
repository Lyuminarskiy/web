# 14. JSON. Хранение данных в браузере. Node.js

## Темы занятия

- [Формат JSON](https://learn.javascript.ru/json). !!!
- Web API
- [Хранение данных в браузере
](https://developer.mozilla.org/ru/docs/Web/API/Web_Storage_API).
- [Node.js](https://nodejs.org/api).
- Модули OS, Process, Path, File System, Buffer, Console, глобальные объекты, 
модули,
таймеры.

## Теоретические сведения

### JavaScript

- [JSON](https://learn.javascript.ru/json):

  - [`JSON.stringify(value)`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) -
  преобразует значение `value` в строку формата JSON.
  - [`JSON.parse(text)`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) -
  преобразует строку `text` формата JSON в значение.

- [Хранение данных в браузере
](https://developer.mozilla.org/ru/docs/Web/API/Web_Storage_API)
(`storage` - хранилище):

  - [`sessionStorage`
  ](https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage) -
  хранилище сессии.
  - [`localStorage`
  ](https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage) -
  локальное хранилище.
  - [`storage.setItem(key, value)`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/setItem) -
  добавляет ключ `key` в хранилище `storage` со значением `value` или
  обновляет значение ключа, если он уже существовал.
  - [`storage.getItem(key)`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/getItem) -
  возвращает значение ключа `key` из хранилища `storage`.
  - [`storage.removeItem(key)`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/removeItem) -
  удаляет ключ `key` из хранилища `storage`.
  - [`storage.clear()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/clear) -
  удаляет все ключи из хранилища `storage`.
  - [`storage.key(index)`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/key) -
  возвращает имя ключа по индексу `index` в хранилище `storage`.
  - [`storage.lenght`
  ](https://developer.mozilla.org/ru/docs/Web/API/Storage/length) -
  количество элементов, которые хранятся в `storage` на данный момент.
  
- [Node.js](https://nodejs.org/api).

<script-button/>