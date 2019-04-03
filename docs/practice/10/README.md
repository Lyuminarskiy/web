# 10. Циклы. Функции. Элемент `<script>`. Отладка кода в браузере

## Темы занятия

### HTML

Элемент [`<script>`](https://webref.ru/html/script) и его атрибут
[`src`](https://webref.ru/html/script/src).

### JavaScript

- Объект [`Console`](https://developer.mozilla.org/ru/docs/Web/API/Console):

  - [`console.log()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Console/log) -
  выводит сообщение в консоль браузера.
  
  - [`console.info()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Console/info) -
  выводит в консоль браузера информационное сообщение.
  
  - [`console.warn()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Console/warn) -
  выводит в консоль браузера предупреждение.
  
  - [`console.error()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Console/error) -
  выводит в консоль браузера сообщение об ошибке.

- Циклы:

  - [`while`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while) -
  выполняет указанное выражение до тех пор, пока истинно проверяемое условие.
  
  - [`do...while`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while) -
  выполняет указанное выражение (как минимум один раз) до тех пор,
  пока истинно проверяемое условие.
  
  - [`for`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for) -
  выполняет указанное выражение до тех пор, пока истинно проверяемое условие;
  позволяет выполнить _выражение инициализации_ перед началом цикли и 
  _финальное выражение_ в конце каждой итерации цикла.
  
  - [`for...of`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of) -
  выполняет указанное выражение над каждым элементом массива (или любого 
  другого _итерируемого_ объекта).
  
  - [`for...in`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in) -
  выполняет указанное выражение над каждым перечислимым свойством объекта.
  
  - [`break`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/break) -
  прерывает выполнение текущего цикла.
  
  - [`continue`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/continue) -
  прерывает выполнение текущей итерации цикла и переходит к следующей итерации.

- Функции, функциональные выражения.
  
- Методы объектов и this.

- Отложенный вызов функций:

  - [`setTimeout(func, delay)`
  ](https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout) - 
  вызывает функции `func` после задержи в `delay` миллисекунд.
  - [`clearTimeout(timeoutId)`
  ](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout) -
  отменяет вызов функции по задержке по идентификатору `timeoutId`.
  - [`setInterval(func, delay)`
  ](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) -
  циклически вызывает функции `func` с паузой в `delay` миллисекунд
  между вызывами.
  - [`clearInterval(intervalId)`
  ](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) -
  отменяет циклический вызов функции по идентификатору `intervalId`.
  
### Прочее

Работа с [отладчиком JavaScript
](https://developers.google.com/web/tools/chrome-devtools/javascript)
в инструментах разработчика Chrome.

## Теоретические сведения

### Объект `Console`

### Циклы

Ссылки по теме:

- [Циклы while, for](https://learn.javascript.ru/while-for).
- [Объекты: перебор свойств](https://learn.javascript.ru/object-for-in).
- [Итераторы](https://learn.javascript.ru/iterator).
- [Циклы и итерации
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Циклы_и_итерации).

### Функции

### Методы объектов

### Отложенный вызов функций

Ссылки по теме:

- [Отложенный вызов функций
](https://learn.javascript.ru/settimeout-setinterval).

### Элемент `<script>`

### Отладка кода в браузере