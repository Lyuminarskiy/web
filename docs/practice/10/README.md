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

## 10.1. Циклы

## 10.2. Функции и методы объектов

### Возведение числа в степень

Создайте следующую функцию:  

```js
/**
 * Возвращает результат возведения основания в спепень.
 * 
 * @param {number} base - Основание, рациональное число.
 * @param {number} exponent - Показатель степени, целое число.
 * @return {number} Результат возведения основания в степень.
 */
function power(base, exponent) { /* ... */ }
```

Примеры работы функции:

```js
power(2, 4); // 16
power(2, 1); // 2
power(2, 0); // 1
power(2, -1); // 0.5
power(2, -4); // 0.0625
```

Продемонстрируйте работу функции.

### Обращение порядка следования элементов массива

Создайте следующую функцию:  

```js
/**
* Обращает порядок следования элементов массива.
* 
* @param {array} arr - Обращаемый массив.
*/
function reverse(arr) { /* ... */ }
```

Примеры работы функции:

```js
let arr = [1, 2, 3, 4, 5];
reverse(arr); // arr = [5, 4, 3, 2, 1]

arr = ["один", "два", "три"];
reverse(arr); // arr = ["три", "два", "один"]
```

Продемонстрируйте работу функции.

### Фильтрация элементов массива

Создайте следующую функцию:

```js
/**
* Возвращает новый массив со всеми элементами, прошедшими проверку,
* задаваемую в передаваемой функции. Если ни один элемент не пройдет
* проверку, то будет возвращен пустой массив.
* 
* Передаваемая функция будет вызываться для каждого элемента массива и должна
* возвращать true или false. Если функция вернёт true, то элемент
* добавится в новый массив, иначе элемент будет пропущен. В функцию будет
* передан один аргумент - текущий проверяемый элемент массива.
* 
* @param {array} arr - Фильтруемый массив.
* @param {function} callback - Функция проверки элементов массива.
* @return {array} Массив со всеми элементами, прошедшими проверку.
*/
function filter(arr, callback) { /* ... */ }
```

Примеры работы функции:

```js
let arr = [-5, 4, 1, 2, 0, -4, -3];
filter(arr, item => item % 2 === 0); // [4, 2, 0, -4]

arr = ["Иван", "Алексей", "Дмитрий", "Алиса"];    
filter(arr, name => name.length > 6); // ["Алексей", "Дмитрий"]
```

Продемонстрируйте работу функции.

### Строковое представление объекта

Задачи:

1. Создайте переменную `person`.

2. Создайте и сохраните в переменную объект со следующими свойствами:

    - `name` - строка.
    - `surname` - строка.
    - `age` - число.
    
3. Запишите в свойства объекта произвольные данные.
    
4. Добавьте в объект следующий метод:
    
    ```js
    /**
    * Возвращает строковое представление объекта. Принимает один аргумент
    * логического типа, контролирующий отображение свойства age.
    * Аргумент showAge по умолчанию равен false, т.е. по умолчанию возраст
    * не должен отображаться.
    * 
    * Внешний вид строки, в зависимости от значения аргумента showAge:
    * 1. (false, по умолчанию): "<surname> <name>"
    * 2. (true): "<surname> <name>, <age>"
    * 
    * @param {boolean} [showAge=false] - Признак, контролирующий
    * отображение возраста.
    * @return {string} Строковое представление объекта.
    */
    function toString(showAge) { /* ... */ }
    ```
    
    Примеры работы функции:
    
    ```js
    let person = { /* ... */ }; // name="Иван", surname="Иванов", age=21
    person.toString(); // "Иванов Иван"
    person.toString(showAge=true); // "Иванов Иван, 21"
    ```
    
5. Продемонстрируйте работу функции.

## 10.3. Отложенный вызов функций

<disqus-comments
  page-uuid="8bc55875-eaaf-43b1-a013-d9d84e05568c"
  page-title="10. Циклы. Функции и методы объектов. Внешние скрипты.
    Отладка кода в браузере | Практические занятия"/>