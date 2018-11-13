---
sidebar: auto
---

# 7. Анимации и переходы. @-правила и медиа-запросы

## Общая информация

Затраты времени (из доступных **180 минут**):

- **X минут** - объяснение материала.
- **Y минут** - выполнение заданий студентами.

## Сценарий

### Вступление

Попросить студентов не шуметь, переговариваться шёпотом, не ругаться и
уважать друг друга. Если у них возникнут вопросы в ходе лекции, можно сразу
же их задавать.

Кратко напомнить содержимое предыдущего занятия.

### @-правила

- Правило [`@charset`](https://webref.ru/css/charset) применяется для 
задания кодировки внешнего CSS-файла. Это имеет значение в том случае, если 
в CSS-файле используются символы национального алфавита.
- Правило [`@import`](https://webref.ru/css/import) позволяет импортировать 
содержимое файла CSS в текущую стилевую таблицу.
Правило [`@import`](https://webref.ru/css/import) не разрешается вставлять 
после любых объявлений кроме [`@charset`](https://webref.ru/css/charset) или 
другого [`@import`](https://webref.ru/css/import).

Пример применения @-правил:

```css
@charset "utf-8";

@import url("mobile.css") (max-width: 767px);
@import url("tablet.css") (min-width: 768px) and (max-width: 1023px);
@import url("desktop.css") (min-width: 1024px);
```

### Трансформации

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

### Анимации и переходы

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
  animation-timing-function: frames(10);

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

### Фон

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

```css
{
  /* Линейный градиент (угол, список цветов) */
  background-image: linear-gradient(left, black, white);
  background-image: -webkit-linear-gradient(left, black, white);
  background-image: -moz-linear-gradient(left, black, white);

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
  background-image: linear-gradient(top, red 20%, green 50%, blue 80%);

  /* Повторяющийся линейный градиент (угол, список цветов) */
  background-image: repeating-linear-gradient(left, black, white);
  background-image: -webkit-repeating-linear-gradient(left, black, white);
  background-image: -moz-repeating-linear-gradient(left, black, white);

  /* Радиальный градиент (форма, радиус, позиция, список цветов, размер) */
  background-image: radial-gradient(left, black, white);
  background-image: -webkit-radial-gradient(left, black, white);
  background-image: -moz-radial-gradient(left, black, white);

  /* Повторяющийся радиальный градиент (форма, радиус, позиция, список цветов, размер) */
  background-image: repeating-radial-gradient(left, black, white);
  background-image: -webkit-repeating-radial-gradient(left, black, white);
  background-image: -moz-repeating-radial-gradient(left, black, white);

  background-image: -webkit-repeating-linear-gradient(left top, rgba(41, 99, 156, 0.5), rgba(41, 99, 156, 0.5) 3%, transparent 3%, transparent 6%),
  -webkit-repeating-linear-gradient(left bottom, rgba(211, 47, 47, 0.5), rgba(211, 47, 47, 0.5) 3%, transparent 3%, transparent 6%);
}
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.