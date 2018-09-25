[Назад к описанию курса](../../README.md)

# Анимации и рисование

Содержание:
- [1. Трансформации, переходы и анимации](#1-Трансформации-переходы-и-анимации)
  - [1.1. Трансформации](#11-Трансформации)
  - [1.2. Переходы](#12-Переходы)
  - [1.3. Анимации](#13-Анимации)
  - [1.4. Ссылки](#14-Ссылки)

## 1. Трансформации, переходы и анимации

### 1.1. Трансформации

CSS-свойство `transform` позволяет изменять внешний вид элемента с помощью функций трансформации:

| Функции                                                 | Описание                                                                   |
| ------------------------------------------------------- | -------------------------------------------------------------------------- |
| `translate(dx, dy)`, `translateX(dx)`, `translateY(dy)` | Сдвигают элемент на `dx` по горизонтали и на `dy` по вертикали.            |
| `scale(dx, dy)`, `scaleX(dx)`, `scaleY(dy)`             | Масштабируют элемент в `dx` раз по горизонтали и в `dy` раз по вертикали.  |
| `skew(ax, ay)`, `skewX(ax)`, `skewY(ay)`                | Наклоняют элемент на угол `ax` по горизонтали и на угол `ay` по вертикали. |
| `rotate(a)`                                             | Поворачивает элемент на угол `a`.                                          |

К одному элементу можно применять сразу несколько трансформаций:

```css
* { transform: translate(50px, 100px) skew(30deg, 10deg) scale(1.5) rotate(90deg); }
```

В этом случае трансформации будут применяться в порядке их следования.

Все трансформации применяются относительно некоторой точки. По умолчанию эта точка совпадает с центром элемента. Изменить эту точку можно с помощью CSS-свойства `transform-origin`.

### 1.2. Переходы

Переходы позволяют определить промежуточное состояние элемента при переходе от одного состояния к другому. Для этого используется следующий набор CSS-свойств:

| Свойство                     | Значение                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `transition-property`        | Свойства, к которым будут применяться переходы.                                                                 |
| `transition-duration`        | Длительность перехода для свойств, указанных в `transition-property`.                                           |
| `transition-timing-function` | Функция, с помощью которой будет вычисляться промежуточное значение свойств, указанных в `transition-property`. |
| `transition-delay`           | Задержка перед выполнением перехода для свойств, указанных в `transition-property`.                             |

CSS-свойство `transition` представляет собой сокращённую запись вышеприведённых свойств:

```css
/* Подробная запись */
* {
  transition-property: background-color;
  transition-duration: 3s;
  transition-timing-function: ease-in-out;
  transition-delay: 500ms;
}

/* Сокращённая запись. */
* { transition: background-color 3s ease-in-out 500ms; }
```

Переходы можно устанавливать сразу для нескольких свойств:

```css
* {
  transition:
    background-color 3s ease-in-out 1s,
    color 2s linear 2s;
}
```

Инициировать переход средствами CSS можно с помощью псевдоклассов:

```css
/* Начальное состояние элемента. */
.transition {
  background-color: red;
  transition: background-color 3s ease-in-out 500ms;
}

/* Запустить переход при наведении указателя мыши на элемент. */
.transition:hover {
  background-color: blue;
}
```

То же самое можно сделать и средствами JavaScript:

```js
elem.onmouseenter = () => elem.style.backgroundColor = 'blue';
elem.onmouseleave = () => elem.style.backgroundColor = '';
```

### 1.3. Анимации

Анимации, как и переходы, позволяют определить промежуточное состояние элемента при переходе от одного состояния к другому. В отличие от переходов, анимации позволяют указать не только начальные и конечные состояния элемента, но и множество промежуточных состояний.

Анимация состоит из набора ключевых кадров и объявляется следующим образом:

```css
@keyframes backgroundColorAnimation  {
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
```

После этого анимацию можно применять. Для этого используется следующий набор CSS-свойств:

| Свойство                    | Значение                                                                                 |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| `animation-name`            | Названия применяемых анимаций.                                                           |
| `animation-duration`        | Длительность анимаций, указанных в `animation-name`.                                     |
| `animation-iteration-count` | Количество повторений анимаций, указанных в `animation-name`.                            |
| `animation-direction`       | Направление анимаций при повторе, указанных в `animation-name`.                          |
| `animation-fill-mode`       | Способ установки окончательного значения анимируемых свойств.                            |
| `animation-delay`           | Задержка перед запуском анимаций, указанных в `animation-name`.                          |
| `animation-timing-function` | Функция, с помощью которой будет вычисляться промежуточное значение анимируемых свойств. |
| `animation-play-state`      | Текущее состояние анимаций, указанных в `animation-name`.                                |

CSS-свойство `animation` представляет собой сокращённую запись вышеприведённых свойств:

```css
/* Подробная запись */
* {
  animation-name: backgroundColorAnimation;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-play-state: running
}

/* Сокращённая запись. */
* { animation: backgroundColorAnimation 5s ease-in-out 3 alternate 1s forwards running; }
```

Не все свойства поддаются анимации. Чтобы обойти это ограничение, необходимо использовать JavaScript.

### 1.4. Ссылки

- [Свойство `transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Свойство `transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [Свойство `transition`](https://developer.mozilla.org/ru/docs/Web/CSS/transition)
- [Свойство `animation`](https://developer.mozilla.org/ru/docs/Web/CSS/animation)
- [Перечень анимируемых CSS-свойств](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)