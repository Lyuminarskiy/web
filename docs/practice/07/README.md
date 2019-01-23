# 7. @-правила и медиа-запросы. Трансформации, переходы и анимации. Фон элемента

## Темы занятия

- [@-правила](https://webref.ru/css/type/atrules).
- [Медиа-запросы](https://webref.ru/css/value/media).
- [Трансформации](https://webref.ru/layout/advanced-html-css/transform).
- [Эффект перехода и анимации
](https://webref.ru/layout/advanced-html-css/transitions-animations).
- [Фон элемента](https://metanit.com/web/html5/6.14.php).
- [Инструменты разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools/).

## Теоретические сведения

### CSS
  
- [@-правила](https://webref.ru/css/type/atrules):

  - [`@charset`](https://webref.ru/css/charset) - кодировка файла CSS.
  - [`@import`](https://webref.ru/css/import) - импорт содержимого внешнего 
  файла CSS.
  - [`@media`](https://webref.ru/css/media) - указание типа носителя.  
  - [`@keyframes`](https://webref.ru/css/keyframes) - ключевые кадры анимации.
  
- [Медиа-запросы](https://webref.ru/css/value/media):

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
    
- [Трансформации](https://metanit.com/web/html5/9.1.php):

  - [`transform`](https://webref.ru/css/transform) - применяемые трансформации.
  - [`transform-origin`](https://webref.ru/css/transform-origin) -
  точка, относительно которой происходит трансформация.
  - [`rotate(angle)`](https://webref.ru/css/value/rotate) -
  поворачивает элемент на угол `angle`.
  - [`scale(dx, dy)`](https://webref.ru/css/value/scale) - масштабирует 
  элемент в `dx` и `dy` раз по горизонтали и вертикали соответственно.
  - [`translate(dx, dy)`](https://webref.ru/css/value/translate) - сдвигает 
  элемент на расстояние `dx` и `dy` по горизонтали и вертикали соответственно.
  - [`skew(dx, dy)`](https://webref.ru/css/value/skew) - наклоняет 
  элемент на угол `dx` и `dy` по горизонтали и вертикали соответственно.
  
- [Эффект перехода](https://metanit.com/web/html5/9.2.php):

  - [`transition-property`](https://webref.ru/css/transition-property) -
  свойство, к которому будет применяться эффект перехода.
  - [`transition-duration`](https://webref.ru/css/transition-duration) -
  длительность эффекта перехода.
  - [`transition-delay`](https://webref.ru/css/transition-delay) -
  задержка перед запуском эффекта перехода.
  - [`transition-timing-function`
  ](https://webref.ru/css/transition-timing-function) - функция для 
  вычисления промежуточных значений свойств при эффекте перехода.
  - [`transition`](https://webref.ru/css/transition) - _универсальное свойство_
  для установки различных параметров эффекта перехода.
  
- [Анимации](https://metanit.com/web/html5/9.3.php):

  - [`animation-name`](https://webref.ru/css/animation-name) -
  идентификатора анимации.
  - [`animation-duration`](https://webref.ru/css/animation-duration) -
  длительность анимации.
  - [`animation-delay`](https://webref.ru/css/animation-delay) -
  задержка перед запуском анимации.
  - [`animation-timing-function`
  ](https://webref.ru/css/animation-timing-function) - функция для вычисления
  промежуточных значений свойств при анимации.
  - [`animation-iteration-count`
  ](https://webref.ru/css/animation-iteration-count) -
  число повторений анимации.
  - [`animation-direction`](https://webref.ru/css/animation-direction) -
  направление движения анимации.
  - [`animation-fill-mode`](https://webref.ru/css/animation-fill-mode) -
  стили, которые применяются, когда анимация не активна.
  - [`animation-play-state`](https://webref.ru/css/animation-play-state) -
  состояние анимации.
  - [`animation`](https://webref.ru/css/animation) - _универсальное свойство_
  для установки различных параметров анимации.

- [Фон элемента](https://metanit.com/web/html5/6.14.php):

  - [`background-image`](https://webref.ru/css/background-image) -
  фоновое изображение.
  - [`background-position`](https://webref.ru/css/background-position) -
  начальное положение фонового изображения.
  - [`background-size`](https://webref.ru/css/background-size) -
  масшабирование фонового изображения.
  - [`background-repeat`](https://webref.ru/css/background-repeat) -
  повторение фонового изображения.
  - [`background-attachment`](https://webref.ru/css/background-attachment) -
  поведение фонового изображения при прокрутке.
  - [`background`](https://webref.ru/css/background) - _универсальное свойство_
  для установки различных параметров фона элемента.
  - [`linear-gradient()`](https://webref.ru/css/value/linear-gradient) и
  [`repeating-linear-gradient()`
  ](https://webref.ru/css/value/repeating-linear-gradient) -
  линейные градиенты.
  - [`radial-gradient()`](https://webref.ru/css/value/radial-gradient) и
  [`repeating-radial-gradient()`
  ](https://webref.ru/css/value/repeating-radial-gradient) -
  радиальные градиенты.
  
### Прочее

[Инструменты разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools/):

- [Просмотр и изменение дерева элементов
](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-dom).
- [Просмотр и изменение правил CSS
](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-styles).
- [Просмотр и изменение анимаций
](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations).
- [Инструменты проверки адаптивной вёрстки
](https://developers.google.com/web/tools/chrome-devtools/device-mode).

## 7.1. @-правила и медиа-запросы

Доработайте веб-страницу, созданную в задании [`6.1. Пользовательские 
свойства`](/practice/06/#_6-1-поnьзоватеnьские-свойства), выполнив следующие
задачи:

1. Создайте файл `variables.css` и перенесите в него все объявления 
пользовательских свойств из файла `style.css`. После этого импортируйте 
содержимое файла `variables.css` в файл `style.css`.

2. Создайте файл `print.css` и импортируйте его содержимое в файл `style
.css`. Добавьте в точку импорта такой медиа-запрос, чтобы импорт происходил 
только в том случае, если текущее устройство - принтер (или другое печетающее 
устройство).

3. Добавьте внутрь файла `print.css` такие правила CSS, чтобы при печати 
страница приобретала следующий вид:

   - Виден только текст рассказа с заголовками и указаниями об авторе и 
   времени публикации рассказа в конце страницы.   
   - Содержимое занимает всю ширину страницы.   
   - Убрано всё оформление текста, установленное ранее, за некоторыми 
   исключениями, перечисленными далее.   
   - Текст абзацев выровнен по ширине, добавлен отступ первой строки.
   - Заголовки выровнены по центру.

4. Укажите кодировку для всех файлов CSS.

## 7.2. Трансформации, эффект перехода и фон элементов

<practice-07-task-02/>

## 7.3. Анимации

<script-button/>

<disqus-comments
  page-uuid="d6d92b81-f885-41a2-ab1c-ca9559e438c0"
  page-title="7. @-правила и медиа-запросы. Трансформации, переходы и анимации.
    Фон элемента | Практические занятия"/>