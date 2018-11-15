# 7. Анимации и переходы. @-правила и медиа-запросы

## Темы занятия

- [@-правила](https://webref.ru/css/type/atrules) и
[медиа-запросы](https://webref.ru/css/value/media).
- [Трансформации](https://webref.ru/layout/advanced-html-css/transform).
- [Анимации и переходы
](https://webref.ru/layout/advanced-html-css/transitions-animations).
- Установка фона элемента.
- Работа с [инструментами разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools/).

## Теоретические сведения

### CSS
  
- @-правила:

  - Указание кодировки [`@charset`](https://webref.ru/css/charset).
  - Импорт содержимого внешнего файла CSS
  [`@import`](https://webref.ru/css/import).
  - Указание типа носителя [`@media`](https://webref.ru/css/media).
  
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
    
- [Трансформации](https://webref.ru/layout/advanced-html-css/transform):

  - Применение трасформации [`transform`](https://webref.ru/css/transform).
  - Установка точки, относительно которой будет происходить трансформация
  [`transform-origin`](https://webref.ru/css/transform-origin)
  - Функция поворота `rotate(<угол>)`.
  - Функция растяжения `scale(<ось X>, <ось Y>)`.
  - Функция перемещения `translate(<ось X>, <ось Y>)`.
  - Функция наклона `skew(<ось X>, <ось Y>)`.
  
- Переходы:

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
  
- Анимации:

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

- Установка фона элемента.

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
  
### Прочее

Работа с [инструментами разработчика Chrome
](https://developers.google.com/web/tools/chrome-devtools/):

- Просмотр и изменение дерева элементов и правил CSS.
- Запись и воспроизведение анимаций.
- Переключение текущего медиа-типа устройства. 
- Инструменты проверки адаптивной вёрстки.

<disqus-comments
  page-uuid="d6d92b81-f885-41a2-ab1c-ca9559e438c0"
  page-title="7. Анимации и переходы. @-правила и медиа-запросы
    | Практические занятия"/>

<script-button/>