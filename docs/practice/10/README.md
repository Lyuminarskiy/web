# 10. Циклы. Функции и методы объектов. Внешние скрипты. Отладка кода в браузере

## Темы занятия

### HTML

[`<script>`](https://webref.ru/html/script) - описание скриптов, используемых
на странице и его атрибут [`src`](https://webref.ru/html/script/src).

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

- Функции и методы объектов:

  - [`function`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function) -
  определяет функцию с указанным именем, аргументами и телом.
  - [Функциональное выражение
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/function) -
  определяет функцию внутри выражения.
  - [`(...) => {...}`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) -
  определяет стрелочную функцию.
  - [`this`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this) -
  ссылка на объект, который является текущим контекстом исполнения.

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

Ссылки по теме:

- [Команды для работы с JavaScript-консолью в браузерах и повышение производительности труда программиста
](https://habr.com/ru/company/ruvds/blog/414375/).

### Циклы

Ссылки по теме:

- [Циклы while, for](https://learn.javascript.ru/while-for).
- [Объекты: перебор свойств](https://learn.javascript.ru/object-for-in).
- [Итераторы](https://learn.javascript.ru/iterator).
- [Циклы и итерации
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Циклы_и_итерации).

### Функции и методы объектов

Ссылки по теме:

- [Функции](https://learn.javascript.ru/function-basics).
- [Функциональные выражения
](https://learn.javascript.ru/function-declaration-expression).
- [Именованные функциональные выражения
](https://learn.javascript.ru/named-function-expression).
- [Функции](https://learn.javascript.ru/es-function).
- [Методы объектов, this](https://learn.javascript.ru/object-methods).

### Отложенный вызов функций

Ссылки по теме:

- [Отложенный вызов функций
](https://learn.javascript.ru/settimeout-setinterval).

### Внешние скрипты

Ссылки по теме:

- [Внешние скрипты, порядок исполнения
](https://learn.javascript.ru/external-script).

### Отладка кода в браузере

Ссылки по теме:

- [Отладка в браузере Chrome](https://learn.javascript.ru/debugging-chrome).

<disqus-comments
  page-uuid="8bc55875-eaaf-43b1-a013-d9d84e05568c"
  page-title="10. Циклы. Функции и методы объектов. Внешние скрипты.
    Отладка кода в браузере | Практические занятия"/>