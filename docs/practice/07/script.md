---
sidebar: auto
---

# 7. Анимации и переходы. @-правила и медиа-запросы

## Общая информация

Затраты времени (из доступных **180 минут**):

- **100-120 минут** - объяснение материала.
- **60-80 минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### @-правила и медиазапросы

- Правило [`@charset`](https://webref.ru/css/charset) применяется для 
задания кодировки внешнего CSS-файла. Это имеет значение в том случае, если 
в CSS-файле используются символы национального алфавита. Синтаксис:

```css
@charset "<кодировка>";
```

- Правило [`@import`](https://webref.ru/css/import) позволяет импортировать 
содержимое файла CSS в текущую стилевую таблицу.
Правило [`@import`](https://webref.ru/css/import) не разрешается вставлять 
после любых объявлений кроме [`@charset`](https://webref.ru/css/charset) или 
другого [`@import`](https://webref.ru/css/import). Синтаксис:

```css
@import url("<имя файла>") [типы носителей];
@import "<имя файла>" [типы носителей];
```

- Правило [`@media`](https://webref.ru/css/media) позволяет указать тип 
носителя, для которого будет применяться указанный стиль. Синтаксис:

```css
@media /* <тип носителя> */ {
  /* <стилевые правила> */
}
```

[Медиа-запросы](https://webref.ru/css/value/media):

- Типы носителей:

  - `all` - все типы.
  - `print` - принтеры и другие печатающие устройства.
  - `screen` - экран монитора.
  - `speech` - речевые синтезаторы.
  
- Логические операторы:

  - `all` - логическое `И`.
  - `not` - логическое `НЕ`.
  
- Медиа-функции:

  - `orientation` - ориентация устройства.
  - `width`, `min-width` и `max-width` - ширина отображаемой области.
  - `height`, `min-height` и `max-height` - высота отображаемой области.

Пример применения @-правил:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    body {
      display: grid;
      grid-template: repeat(3, 1fr) 3fr / repeat(2, 1fr);
      grid-gap: 5px;
      grid-template-areas:
        "header header"
        "main   aside"
        "main   footer"
        "main   ."
                
      height: 100vh;
      margin: 0;
    }
    
    @media (max-width: 300px) {
      body {
        grid-template: repeat(2, 1fr) 3fr 1fr / auto;
        grid-template-areas:
          "header"
          "aside "
          "main  "
          "footer"
      }
    }
    
    div {
      border: 1px solid black;
    }
    
    .block1 {
      grid-area: header;
      background-color: green;
    }
    
    .block2 {
      grid-area: main;
      background-color: yellow;
    }
    
    .block3 {
      grid-area: aside;
      background-color: red;
    }
    
    .block4 {
      grid-area: footer;
      background-color: blue;
    }
  </style>
</head>

<body>
  <div class="block1"></div>
  <div class="block2"></div>
  <div class="block3"></div>
  <div class="block4"></div>
</body>

</html>
```

### Трансформации

- Применение трасформации [`transform`](https://webref.ru/css/transform).
- Установка точки, относительно которой будет происходить трансформация
[`transform-origin`](https://webref.ru/css/transform-origin)
- Функция поворота `rotate(<угол>)`.
- Функция растяжения `scale(<ось X>, <ось Y>)`.
- Функция перемещения `translate(<ось X>, <ось Y>)`.
- Функция наклона `skew(<ось X>, <ось Y>)`.

```css
{
  /* Поворот */
  transform: rotate(30deg);
  transform: rotate3d(1, 0.5, -0.2, 30deg);
  transform: rotateX(1.5turn);
  transform: rotateY(30rad);
  transform: rotateZ(30grad);

  /* Масштабирование */
  transform: scale(0.5, 1);
  transform: scale3d(1, 0.5, 0.2);
  transform: scaleX(2);
  transform: scaleY(1.5);
  transform: scaleZ(0.2);

  /* Перемещение */
  transform: translate(20px, 30px);
  transform: translate3d(42px, -62px, -135px);
  transform: translateX(-10px);
  transform: translateY(50px);
  transform: translateZ(30px);

  /* Наклон */
  transform: skew(30deg, -15deg);
  transform: skewX(2rad);
  transform: skewY(1.2turn);

  /* Координаты точки, относительно которой будут происходить преобразования (x, y, z) */
  transform-origin: center center 0;
  transform-origin: left top 30px;
  transform-origin: right bottom -20px;
  transform-origin: 30px 20% 80px;
}
```

Пример применения трансформаций:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    .block1, .block2 {
      position: absolute;
      top: calc(50vh - 100px / 2);
      left: calc(50vw - 100px / 2);
      
      width: 100px;
      height: 100px;
    }

    .block1 {
      border: 1px dashed black;
      background-color: lightgrey;
    }

    .block2 {
      border: 1px solid black;
      background-color: red;
      transform-origin: left top;
    }

    .block2:hover {
      transform: rotate(45deg);
    }
  </style>
</head>

<body>
  <div class="block1"></div>
  <div class="block2"></div>
</body>

</html>
```

### Переходы

- Указание свойства, к которому будет применяться эффект перехода
[`transition-property`](https://webref.ru/css/transition-property).
- Длительность эффекта перехода
[`transition-duration`](https://webref.ru/css/transition-duration).
- Задержка перед запуском эффекта перехода
[`transition-delay`](https://webref.ru/css/transition-delay).
- Функция для вычисление промежуточных значений при переходе
[`transition-timing-function`
](https://webref.ru/css/transition-timing-function).  
- Универсальное свойство [`transition`](https://webref.ru/css/transition).

```css
{
  /* Свойства, к которым будут применяться переходы */
  transition-property: none;
  transition-property: all;
  transition-property: color;
  transition-property: color, background-color;

  /* Длительность перехода */
  transition-duration: 2s;
  transition-duration: 500ms;
  transition-duration: 10s, 230ms;

  /* Функция, с помощью которой будет вычисляться
  промежуточное значение свойств (по умолчанию ease) */
  transition-timing-function: ease;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: linear;
  transition-timing-function: step-start;
  transition-timing-function: step-end;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  transition-timing-function: steps(3, start);
  transition-timing-function: steps(2, start);
  transition-timing-function: steps(4, end);
  transition-timing-function: frames(10);

  /* Задержка перед выполнением перехода для свойств */
  transition-delay: 3s;
  transition-delay: 2s, 4ms;

  /* Сокращённая запись (transition-property, transition-duration, transition-timing-function, transition-delay) */
  transition: background-color 4s ease-in-out 1s;
  transition: background-color 4s ease-in-out 1s, color 1s linear 3s;
}
```

Пример применения переходов:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    .block1, .block2 {
      position: absolute;
      top: calc(50vh - 100px / 2);
      left: calc(50vw - 100px / 2);
      width: 100px;
      height: 100px;
    }

    .block1 {
      border: 1px dashed black;
      background-color: lightgrey;
    }

    .block2 {
      border: 1px solid black;
      background-color: red;
      transform-origin: left top;
      transition: all 2s ease;
    }

    .block2:hover {
      transform: rotate(45deg);
      background-color: green;
      opacity: 0.8;
    }
  </style>
</head>

<body>
  <div class="block1"></div>
  <div class="block2"></div>
</body>

</html>
```

### Анимации

- Задание ключевых кадров [`@keyframes`](https://webref.ru/css/keyframes).
- Указание идентификатора анимации
[`animation-name`](https://webref.ru/css/animation-name).
- Длительность анимации
[`animation-duration`](https://webref.ru/css/animation-duration).
- Задержка перед запуском анимации
[`animation-delay`](https://webref.ru/css/animation-delay).
- Функция для вычисление промежуточных значений при анимации
[`animation-timing-function`
](https://webref.ru/css/animation-timing-function).
- Число повторений анимации
[`animation-iteration-count`
](https://webref.ru/css/animation-iteration-count).
- Направление движения анимации
[`animation-direction`](https://webref.ru/css/animation-direction).
- Стили, которые применяются, когда анимация не проигрывается
[`animation-fill-mode`](https://webref.ru/css/animation-fill-mode).
- Текущее состояние анимации
[`animation-play-state`](https://webref.ru/css/animation-play-state).
- Универсальное свойство [`animation`](https://webref.ru/css/animation).

```css
@keyframes animation1  {
  /* Начальное состояние. */
  from {
    background-color: red;
  }
  /* Конечное состояние. */
  to {
    background-color: violet;
  }
}

@keyframes animation2  {
  /* Начальное состояние. */
  from {
    background-color: red;
  }
  /* Промежуточное состояние. */
  25% {
    background-color: yellow;
  }
  /* Промежуточное состояние. */
  50% {
    background-color: green;
  }
  /* Промежуточное состояние. */
  75% {
    background-color: blue;
  }
  /* Конечное состояние. */
  to {
    background-color: violet;
  }
}

* {
  /* Названия применяемых анимаций */
  animation-name: none;
  animation-name: animation1;
  animation-name: animation1, animation2;

  /* Длительность анимаций */
  animation-duration: 6s;
  animation-duration: 120ms;
  animation-duration: 10s, 230ms;

  /* Функция, с помощью которой будет вычисляться
  промежуточное значение анимируемых свойств (по умолчанию ease) */
  animation-timing-function: ease;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: ease-in-out;
  animation-timing-function: linear;
  animation-timing-function: step-start;
  animation-timing-function: step-end;
  animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  animation-timing-function: steps(3, start);
  animation-timing-function: steps(2, start);
  animation-timing-function: steps(4, end);

  /* Задержка перед выполнением перехода для свойств */
  animation-delay: 3s;
  animation-delay: 2s, 4ms;

  /* Количество повторений анимаций (по умолчанию 1) */
  animation-iteration-count: infinite;
  animation-iteration-count: 3;
  animation-iteration-count: 2.4;
  animation-iteration-count: 2, 0, infinite;

  /* Направление анимаций при повторе (по умолчанию normal) */
  animation-direction: normal;
  animation-direction: reverse;
  animation-direction: alternate;
  animation-direction: alternate-reverse;
  animation-direction: normal, reverse;
  animation-direction: alternate, reverse, normal;

  /* Способ установки окончательного значения анимируемых свойств. */
  animation-fill-mode: none;
  animation-fill-mode: forwards;
  animation-fill-mode: backwards;
  animation-fill-mode: both;
  animation-fill-mode: none, backwards;
  animation-fill-mode: both, forwards, none;
  
  /* Текущее состояние анимаций (по умолчанию running) */
  animation-play-state: running;
  animation-play-state: paused;
  animation-play-state: paused, running, running;  

  /* Сокращённая запись (animation-name, animation-duration, animation-timing-function, animation-iteration-count, animation-direction, animation-delay, animation-fill-mode, animation-play-state) */
  animation: animation1 5s ease-in-out 3 alternate 1s forwards running;
  animation: animation1 5s ease-in-out 3 alternate 1s forwards running, animation2 3s linear 2 reverse 3s both paused;
}
```

Пример применения анимации:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    .block1, .block2 {
      position: absolute;
      top: calc(50vh - 100px / 2);
      left: calc(50vw - 100px / 2);
      width: 100px;
      height: 100px;
    }

    .block1 {
      border: 1px dashed black;
      background-color: lightgrey;
    }

    .block2 {
      border: 1px solid black;
      background-color: red;

      animation: rainbow-rotate 5s linear infinite;
    }

    .block2:hover {
      animation-play-state: paused;
    }

    @keyframes rainbow-rotate {
      from {
        transform: none;
      }

      17% {
        background-color: orange;
      }

      33% {
        background-color: yellow;
      }

      50% {
        background-color: green;
      }

      67% {
        background-color: lightblue;
      }

      83% {
        background-color: blue;
      }

      to {
        transform: rotate(1turn);
        background-color: purple;
      }
    }
  </style>
</head>

<body>
  <div class="block1"></div>
  <div class="block2"></div>
</body>

</html>
```

### Установка фона элемента

- Фоновое изображение
[`background-image`](https://webref.ru/css/background-image).
- Начальное положение фонового изображения
[`background-position`](https://webref.ru/css/background-position).
- Масшабирование фонового изображения
[`background-size`](https://webref.ru/css/background-size).
- Повторение фонового изображения
[`background-repeat`](https://webref.ru/css/background-repeat).
- Поведение фонового изображения при прокрутке
[`background-attachment`](https://webref.ru/css/background-attachment).
- Универсальное свойство [`background`](https://webref.ru/css/background).
- Линейные градиенты
[`linear-gradient()`](https://webref.ru/css/value/linear-gradient) и
[`repeating-linear-gradient()`
](https://webref.ru/css/value/repeating-linear-gradient).
- Радиальные градиенты
[`radial-gradient()`](https://webref.ru/css/value/radial-gradient) и
[`repeating-radial-gradient()`
](https://webref.ru/css/value/repeating-radial-gradient).

```css
* {
  /* Цвет фона элемента */
  background-color: red;
  background-color: transparent;
  /* Положение фонового изображения */
  background-position: 100% 200px;
  background-position: 70%;
  background-position: 150px;
  background-position: left;
  background-position: right;
  background-position: top;
  background-position: bottom;
  background-position: center;
  background-position: left top;
  background-position: right bottom;
  background-position: center top;
  background-position: right center;
  /* Масштабирование фонового изображения (ширина и высота) */
  background-size: 100% 200px;
  background-size: auto 70%;
  background-size: 50%;
  background-size: 300px;
  background-size: auto;
  /* Масштабирование с сохранением пропорций, ширина/высота фонового изображения приравнивается к ширине/высоте элемента */
  background-size: cover;
  /* Масштабирование с сохранением пропорций, фоновое изображение полностью помещается внутри элемента */
  background-size: contain;
  /* Повторение фона (по горизонтали, по вертикали) */
  background-repeat: no-repeat repeat;
  /* Не повторять */
  background-repeat: no-repeat;
  /* Повторяить и по горизонтали, и по вертикали (по умолчанию) */
  background-repeat: repeat;
  /* Повторять по горизонтали */
  background-repeat: repeat-x;
  /* Повторять по вертикали  */
  background-repeat: repeat-y;
  /* Повторять и по горизонтали, и по вертикали, заполнить область за счёт пустого пространства */
  background-repeat: space;
  /* Повторять и по горизонтали, и по вертикали, заполнить область за счёт масштабирования */
  background-repeat: round;
  /* Область позиционирования фонового изображения */
  /* Фоновое изображения позиционируется относительно внутреннего края границы элемента */
  background-origin: padding-box;
  /* Фоновое изображения позиционируется относительно внешнего края границы элемента */
  background-origin: border-box;
  /* Фоновое изображения позиционируется относительно области содержимого элемента */
  background-origin: content-box;
  /* Область отображения фонового изображения */
  /* Фоновое изображения отображается в области элемента, исключая границу элемента */
  background-clip: padding-box;
  /* Фоновое изображения отображается в области элемента */
  background-clip: border-box;
  /* Фоновое изображения отображается в области содержимого элемента */
  background-clip: content-box;
  /* Управление поведения фонового изображения при прокрутке содержимого элемента */
  /* Фоновое изображение неподвижно */
  background-attachment: fixed;
  /* Фоновое изображение прокручивается вместе с содержимым */
  background-attachment: scroll;
  background-attachment: local;
  /* Изображение в качестве фона элемента*/
  background-image: url(../../02-HTML-2/07-multimedia/images/cat.jpeg);
  /* Комбинированное свойство фона элемента (background-color, background-position, background-size, background-repeat, background-origin, background-clip, background-attachment, background-image)
          */
  background: red center cover repeat-x content-box border-box fixed url(../../02-HTML-2/07-multimedia/images/cat.jpeg);
}
```

Пример установки фона элемента:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    body {
      height: 2000px;
      margin: 0;
      
      background-size: 40% auto;
      background: url("cat.jpeg") space fixed 30px 30px;
    }
  </style>
</head>

<body></body>

</html>
```

```css
{
  /* Линейный градиент (угол, список цветов) */
  background-image: linear-gradient(left, black, white);

  /* Углы градиента */
  background-image: linear-gradient(top, black, white);
  background-image: linear-gradient(right, black, white);
  background-image: linear-gradient(bottom, black, white);
  background-image: linear-gradient(left, black, white);
  background-image: linear-gradient(top left, black, white);
  background-image: linear-gradient(top right, black, white);
  background-image: linear-gradient(bottom left, black, white);
  background-image: linear-gradient(bottom right, black, white);
  background-image: linear-gradient(30deg, black, white);
  background-image: linear-gradient(270deg, black, white);

  /* Цвета градиента */
  background-image: linear-gradient(top, black, white);
  background-image: linear-gradient(top, red, green, blue);
  background-image: linear-gradient(top, red, orange, yellow, green, lightblue, blue, purple);

  /* Опорные точки */
  background-image: linear-gradient(to top, red 20%, green 50%, blue 80%);

  /* Повторяющийся линейный градиент (угол, список цветов) */
  background-image: repeating-linear-gradient(to left, black, white);
  background-image: repeating-linear-gradient(-45deg, #fff, #fff 25px, #e2edc1 25px, #e2edc1 50px);

  /* Радиальный градиент (форма, радиус, позиция, список цветов, размер) */
  background-image: radial-gradient(circle, black, white);

  /* Повторяющийся радиальный градиент (форма, радиус, позиция, список цветов, размер) */
  background-image: repeating-radial-gradient(circle, black, white);
  background-image: repeating-radial-gradient(circle at 200px 100px, #fff, #fff 25px, #fce3ee 25px, #fce3ee 50px);
}
```

Пример работы с линейными градиентами:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    body {
      height: 100vh;
      margin: 0;
      
      background-image:
        repeating-linear-gradient(45deg, #0000, #0000 20px, #f007 20px,
          #f007 40px),
        repeating-linear-gradient(-45deg, #0000, #0000 20px, #0f07 20px, 
          #0f07 40px);
    }
  </style>
</head>

<body></body>

</html>
```

Пример работы с радиальными градиентами:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Заголовок документа</title>
  <style>
    body {
      height: 100vh;
      margin: 0;
      
      background-image:
        repeating-radial-gradient(circle at center 40%, #0000, #0000 20px,
          #f007 20px, #f007 40px),
        repeating-radial-gradient(circle at center 60%, #0000, #0000 20px,
          #f007 20px, #f007 40px),
    }
  </style>
</head>

<body></body>

</html>
```

### Работа с инструментами разработчика Chrome

Открыть пример с анимацией и продемонстрировать на нём:

- Просмотр и изменение дерева элементов и правил CSS.
- Запись и воспроизведение анимаций.
- Переключение текущего медиа-типа устройства. 
- Инструменты проверки адаптивной вёрстки.

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.