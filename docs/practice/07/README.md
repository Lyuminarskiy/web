# 7. Анимации и переходы. @-правила и медиа-запросы

## Темы занятия

- [@-правила](https://webref.ru/css/type/atrules) и
[медиа-запросы](https://webref.ru/css/value/media).
- Трансформации.
- [Анимации и переходы](https://webref.ru/css/type/animation).
- Тени `box-shadow`.
- Фон.
- Градиенты `linear-gradient()`, `radial-gradient()`,
`repeating-linear-gradient()` и `repeating-radial-gradient()`.
- Работа с инструментами разработчика: манипуляция DOM, задание и просмотр 
свойств, запись анимаций, выбор медиа-типа (принтер или экран), просмотр 
адаптивной вёрстки.

## Теоретические сведения

### CSS[``]()
  
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
    
- Трансформации:

  - Применение трасформации [`transform`](https://webref.ru/css/transform).
  - Установка точки, относительно которой будет происходить трансформация
  [`transform-origin`](https://webref.ru/css/transform-origin)
  - Функция поворота `rotate(<угол>)`.
  - Функция растяжения `scale(<ось X>, <ось Y>)`.
  - Функция перемещения `translate(<ось X>, <ось Y>)`.
  - Функция наклона `skew(<ось X>, <ось Y>)`.
    
- Анимации и переходы:

  - @-правило [`@keyframes`](https://webref.ru/css/keyframes).

<disqus-comments
  page-uuid="d6d92b81-f885-41a2-ab1c-ca9559e438c0"
  page-title="7. Анимации и переходы. @-правила и медиа-запросы
    | Практические занятия"/>

<script-button/>