---
Возможно имеет смысл поговорить об итераторах и итерируемых объектах.
Это необходимо для множеств и словарей (например, метод entries()) .
---

# 11. Оператор `...`. Стандартные встроенные объекты. Отладка кода в редакторе

## Темы занятия

### JavaScript
  
- Оператор `...`:

  - [Выражение оставшихся параметров
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters) -
  позволяет передавать неограниченное количество аргументов в функцию
  в виде массива.
  
  - [Выражение распространения
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax) -
  позволяет извлекать данные из массивов или объектов (или любых других 
  итерируемых объектах) при вызове функций, при создании массивом или объектов.
  
  - [Деструктурирующее присваивание
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) -
  позволяет извлекать данные из массивов или объектов (или любых других 
  итерируемых объектов) при присваивании.

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects):
  
  - [`Number`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number) -
  число.
  - [`String`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String) -
  строка.
  - [`RegExp`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp) -
  регулярное выражение.
  - [`Array`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) -
  массив.
  - [`Object`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object) -
  объект.
  - [`Math`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math) -
  математические вычисления.
  - [`Date`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date) -
  дата и время.
  - [`JSON`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON) -
  функционал работы объектной нотацией JavaScript.
  - [`Map`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map) -
  словарь.
  - [`Set`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) -
  множество.

### Прочее

