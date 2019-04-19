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
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number).
  - [`String`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String).
  - [`Array`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array).
  - [`Object`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object).
  - [`Math`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math).
  - [`Date`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date).
  - [`JSON`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON).
  - [`RegExp`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
  - [`Map`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map).
  - [`Set`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set).

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

#### [`Number`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

 Имя | Описание
:---:| --------
[`EPSILON`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) | Наименьший интервал между двумя представимыми числами.
[`MAX_VALUE`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) | Наибольшее представимое положительное число.
[`MIN_VALUE`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) | Наименьшее представимое положительное число.
[`num.toFixed()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | Возвращает строку, представляющую число в записи с фиксированной запятой.
[`num.toPrecision()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) | Возвращает строку, представляющую число с указанной точностью.
[`num.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | Возвращает строковое представление числа в указанной системе счисления.

#### [`String`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

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

#### [`Array`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

#### [`Object`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)

 Имя | Описание
:---:| --------
[`keys()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | Возвращает массив, содержащий имена свойств переданного объекта.
[`freeze()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) | Возвращает _"замороженный объект"_ на основе переданного объекта, т.е. объект, у которого нельзя удалить или изменить никакое свойство.
[`obj.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) | Возвращает строку, представляющую объект.

#### [`Math`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)

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

#### [`Date`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)

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

#### [`JSON`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON)

 Имя | Описание
:---:| --------
[`parse()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) | Разбирает строку JSON и возвращает разобранное значение.
[`stringify()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) | Возвращает строку JSON, соответствующую указанному значению.

#### [`RegExp`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

 Имя | Описание
:---:| --------
[`regex.exec()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | Выполняет поиск сопоставлений регулярного выражения в переданной строке.
[`regex.test()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | Пытается сопоставить регулярное выражение с переданной строкой.
[`regex.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) | Возвращает строковое представление регулярного выражения.

#### [`Map`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map)

Словари, как и массивы, можно использовать совместно с циклом [`for...of`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of):

```js
let map = new Map([
  [true, [1, 2, 3]],
  [3.14, "Здесь могла быть ваша реклама."],
  ["Привет, мир!", {a: 1, b: 2}],
]);

for (const [key, value] of map) {
  console.log(`(key=${key}; value=${value})`);
}
```

Описание некоторых свойств и методов словаря:

 Имя | Описание
:---:| --------
[`map.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size) | Количество пар ключ-значение в словаре.
[`map.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear) | Удаляет все пары ключ-значение из словаря.
[`map.delete()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete) | Удаляет элемент с указанным ключом из словаря.
[`map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) | Вызывает переданную функцию для каждой пары ключ-значение в словаре.
[`map.get()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) | Возвращает ассоциированное с указанным ключом значение из словаря.
[`map.has()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has) | Проверяет, присутствует ли в словаре элемент с указанным ключом.
[`map.set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) | Добавляет или изменяет пару с указанным ключом и значением в словаре.


#### [`Set`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)

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
[`set.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size) | Количество элементов в множестве.
[`set.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add) | Добавляет новый элемент с заданным значением в множество.
[`set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) | Удаляет все элементы из множества.
[`set.delete()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete) | Удаляет элемент с указанным значением из множества.
[`set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) | Вызывает переданную функцию для каждого элемента множества.
[`set.has()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has) | Проверяет, присутствует ли в множестве элемент с указанным значением.

#### Ссылки по теме

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects).
- [Введение в методы и свойства
](https://learn.javascript.ru/properties-and-methods).
- [Числа](https://learn.javascript.ru/number).
- [Строки](https://learn.javascript.ru/string).
- [Массивы с числовыми индексами](https://learn.javascript.ru/array).
- [Массивы: методы](https://learn.javascript.ru/array-methods).
- [Массив: перебирающие методы](https://learn.javascript.ru/array-iteration).
- [Дата и Время](https://learn.javascript.ru/datetime).
- [Формат JSON, метод toJSON](https://learn.javascript.ru/json).
- [Паттерны и флаги](https://learn.javascript.ru/regexp-introduction).
- [Методы RegExp и String](https://learn.javascript.ru/regexp-methods).
- [Классы и спецсимволы](https://learn.javascript.ru/regexp-character-classes).
- [Наборы и диапазоны [...]
](https://learn.javascript.ru/regexp-character-sets-and-ranges).
- [Квантификаторы +, *, ? и {n}
](https://learn.javascript.ru/regexp-quantifiers).
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

## 11.3. Отладка кода в редакторе

Повторите процесс отладки кода, описанный в задании
[10.4. Подключение скриптов к странице и отладка кода в браузере
](/practice/10/#_10-4-подкnючение-скриптов-к-странице-и-отnадка-кода-в-браузере),
с помощью [Visual Studio Code](https://code.visualstudio.com).

<disqus-comments
  page-uuid="9686daea-fb22-4972-a00b-21e8dcbac8dd"
  page-title="11. Оператор '...'. Стандартные встроенные объекты.
    Отладка кода в редакторе | Практические занятия"/>