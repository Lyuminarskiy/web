---
На доработку:

- В задачах надо продемонстрировать различие между let, var и const.
---

# 9. Типы данных. Переменные. Условные операторы. Объект `window`

## Темы занятия

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
  и [шаблонная строка
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings).
  - [Логический тип
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean).
  - Специальное значение [`null`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/null).
  - Специальное значение [`undefined`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined).
  - [Объект
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects).
  - Оператор [`typeof`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof).

- [Переменные](https://learn.javascript.ru/let-const):

  - [`var`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var) -
  переменная с областью видимости контекста выполнения.
  - [`let`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let) -
  переменная с блочной областью видимости. 
  - [`const`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const) -
  константа с блочной областью видимости.

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

- [Преобразование типов](https://learn.javascript.ru/types-conversion).

- Объект [`window`](https://developer.mozilla.org/ru/docs/Web/API/Window):

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
  
- Условные инструкции:

  - [Условный оператор
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Условный_оператор).
  - Оператор [`if..else`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else).
  - Оператор [`switch`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch).
  
### Прочее

Работа с консолью [инструментов разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools).

## Теоретические сведения

_Раздел находится в разработке._

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

### Арифметические операции

Создайте переменную `x` со значением `1`.
Выполните последовательно следующие выражения:

1. `++x + 1`,
2. `x++ - 2`,
3. `2 ** ++x`,
4. `9 % x++`.

Определите результат каждого выражения и конечное значение переменной `a`.

### Операторы присваивания

Создайте переменную `y` со значением `5`.

Определите результат выражения `1 + (y %= (++y - 2))` и конечное значение 
переменной `y`.

### Логические операторы

Определите результат каждого выражения:

1. `1 && 0 && 2`,
2. `1 || 0 || 2`,
3. `0 || 2 && 3 || 4`.

### Операторы сравнения
    
Создайте переменную `age` со значением `18`.

Создайте два выражения, которые будут проверять, что значение переменной `age`:

1. ... находится в диапазоне от `14` до `70` включительно,
2. ... не находится в диапазоне от `27` до `42` включительно.

::: warning Обратите внимание!
Для определения результата сложных выражений необходимо знать
[приоритет операторов
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).
:::

## 9.3. Преобразование типов

Для каждого выражения определите результат и тип данных результата:

 1. `"" + 1 + 0`,
 2. `"" - 1 + 0`,
 3. `true + false`,
 4. `6 / "3"`,
 5. `"2" * "3"`,
 6. `4 + 5 + "px"`,
 7. `"$" + 4 + 5`,
 8. `"4" - 2`,
 9. `"4px" - 2`,
10. `7 / 0`,
11. `"  -9\n" + 5`,
12. `"  -9\n" - 5`,
13. `5 && 2`,
14. `2 && 5`,
15. `5 || 0`,
16. `0 || 5`,
17. `null + 1`,
18. `undefined + 1`,
19. `null == "\n0\n"`,
20. `+null == +"\n0\n"`.

::: warning Обратите внимание!
Для определения типа данных используйте оператор [`typeof`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof).
:::

## 9.4. Объект `window`

Задачи:

1. Получите имя пользователя, спросив его `Как вас зовут?`, и сохраните его в
переменной `name`.
2. Выведите сообщение вида `Здравствуйте, ...!`, подставляя вместо многоточия
полученное ранее имя пользователя.
3. Получите возраст пользователя, спросив его `Сколько вам лет?`, и сохраните 
его в переменной `age` как число.
4. Выведите сообщение вида `Через 5 лет вам будет ... года (лет).`, подставляя 
вместо многоточия полученный ранее возраст пользователя, увеличенный на `5`.
5. Спросите пользователя `Вам понравились наши вопросы?`, и сохраните его 
ответ в переменной `result`.
6. C помощью условного оператора выведите сообщение `Приходите ещё!`, если 
пользователь ответил утвердительно, или `Мы исправимся!` в обратном случае.

::: warning Обратите внимание!
Для подстановки значений в строку используйте [шаблонные строки
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings).
:::

## 9.5. Условные инструкции

### Получение знака числа

Напишите программу, которая получает число от пользователя, спросив его
`Введите любое число`, а затем выводит сообщение:

- ... `Число больше нуля`, если число больше нуля,
- ... `Число меньше нуля`, если число меньше нуля,
- ... `Число равно нулю`, если число равно нулю.

### Проверка логина и пароля

Напишите программу, которая будет проверять логин и пароль пользователя:

1. Получите логин пользователя, спросив его `Введите логин`,
и сохраните его в переменной `login`.

2. Проверьте логин. Eсли пользователь:

   - ... ввёл `Администратор`, перейдите к пункту 3.
   - ... ввёл другое значение, выведите сообщение 
   `Пользователь с таким именем не существует` и перейдите к пункту 5.
   - ... отменил ввод логина, выведите сообщение `Вход отменён`
   и перейдите к пункту 5.

3. Получите пароль пользователя, спросив его `Введите пароль`,
и сохраните его в переменной `password`.

4. Проверьте пароль. Eсли пользователь:

   - ... ввёл `12345qwerty`, выведите сообщение  `Вход выполнен`.
   - ... ввёл другое значение, выведите сообщение `Неверный пароль`.
   - ... отменил ввод пароля, выведите сообщение `Вход отменён`.
   
5. Завершите программу.
   
### Замена условных инструкций

В фрагменте программы замените оператор:

1. ... [`if..else`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)
на [условный оператор
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Условный_оператор):

```js
var a = 2, b = 3, result;

if (a + b < 4) {
  result = "Верно";
}
else {
  result = "Неверно";
}
```

2,3. ... [`if..else`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)
на [условный оператор
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Условный_оператор)
и (отдельно) оператор [`switch`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch):

```js
var login = prompt("Введите логин", ""), message;

if (login === "Сотрудник") {
  message = "Привет";
}
else if (login === "Директор") {
  message = "Здравствуйте";
}
else if (login === "") {
  message = "Логин не указан";
}
else {
  message = "Неизвестный пользователь";
}

alert(message);
```

4. ... [`switch`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
на оператор [`if..else`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else):

```js
var browser = prompt("Какой у вас браузер?", ""), message;

switch (browser) {
  case "IE":
    message = "Давай, до свидания!";
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
  case "Edge":
    message = "Эти браузеры поддерживаются";
    break;    

  default:
    message = "Браузер неизвествен";
}

alert(message);
```