Отладка кода с помощью [Visual Studio Code](https://code.visualstudio.com).

## Теоретические сведения

### Оператор `...`

#### Выражение оставшихся параметров

#### Выражение распространения

#### Деструктурирующее присваивание

#### Ссылки по теме

- [Оставшиеся параметры (rest parameters)
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters).  
- [Spread syntax
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax).  
- [Деструктурирующее присваивание
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Функции](https://learn.javascript.ru/es-function).
- [Деструктуризация](https://learn.javascript.ru/destructuring).

### Стандартные встроенные объекты

Ниже представлено описание некоторых свойств и методов стандартных встроенных 
объектов.

#### Number

 Имя | Описание
:---:| --------
[`EPSILON`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) | Наименьший интервал между двумя представимыми числами.
[`MAX_VALUE`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) [`MIN_VALUE`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) | Наибольшее/наименьшее представимое положительное число.
[`MAX_SAFE_INTEGER`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) [`MIN_SAFE_INTEGER`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | Наибольшее/наименьшее безопасное (без округления) целое число.
[`isSafe​Integer()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) | Определяет, является ли переданное значение представимым целым числом.
[`num.toFixed()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | Возвращает строку, представляющую число в записи с фиксированной запятой.
[`num.toPrecision()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) | Возвращает строку, представляющую число с указанной точностью.
[`num.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | Возвращает строковое представление числа в указанной системе счисления.

#### String

 Имя | Описание
:---:| --------
[`str.length`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length) | Длина строки.
[`str.charAt()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | Возвращает символ строки по указанному индексу.
[`str.endsWith()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith​) | Определяет, заканчивается ли строка с символов указанной подстроки.
[`str.includes()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes) | Проверяет, содержит ли строка заданную подстроку.
[`str.indexOf()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) | Возвращает индекс первого вхождения указанной подстроки в строке.
[`str.lastIndexOf()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) | Возвращает индекс последнего вхождения указанной подстроки в строке.
[`str.match()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match) | Возвращает получившиеся совпадения при сопоставлении строки с указанным _регулярным выражением_.
[`str.repeat()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) | Возвращает строку, полученную при повторении исходной строки указанное количество раз.
[`str.replace()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | Возвращает новую строку, полученную из исходной строки, в которой совпавшие с указанным шаблоном подстроки заменены на указанный заменитель.
[`str.search()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/search) | Возвращает индекс первого сопоставления с указанным регулярным выражением внутри строки.
[`str.slice()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice) | Извлекает часть строки в указанном диапазоне и возвращает новую строку.
[`str.split()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split) | Возвращает массив строк путём разделения строки указанной подстрокой.
[`str.starts​With()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/starts​With) | Определяет, начинается ли строка с символов указанной подстроки.
[`str.substr()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substr) | Возвращает указанное количество символов из строки, начиная с указанной позиции.
[`str.toLowerCase()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) | Возвращает значение строки, преобразованное в нижний регистр.
[`str.toUpperCase()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) | Возвращает значение строки, преобразованное в верхний регистр.
[`str.trim()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/trim) | Возвращает строку с вырезанными пробельными символами с её концов.

#### RegExp

 Имя | Описание
:---:| --------
[`regex.exec()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | Выполняет поиск сопоставлений регулярного выражения в переданной строке.
[`regex.test()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | Пытается сопоставить регулярное выражение с переданной строкой.
[`regex.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) | Возвращает строковое представление регулярного выражения.

#### Array

 Имя | Описание
:---:| --------
[`isArray()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | Определяет, является ли переданный объект массивом.
[`arr.length`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length ) | Количество элементов в массиве.
[`arr.concat()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | Возвращает новый массив, состоящий из данного массива, соединённого с другим массивом и/или значением.
[`arr.every()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
[`arr.fill()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | Возвращает новый массив, полученный из исходного, заполненного от начального до конечного индексов одним значением.
[`arr.filter()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | Создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
[`arr.forEach()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | Вызывает переданную функцию для каждого элемента в массиве.
[`arr.find()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | Возвращает искомое значение в массиве, если элемент в массиве удовлетворяет условию проверяющей функции.
[`arr.findIndex()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | Возвращает искомый индекс в массиве, если элемент в массиве удовлетворяет условию проверяющей функции.
[`arr.includes()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | Определяет, содержится ли в массиве указанный элемент.
[`arr.indexOf()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | Возвращает первый индекс элемента внутри массива, равный указанному значению.
[`arr.join()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | Объединяет все элементы массива в строку.
[`arr.lastIndexOf()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | Возвращает последний индекс элемента внутри массива, равный указанному значению.
[`arr.map()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | Создаёт новый массив с результатами вызова указанной функции на каждом элементе данного массива.
[`arr.pop()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | Удаляет последний элемент из массива и возвращает его.
[`arr.push()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | Добавляет один или более элементов в конец массива и возвращает новую длину массива.
[`arr.reduce()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | Применяет функцию к каждому значению массива, сводя его к одному значению.
[`arr.reverse()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) | Возвращает новый массив, полученный из исходного путём обращения порядка элементов.
[`arr.shift()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | Удаляет первый элемент из массива и возвращает его.
[`arr.slice()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | Извлекает диапазон значений и возвращает его в виде нового массива.
[`arr.some()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | Проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.
[`arr.splice()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | Добавляет и/или удаляет элементы из массива.
[`arr.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) | Возвращает строковое представление массива и его элементов.
[`arr.unshift()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | Добавляет один или более элементов в начало массива и возвращает новую длину массива.

#### Object

 Имя | Описание
:---:| --------
[`keys()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | Возвращает массив, содержащий имена свойств переданного объекта.
[`freeze()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) | Возвращает _"замороженный объект"_ на основе переданного объекта, т.е. объект, у которого нельзя удалить или изменить никакое свойство.
[`obj.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) | Возвращает строку, представляющую объект.

#### Math

 Имя | Описание
:---:| --------
[`abs()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) | Возвращает абсолютное значение числа.
[`ceil()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) | Возвращает наименьшее целое число, большее, либо равное указанному числу.
[`floor()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) | Возвращает наибольшее целое число, меньшее, либо равное указанному числу.
[`max()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max) | Возвращает наибольшее число из своих аргументов.
[`min()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/min) | Возвращает наименьшее число из своих аргументов.
[`random()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random) | Возвращает псевдослучайное число в диапазоне от 0 до 1.
[`round()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round) | Возвращает значение числа, округлённое до ближайшего целого.
[`trunc()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) | Возвращает целую часть числа, убирая дробные цифры.

#### Date

 Имя | Описание
:---:| --------
[`now()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/now) | Возвращает числовое значение, соответствующее текущему времени.
[`parse()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) | Разбирает строковое представление даты и возвращает соответствующее числовое значение.
[`date.getDate()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate) [`date.setDate()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate) | Возвращает/устанавливает день месяца указанной даты.
[`date.getDay()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) | Возвращает день недели указанной даты.
[`date.getFullYear()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) [`date.setFullYear()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) | Возвращает/устанавливает год указанной даты.
[`date.getHours()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) [`date.setHours()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours) | Возвращает/устанавливает часы указанной даты.
[`date.getMilliseconds()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds) [`date.setMilliseconds()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds) | Возвращает/устанавливает миллисекунды указанной даты.
[`date.getMinutes()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes) [`date.setMinutes()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes) | Возвращает/устанавливает минуты указанной даты.
[`date.getMonth()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth) [`date.setMonth()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth) | Возвращает/устанавливает месяц указанной даты.
[`date.getTime()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) [`date.setTime()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime) | Возвращает/устанавливает числовое значение указанной даты.
[`date.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) | Возвращает строковое представление указанной даты.

#### JSON

_JSON (англ. JavaScript Object Notation - объектная нотация JavaScript)_ - 
текстовый формат представления данных, основанный на JavaScript.

Данные в формате JSON представляют собой:

- объекты `{...}`,
- массивы `[...]`,
- значения одного из типов:
  - строка `"..."` (в двойных кавычках),
  - число,
  - логическое значение `true` или `false`,
  - специальное значение `null`.
  
Примеры представления данных в формате JSON:

JavaScript | JSON
---------- | ----
`[true, 3.14, 'Привет, мир!']` | `[true, 3.14, "Привет, мир!"]`
`{arr: [1, 2, 3], obj: null}` | `{"arr": [1, 2, 3], "obj": null}`

Описание методов работы с JSON:

 Имя | Описание
:---:| --------
[`parse()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) | Разбирает строку JSON и возвращает разобранное значение.
[`stringify()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) | Возвращает строку JSON, соответствующую указанному значению.

#### Map

Словари, как и массивы, можно использовать совместно с циклом [`for...of`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of):

```js
let map = new Map([
  [true, [1, 2, 3]],
  [3.14, "Я есть Грут!"],
  ["Привет, мир!", {a: 1, b: 2}],
]);

for (const [key, value] of map) {
  console.log(`(key=${key}; value=${value})`);
}
```

Описание некоторых свойств и методов словаря:

 Имя | Описание
:---:| --------
[`map.size`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/size) | Количество пар ключ-значение в словаре.
[`map.clear()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/clear) | Удаляет все пары ключ-значение из словаря.
[`map.delete()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/delete) | Удаляет элемент с указанным ключом из словаря.
[`map.forEach()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) | Вызывает переданную функцию для каждой пары ключ-значение в словаре.
[`map.get()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/get) | Возвращает ассоциированное с указанным ключом значение из словаря.
[`map.has()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/has) | Проверяет, присутствует ли в словаре элемент с указанным ключом.
[`map.set()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/set) | Добавляет или изменяет пару с указанным ключом и значением в словаре.


#### Set

Множества, как и массивы, можно использовать совместно с циклом [`for...of`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of):

```js
let set = new Set([
  "Привет, мир!",
  true,
  3.14,
  [1, 2, 3],
  {a: 1, b: 2}
]);

for (const item of set) {
  console.log(`item: ${item}\ntype: ${typeof item}`);
}
```

Описание некоторых свойств и методов множества:

 Имя | Описание
:---:| --------
[`set.size`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/size) | Количество элементов в множестве.
[`set.add()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/add) | Добавляет новый элемент с заданным значением в множество.
[`set.clear()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) | Удаляет все элементы из множества.
[`set.delete()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/delete) | Удаляет элемент с указанным значением из множества.
[`set.forEach()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) | Вызывает переданную функцию для каждого элемента множества.
[`set.has()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/has) | Проверяет, присутствует ли в множестве элемент с указанным значением.

#### Ссылки по теме

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects).
- [Number
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number).
- [String
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String).
- [Array
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array).
- [Object
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object).
- [Math
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math).
- [Date
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date).
- [JSON
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).
- [RegExp
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
- [Map
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map).
- [Set
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set).
- [Введение в методы и свойства
](https://learn.javascript.ru/properties-and-methods).
- [Числа](https://learn.javascript.ru/number).
- [Строки](https://learn.javascript.ru/string).
- [Паттерны и флаги](https://learn.javascript.ru/regexp-introduction).
- [Методы RegExp и String](https://learn.javascript.ru/regexp-methods).
- [Классы и спецсимволы](https://learn.javascript.ru/regexp-character-classes).
- [Наборы и диапазоны [...]
](https://learn.javascript.ru/regexp-character-sets-and-ranges).
- [Квантификаторы +, *, ? и {n}
](https://learn.javascript.ru/regexp-quantifiers).
- [Массивы с числовыми индексами](https://learn.javascript.ru/array).
- [Массивы: методы](https://learn.javascript.ru/array-methods).
- [Массив: перебирающие методы](https://learn.javascript.ru/array-iteration).
- [Дата и Время](https://learn.javascript.ru/datetime).
- [Формат JSON, метод toJSON](https://learn.javascript.ru/json).
- [Set, Map, WeakSet и WeakMap](https://learn.javascript.ru/set-map).

### Отладка кода в редакторе

#### Настройка отладки

Для отладки кода с помощью [Visual Studio Code](https://code.visualstudio.com)
у вас должны быть установлены следующие расширения:

- [Live Server
](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
- [Debugger for Chrome
](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

Дополните файл настроек `settings.json`, который можно открыть через меню
`Файл → Параметры → Параметры → {} (Открыть параметры (JSON))`:

```json
{
  "liveServer.settings.AdvanceCustomBrowserCmdLine": "chrome --incognito --remote-debugging-port=9222"
}
```

Добавьте конфигурацию отладки:
 
1. Выберите пункт меню `Отладка → Открыть конфигурации`.
2. Откроется диалог выбора среды. Выберите или введите `Chrome`.
3. Откроется файл `launch.json`. Замените его содержимое следующим:

```json
{
  "version": "0.2.0",
  "configurations": [{
    "type": "chrome",
    "request": "attach",
    "name": "Attach to Chrome",
    "port": 9222,
    "webRoot": "${workspaceFolder}"
  }]
}
```

#### Запуск отладки

Теперь, чтобы начать отладку, выполните следующие действия:

1. Закройте Google Chrome, если он был открыт. 
2. Откройте файл `index.html` и в контекстном меню выберите пункт `Open with 
Live Server`. В результате откроется окно Google Chrome с вкладкой в 
режиме инкогнито.
3. Выберите пункт меню `Отладка → Запустить отладку` для запуска отладки.

## 11.1. Оператор `...`

Задачи:

1. Используя выражение оставшихся параметров создайте следующую функцию:  

    ```js
    /**
    * Возвращает наименьшее и наибольшее из нуля или более чисел в виде
    * массива из двух чисел.
    * 
    * @param {...number} numbers - Числа.
    * @return {array} Наименьшее и наибольшее числа.
    */
    function minMax(...numbers) { /* ... */ }
    ```
    
    Примеры работы функции:
    
    ```js
    minMax(1, 2, 3); // [1, 3]
    minMax(-1, -2, -3); // [-3, -1]
    ```

2. Продемонстрируйте работу функции.

3. Создайте массив чисел и, используя выражение распространения, найдите
наибольшее и наименьшее значения массива с помощью функции `minMax()`.

4. Создайте переменные `min` и `max` и инициализируйте их возвращаемым
значением функции `minMax()` с помощью деструктурирующего присваивания.

## 11.2. Стандартные встроенные объекты

### Работа с числами

Задачи:

1. Выведите на консоль наибольшее и наименьшее представимые положительные числа.

2. Создайте число, которое не является безопасным целым числом.

3. Создайте произвольное число и отобразите его в двоичной, восьмеричной и
шестнадцатеричной системах счисления.

4. Создайте произвольное число с плавающей запятой и продемонстрируйте на нём 
известные вам способы представления чисел с указанной точностью.

5. Создайте следующую функцию:

    ```js
    /**
    * Возвращает результат сравнения чисел с учётом допустимой погрешности
    * (EPSILON) в операциях округления арифметики с плавающей запятой.
    * 
    * @param {number} first - Первое число.
    * @param {number} second - Второе число.
    * @return {boolean} Результат сравнения чисел.
    */
    function equals(first, second) { /* ... */ }
    ```
    
    Примеры работы функции:
    
    ```js
    0.1 + 0.2 === 0.3; // false, т.к. (0.1 + 0.2) = 0.30000000000000004
    equals(0.1 + 0.2, 0.3); // true
 
    0.1 * 6 === 0.6; // false, т.к. (0.1 * 6) = 0.6000000000000001
    equals(0.1 * 6, 0.6); // true
    ```
    
6. Продемонстрируйте работу функции.

### Работа со строками и регулярными выражениями

Задачи:

1. Создайте константу `text` и сохраните в неё текст рассказа из задания
[1.2. Базовые элементы HTML](/practice/01/#_1-2-базовые-эnементы-html).

2. Проверьте, есть ли в тексте слово `"ребенок"`.

3. Найдите в тексте индекс вхождения подстроки `"Весь сегодняшний день"`.

4. На основе найденного индекса извлеките из строки полное предложение:

    ```js
    "Весь сегодняшний день был занят тем, чтобы посредством нечеловеческих усилий выжать откуда-нибудь хоть несколько копеек на лекарство Машутке."
    ```
    
5. Найдите количество слов в предложении.
    
6. С помощью регулярного выражения получите массив заголовков частей рассказа:

    ```js
    ["Часть первая", "Часть вторая", "Часть третья"]
    ```

### Работа с массивами

Задачи:

1. Создайте константу `users` и сохраните в неё следующий массив пользователей:

    <details>    
    <summary>Массив пользователей (нажмите, чтобы раскрыть)</summary>
    
    ```json
    [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": -37.3159,
            "lng": 81.1496
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": -43.9509,
            "lng": -34.4618
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": -68.6102,
            "lng": -47.0653
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": 29.4572,
            "lng": -164.2990
          }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": -31.8129,
            "lng": 62.5342
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": -71.4197,
            "lng": 71.7478
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": 24.8918,
            "lng": 21.8984
          }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": -14.3990,
            "lng": -120.7677
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
          "geo": {
            "lat": 24.6463,
            "lng": -168.8889
          }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
          "name": "Yost and Sons",
          "catchPhrase": "Switchable contextually-based project",
          "bs": "aggregate real-time technologies"
        }
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
          "geo": {
            "lat": -38.2386,
            "lng": 57.2232
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
    ]
    ```
    
    </details>
   
2. На основе исходного массива создайте новый массив, приводя элементы 
исходного массива к следующему виду:

    ```json
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "company": "Romaguera-Crona",
      "address": "92998-3874, Gwenborough, Kulas Light, Apt. 556"
    }
    ```
    
3. Найдите сумму длин имён пользователей, у которых длина имени больше `15`
символов _(правильный ответ - `110` символов)_.

### Работа с объектами

Используя функцию-конструктор `Person()` из задания
[10.2. Функции, конструкторы и методы объектов
](/practice/10/#конструктор-чеnовека), выполните следующие задачи:

1. Создайте новый объект типа `Person`.
2. Найдите количество свойств этого объекта.
3. Заморозьте объект и продемонстрируйте его особенности после заморозки.

### Математические вычисления

Задачи:

1. Создайте массив чисел и найдите в нём максимальное и минимальное значения.

2. Создайте положительное и отрицательное числа и продемонстрируйте на них 
известные вам способы округления чисел.

3. Создайте следующую функцию:

    ```js
    /**
    * Возвращает псевдослучайное число с плавающей запятой в диапазоне [min; max),
    * т.е. от min (включительно) до max (не включая max).
    * 
    * @param {number} min - Нижняя граница диапазона.
    * @param {number} max - Верхняя граница диапазона.
    * @return {number} Псевдослучайное число в диапазоне [min; max).
    */
    function random(min, max) { /* ... */ }
    ```
    
4. Продемонстрируйте работу функции.

### Работа с датой и временем

Напишите код, который каждую секунду будет выводить на консоль текущее время 
в формате `hh:mm:ss`, где:

- `hh` - часы (0-24),
- `mm` - минуты (0-59),
- `ss` - секунды (0-59).

Примеры вывода:

```
02:01:05
02:01:06
```
```
14:25:32
14:25:33
```
```
15:05:13
15:05:14
```

### Работа с JSON

Задачи:

1. Создайте объект, содержащий все допустимые для формата JSON значения.
    
2. Преобразуйте объект в строку формата JSON. Строка должна быть 
отформатирована так, чтобы каждый последующий уровень вложенности внутри строки
был дополнен отступом из 2 пробелов.

3. Создайте строку формата JSON, представляющую следующий объект:

    ```js
    {
      name: 'Иван',
      surname: 'Иванов',
      age: 21,
      job: null,
      married: false,
      address: {
        country: 'Россия',
        city: 'Москва'
      }
    }
    ```

4. Преобразуйте строку в объект.

### Работа со словарями

Задачи:

1. Создайте константу `text` и сохраните в неё текст рассказа из задания
[1.2. Базовые элементы HTML](/practice/01/#_1-2-базовые-эnементы-html).

2. Создайте новый словарь и сохраните его в константу `symbols`.

3. Подсчитайте и запишите в словарь количество вхождений каждого символа в 
текте независимо от его регистра. В качестве ключей словаря используйте
символы текста, а в качестве значений - количество вхождений.

4. Выведите на консоль статистику символов в следующем виде:

    ```
    ...
    'о': 1624
    'к': 474
    'т': 726
    'р': 626
    'а': 1022
    'ь': 246
    'п': 361
    'в': 635
    ...
    ```
    
5. Определите наиболее и наименее часто встречающиеся символы в тексте.

### Работа с множествами

Задачи:

1. Создайте переменную `colors` и запишите в неё следующий массив:

    ```js
    ["зелёный", "красный", "красный", "синий", "жёлтый", "зелёный"]
    ```
    
2. С помощью множества найдите количество уникальных значений
в массиве `colors`.

3. Создайте следующую функцию:

    ```js
    /**
    * Возвращает объединение множеств.
    * 
    * @param {...Set} sets - Множества.
    * @return {Set} Объединение множеств.
    */
    function union(...sets) { /* ... */ }
    ```
    
    Примеры работы функции:
    
    ```js
    // Числа Фибоначчи и треугольные числа.
    let fibonacci = new Set([0, 1, 1, 2, 3, 5, 8]);
    let triangular = new Set([0, 1, 3, 6]);
 
    union(fibonacci, triangular); // {0, 1, 2, 3, 5, 8, 6}
    ```
    
4. Продемонстрируйте работу функции.

## 11.3. Отладка кода в редакторе

Повторите процесс отладки кода, описанный в задании
[10.4. Подключение скриптов к странице и отладка кода в браузере
](/practice/10/#_10-4-подкnючение-скриптов-к-странице-и-отnадка-кода-в-браузере),
с помощью [Visual Studio Code](https://code.visualstudio.com).

<disqus-comments
  page-uuid="9686daea-fb22-4972-a00b-21e8dcbac8dd"
  page-title="11. Оператор '...'. Стандартные встроенные объекты.
    Отладка кода в редакторе | Практические занятия"/>