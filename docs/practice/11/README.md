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
  
  - [`Object`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object):
    
    - [`keys()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) -
    возвращает массив, содержащий имена свойств переданного объекта.
    - [`freeze()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) -
    возвращает _"замороженный объект"_ на основе переданного объекта,
    т.е. объект, у которого нельзя удалить или изменить никакое свойство.    
    - [`obj.toString()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) -
    возвращает строку, представляющую объект.
    
  - [`Number`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number):
  
    - [`MAX_VALUE`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) -
    наибольшее представимое положительное число.
    - [`MIN_VALUE`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) -
    наименьшее представимое положительное число.
    - [`EPSILON`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) -
    наименьший интервал между двумя представимыми числами.
    - [`number.toFixed()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) -
    возвращает строку, представляющую число в записи с фиксированной запятой.
    - [`number.toPrecision()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) -
    возвращает строку, представляющую число с указанной точностью.
    - [`number.toString()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) -
    возвращает строковое представление числа в указанной системе счисления.
    
  - [`String`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String):
  
    - [`str.length`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length) -
    длина строки.
    - [`str.charAt()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) -
    возвращает символ строки по указанному индексу.
    - [`str.includes()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes) -
    проверяет, содержит ли строка заданную подстроку.
    - [`str.starts​With()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/starts​With) -
    определяет, начинается ли строка с символов указанной подстроки.
    - [`str.endsWith()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith​) -
    определяет, заканчивается ли строка с символов указанной подстроки.
    - [`str.indexOf()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) -
    возвращает индекс первого вхождения указанной подстроки в строке.
    - [`str.lastIndexOf()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) -
    возвращает индекс последнего вхождения указанной подстроки в строке.
    - [`str.match()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match) -
    возвращает получившиеся совпадения при сопоставлении строки с указанным
    _регулярным выражением_.
    - [`str.search()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/search) -
    возвращает индекс первого сопоставления с указанным регулярным выражением 
    внутри строки.
    - [`str.replace()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace) -
    возвращает новую строку, полученную из исходной строки, в которой 
    совпавшие с указанным шаблоном подстроки заменены на указанный заменитель.
    - [`str.repeat()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) -
    возвращает строку, полученную при повторении исходной строки указанное 
    количество раз.
    - [`str.slice()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice) -
    извлекает часть строки в указанном диапазоне и возвращает новую строку.
    - [`str.substr()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substr) -
    возвращает указанное количество символов из строки, начиная с указанной
    позиции.
    - [`str.split()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split) -
    возвращает массив строк путём разделения строки указанной подстрокой.
    - [`str.toLowerCase()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) -
    возвращает значение строки, преобразованное в нижний регистр.
    - [`str.toUpperCase()`
    ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) -
    возвращает значение строки, преобразованное в верхний регистр.
    
    
  - Массивы:
  
    
  - Объект `Math`:
  
  - Объект `Date`:
  
  - `Set` и `Map`
  
  - `JSON`
  
  - `RegExp`

### Прочее

Отладка кода с помощью [Visual Studio Code](https://code.visualstudio.com).

## Теоретические сведения

### Оператор `...`

Ссылки по теме:

- [Функции](https://learn.javascript.ru/es-function).
- [Деструктуризация](https://learn.javascript.ru/destructuring).

### Стандартные встроенные объекты

#### `Number`

Описание некоторых свойств и методов:

Имя | Описание
--- | --------

#### `Object`

Описание некоторых свойств и методов:

Имя | Описание
--- | --------
[`keys()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | Возвращает массив, содержащий имена свойств переданного объекта.
[`freeze()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) | Возвращает _"замороженный объект"_ на основе переданного объекта, т.е. объект, у которого нельзя удалить или изменить никакое свойство.
[`obj.toString()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) | Возвращает строку, представляющую объект.

Ссылки по теме:

- []().
  
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