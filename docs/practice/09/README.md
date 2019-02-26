# 9. Типы данных. Переменные. Условные операторы. Объект `window`

## Темы занятия

- Работа с консолью [инструментов разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools).
- [Типы данных](https://learn.javascript.ru/types-intro) и оператор [`typeof`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof).
- [Основные операторы](https://learn.javascript.ru/operators).
- [Преобразования типов](https://learn.javascript.ru/types-conversion).
- [Переменные](https://learn.javascript.ru/let-const).
- Глобальный объект 
[window](https://developer.mozilla.org/ru/docs/Web/API/Window) и его свойства.
- [Условные операторы](https://learn.javascript.ru/ifelse) и
[конструкция `switch`](https://learn.javascript.ru/switch).

## Теоретические сведения

### JavaScript

- [Типы данных
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures):

  - [Число
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number),
  [`NaN`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN) и
  [`Infinity`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Infinity).
  - [Строка
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)
  и [шаблонная строка](https://developer.mozilla.org/ru/docs/Web/API/Window).
  - [Логический тип
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean).
  - Специальное значение [`null`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/null).
  - Специальное значение [`undefined`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined).
  - [Объект
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects).

- [Основные операторы](https://learn.javascript.ru/operators):

  - [Операторы присваивания
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators).
  - [Операторы сравнения
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения).
  - [Арифметические операции
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators).
  - [Битовые операции
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators).
  - [Логические операторы
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Логические_операторы).
  - [Приоритет операторов
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

- Глобальный объект
[window](https://developer.mozilla.org/ru/docs/Web/API/Window):

  - [`alert()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Window/alert) -
  диалоговое окно с сообщением.
  - [`confirm()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Window/confirm) -
  диалоговое окно запроса подтверждения с сообщением.
  - [`prompt()`
  ](https://developer.mozilla.org/ru/docs/Web/API/Window/prompt) -
  диалоговое окно запроса на ввод текста с сообщением.
  - [`parseInt()`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt) -
  преобразование строки в целое число.
  - [`parseFloat()`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) -
  преобразование строки в число с плавающей точкой.

- Объявление переменных:

  - [`var`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var) -
  переменная с областью видимости контекста выполнения.
  - [`let`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let) -
  переменная с блочной областью видимости. 
  - [`const`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const) -
  константа с блочной областью видимости.

## 9.1. Переменные

Задачи:

1. Создайте переменные `first` и `second`.
2. Запишите строку `"Василий"` в переменную `first`.
3. Запишите строку `"Иван"` в переменную `second`.
4. С помощью функции
[`alert()`](https://developer.mozilla.org/ru/docs/Web/API/Window/alert)
отобразите значение `first`.
5. Скопируйте значение из `second` в `first`.
6. Ещё раз отобразите значение `first`.

## 9.2. Операторы

Задачи:

1. Создайте переменную `x` со значением `1`. Выполните последовательно 
следующие выражения:

    - `++x + 1`,
    - `x++ - 2`,
    - `2 ** ++x`,
    - `9 % x++`.
  
    Определите результат каждого выражения и конечное значение переменной `a`.
    
2. Создайте переменную `y` со значением `5`. Определите результат выражения
`1 + (y %= (++y - 2))` и конечное значение переменной `y`.

3. Определите результат каждого выражения:

    - `1 && 0 && 2`,
    - `1 || 0 || 2`,
    - `0 || 2 && 3 || 4`.
    
4. Создайте переменную `age` со значением `18`. С помощью логических операторов
создайте два выражения, которые будут проверять, что значение переменной `age`:
    - находится в диапазоне от `14` до `70` включительно,
    - не находится в диапазоне от `27` до `42` включительно.

## 9.3. Преобразование типов

Для каждого выражения определите результат и тип данных результата:

- `"" + 1 + 0`,
- `"" - 1 + 0`,
- `true + false`,
- `6 / "3"`,
- `"2" * "3"`,
- `4 + 5 + "px"`,
- `"$" + 4 + 5`,
- `"4" - 2`,
- `"4px" - 2`,
- `7 / 0`,
- `"  -9\n" + 5`,
- `"  -9\n" - 5`,
- `5 && 2`,
- `2 && 5`,
- `5 || 0`,
- `0 || 5`,
- `null + 1`,
- `undefined + 1`,
- `null == "\n0\n"`,
- `+null == +"\n0\n"`.

