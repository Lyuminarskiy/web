[Назад к описанию курса](../../README.md)

# Работа с событиями

Содержание:
- [1. Методы `setTimeout()` и `setInterval()`](#1-Методы-setTimeout-и-setInterval)
  - [1.1. Ссылки](#11-Ссылки)
  - [1.2. Задачи](#12-Задачи)
    - [1.2.1. Вывод чисел с помощью `setInterval()`](#121-Вывод-чисел-с-помощью-setInterval)
    - [1.2.2. Вывод чисел с помощью `setTimeout()`](#122-Вывод-чисел-с-помощью-setTimeout)
    - [1.2.3. Отображение времени](#123-Отображение-времени)
- [2. Основы работы с событиями](#2-Основы-работы-с-событиями)
  - [2.1. Ссылки](#21-Ссылки)
  - [2.2. Задачи](#22-Задачи)
    - [2.2.1. Скрыть элемент при нажатии](#221-Скрыть-элемент-при-нажатии)
    - [2.2.2. Раскрывающийся список](#222-Раскрывающийся-список)
- [3. События в деталях](#3-События-в-деталях)
  - [3.1. Ссылки](#31-Ссылки)
  - [3.2. Задачи](#32-Задачи)
    - [3.2.1. Перемещение элемента по клику](#321-Перемещение-элемента-по-клику)

## 1. Методы `setTimeout()` и `setInterval()`

Методы `setTimeout(func, delay[, arg1, arg2...])` позволяет вызвать функцию `func` через `delay` миллисекунд с аргументами `arg1`, `arg2` и т.д.:

```js
// Функция вызовется через одну секунду.
setTimeout(() => alert('Привет'), 1000);
```

Отменить исполнение можно с помощью функции `clearTimeout(timerId)`, на вход которой нужно передать числовой идентификатор таймера, возвращаемый функцией `setTimeout`:

```js
var timerId = setTimeout(...);
clearTimeout(timerId);
```

Синтаксис метода `setInterval()` аналогичен `setTimeout()`. Разница заключается в том, что метод `setInterval()` запускает выполнение функции не один раз, а регулярно повторяет её через указанный интервал времени. Остановить исполнение можно вызовом `clearInterval(timerId)`.

### 1.1. Ссылки

- [Метод `WindowTimers.setTimeout()`](https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout)
- [Метод `WindowOrWorkerGlobalScope.setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

### 1.2. Задачи

#### 1.2.1. Вывод чисел с помощью `setInterval()`

Задание:
1. написать функцию `printNumbersInterval()`, которая последовательно выводит в консоль числа от `1` до `20`, с интервалом между числами `100 мс`,
2. проверить работу функции.

Функция должна использовать метод `setInterval()`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
function printNumbersInterval() {
  var i = 1;
  var interval = 100;

  var timerId = setInterval(function() {
    console.log(i);

    // Останавливаем повторение.
    if (i == 20) {
      clearInterval(timerId);
    }

    i++;
  }, interval);
}
```

<hr>
</details>

#### 1.2.2. Вывод чисел с помощью `setTimeout()`

Задание:
1. написать функцию `printNumbersTimeout()`, которая последовательно выводит в консоль числа от `1` до `20`, с интервалом между числами `100 мс`,
2. проверить работу функции.

Функция должна использовать метод `setTimeout()` (потребуется рекурсивный вызов).

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
function printNumbersTimeout() {
  var i = 1;
  var interval = 100;

  setTimeout(function next() {
    console.log(i);

    // Рекурсивно вызываем setTimeout().
    if (i < 20) {
      setTimeout(next, interval);
    }

    i++;
  }, interval);
}
```

<hr>
</details>

#### 1.2.3. Отображение времени

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .hour {
      color: red;
    }

    .min {
      color: green;
    }

    .sec {
      color: blue;
    }
  </style>
</head>

<body>
  <div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>
</body>

</html>
```

Написать скрипт, который будет устанавливать в элементе с идентификатором `clock` текущее время и обновлять его каждую секунду.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
// Функция установки времени.
function update() {
  var clock = document.getElementById('clock');

  var date = new Date(); // (*)

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  var minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  var seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

update();
setInterval(update, 1000);
```

<hr>
</details>

## 2. Основы работы с событиями

*Событие* – это сигнал от браузера о том, что что-то произошло. Существует много видов событий. Вот некоторые из них:

- события мыши:
  - `click` - на элемент кликнули левой кнопкой мыши,
  - `contextmenu` - на элемент кликнули правой кнопкой мыши,
  - `mouseover` - на элемент наводится мышь,
  - `mousedown` - кнопку мыши нажали,
  - `mouseup` - кнопку мыши отжали,
  - `mousemove` – машь передвинулась,
- события клавиатуры:
  - `keydown` - клавиша нажата,
  - `keyup` - клавиша отжата,
- события на элементах управления:
  - `submit` - отправлено содержимое формы `<form>`,
  - `focus` - фокус установлен на элементе,
- события документа:
  - `DOMContentLoaded` - `HTML`-документ загружен и обработан, `DOM` документа полностью построен и доступен,
- события `CSS`:
  - `transitioned` - `CSS`-анимация завершена.

Событию можно назначить *обработчик*, то есть функцию, которая сработает, как только событие произошло.

Обработчик события можно установить с использованием атрибута HTML с названием `on + <имя события>`:

```html
<input type="button" value="HTML-атрибут" onclick="alert('HTML-атрибут')">
```

Также можно использовать одноимённое свойство `DOM`:

```html
<input id="button" type="button" value="DOM-свойство">
<script>
  button.onclick = () => alert('DOM-свойство');
</script>
```

У вышеприведённых способов есть недостаток - невозможность назначить *несколько* обработчиков на одно событие:

```js
elem.onclick = () => alert('Старый обработчик');
// Заменит предыдущий обработчик.
elem.onclick = () => alert('Новый обработчик');
```

Чтобы обойти этот недостаток, необходимо использовать функции `addEventListener(event, handler[, phase])` и `removeEventListener(event, handler[, phase])`, где:

- `event` - имя события,
- `handler` - обработчик события,
- `phase` - фаза события (перехват или всплытие).

Пример:

```js
elem.onclick = () => alert('Обработчик №1');
elem.addEventListener('click', () => alert('Обработчик №2'));
elem.addEventListener('click', () => alert('Обработчик №3'));
```

Также стоит отметить, что не на все события можно назначить обработчик через `DOM`-свойство.

### 2.1. Ссылки

- [Метод `EventTarget.addEventListener()`](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener)
- [Метод `EventTarget.removeEventListener()`](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener)

### 2.2. Задачи

#### 2.2.1. Скрыть элемент при нажатии

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .hour {
      color: red;
    }

    .min {
      color: green;
    }

    .sec {
      color: blue;
    }
  </style>
</head>

<body>
  <input type="button" id="button" value="Нажмите, чтобы спрятать текст" />
  <div id="text">Текст</div>
</body>

</html>
```

Написать скрипт, который при клике на кнопку c идентификатором `button` будет скрывать элемент с идентификатором `text`.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var button = document.getElementById('button');
var text = document.getElementById('text');

button.onclick = () => text.style.display = 'none';
}
```

<hr>
</details>

#### 2.2.2. Раскрывающийся список

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div class="list">
  <span class="title">Цвета:</span>
  <ul>
    <li>Красный</li>
    <li>Зелёный</li>
    <li>Синий</li>
  </ul>

  <script>
    // ...
  </script>
</div>
</body>

</html>
```

Написать скрипт, который при клике на элемент c классом `list` будет скрывать или отображать внутренний список.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    /* По умолчанию список скрыт. */
    .list ul {
      display: none;
    }

    /* Но при добавлении класса open список отображается. */
    .list.open ul {
      display: block;
    }

    .list .title::before {
      content: '▶ ';
    }

    .list.open .title::before {
      content: '▼ ';
    }
  </style>
</head>

<body>
  <div class="list">
  <span class="title">Цвета:</span>
  <ul>
    <li>Красный</li>
    <li>Зелёный</li>
    <li>Синий</li>
  </ul>

  <script>
    var list = document.body.querySelector('.list');
    var title = list.querySelector('.title');

    title.onclick = () => list.classList.toggle('open');
  </script>
</div>
</body>

</html>
```

<hr>
</details>

## 3. События в деталях

Подробную информацию о событии можно получить с помощью *объекта события*, которое передаётся в обработчик первым аргументом:

```js
elem.onclick = function(event) {
  // Вывести тип события, элемент и координаты клика.
  alert(event.type + " на " + event.currentTarget);
  alert(event.clientX + ":" + event.clientY);
}
```

Некоторые свойства объекта `event`:

| Свойство              | Описание                                 |
| --------------------- | ---------------------------------------- |
| `event.type`          | Тип события.                             |
| `event.eventPhase`    | Текущий этап обработки события.          |
| `event.target`        | Элемент, на котором произошло событие.   |
| `event.currentTarget` | Элемент, на котором сработал обработчик. |

Свойства `event.clientX` и `event.clientY` специфичны для события `click` и обозначают координаты курсора в момент клика.

Этапы обработки события:
1. событие распространяется сверху вниз (этап перехвата),
2. событие достигло целевого элемента (этап цели),
3. событие распространяется снизу вверх (этап всплытия).

![Всплытие и перехват](eventflow.png)

Основной принцип всплытия:
> При наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.

Всплывают *почти* все события. Например, событие `focus` не всплывает.

Для дальнейшей передачи события необходимо вызвать метод `event.stopPropagation()`.

### 3.1. Ссылки

- [Объект `Event`](https://developer.mozilla.org/ru/docs/Web/API/Event)
- [Метод `Event.stopPropagation()`](https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation)

### 3.2. Задачи

#### 3.2.1. Перемещение элемента по клику

Создать страницу `index.html` со следующим содержимым:

```html
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    #circle {
      position: absolute;
      width: 100px;
      height: 100px;
      background: yellow;
      border: 3px solid red;
      border-radius: 60px;
    }

    body {
      width: 100vw;
      height: 100vh;
      margin: 0;
    }
  </style>
</head>

<body>
  <div id="circle"></div>
</body>

</html>
```

Написать скрипт, который при клике на странице поместит элемент с идентификатором `circle` на место клика.

Также должны выполняться следующие условия:
- центр элемента должен совпадать с местом клика.
- элемент не должен выходить за границы страницы, а располагаться у границы.

<details>
<summary>Посмотреть решение</summary>
<hr>

Возможное решение:

```js
var circle = document.getElementById('circle');

document.body.onclick = function (event) {
  // Координаты центра элемента.
  var top = event.clientY - circle.offsetHeight / 2;
  var left = event.clientX - circle.offsetWidth / 2;

  // Элемент вылезает за верхнюю границу.
  if (top < 0) {
    top = 0;
  }

  // Элемент вылезает за левую границу.
  if (left < 0) {
    left = 0;
  }

  // Элемент вылезает за правую границу.
  if (left + circle.offsetWidth > document.body.offsetWidth) {
    left = document.body.offsetWidth - circle.offsetWidth;
  }

  // Элемент вылезает за нижнюю границу.
  if (top + circle.offsetHeight > document.body.offsetHeight) {
    top = document.body.offsetHeight - circle.offsetHeight;
  }

  circle.style.left = left + 'px';
  circle.style.top = top + 'px';
}
```

<hr>
</details>