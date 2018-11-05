---
sidebar: auto
---

# 3. Таблицы, ссылки, мультимедиа и фреймы. Псевдоклассы

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

### Универсальный атрибут `lang`

Помимо кодировки документа следует также указывать язык текста документа. 
Для этого используется универсальный атрибут
[`lang`](https://webref.ru/html/attr/lang). Его можно указать в элементе
[`<html>`](https://webref.ru/html/html) для всего документа или локально для
отдельных элементов. В качестве значение необходимо указать код языка. 
Посмотреть некоторые распространенные языки и их коды можно в
[справочнике](https://webref.ru/html/value/lang).

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Универсальный атрибут lang</title>
</head>

<body>
  <p>Я говорю на русском.</p>
  <p lang="en">I speak English.</p>
  <p lang="de">Ich spreche Deutsch.</p>
  <p lang="fr">Je parle francais.</p>
</body>

</html>
```

### Валидатор

Рассказать про [валидатор](https://validator.w3.org). Он используется для 
проверки документов HTML на правильность.

Показать его работу на примере с языками. Добавить в код ошибку и показать 
вывод валидатора в этом случае.

### Границы элементов

Рассмотрим группу свойств, позволяющих устанавливать границы элемента 
(вместо `*` подставить одно из следующих значений: `top`, `bottom`, `left`, 
`right`):

- Толщина границы [`border-width`](https://webref.ru/css/border-width) и 
`border-*-width`.
- Стиль границы [`border-style`](https://webref.ru/css/border-style) и 
`border-*-style`.
- Цвет границы [`border-color`](https://webref.ru/css/border-color) и 
`border-*-color`.
- Универсальное свойство [`border`](https://webref.ru/css/border) и `border-*`.
- Радиус скругления углов границы
[`border-radius`](https://webref.ru/css/border-radius) и `border-*-*-radius`.

Границы можно устанавливать как все вместе, так и по отдельности. Углы 
границы можно делать как скруглёнными, так и эллиптическими

```html
<!DOCTYPE html>

<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Границы элемента</title>
  <style>
    p {
      border-top: 10px solid red;
      border-bottom: 10px double green;
      border-left: 10px dashed blue;
      border-right: 10px dotted yellow;
      border-radius: 30px 60px 20px 80px / 50px 100px 30px 120px;
    }
  </style>
</head>
<body>
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
    zzril delenit augue duis dolore te feugait nulla facilisi.
  </p>
</body>
</html>
```

### Элементы таблиц и их стилизация

Теперь рассмотрим группу элементов, позволяющих создавать таблицы:

- Содержимое таблицы [`<table>`](https://webref.ru/html/table).
- Заголовок таблицы [`<caption>`](https://webref.ru/html/caption).
- Шапка таблицы [`<thead>`](https://webref.ru/html/thead).
- Основное тело таблицы [`<tbody>`](https://webref.ru/html/tbody).
- Подвал таблицы [`<tfoot>`](https://webref.ru/html/tfoot).
- Строка таблицы [`<tr>`](https://webref.ru/html/tr).
- Обычная [`<td>`](https://webref.ru/html/td) и заголовочная
`<th>`](https://webref.ru/html/th) ячейки таблицы, и их атрибуты
[`colspan`](https://webref.ru/html/td/colspan) и
[`rowspan`](https://webref.ru/html/td/rowspan).

В таблице может быть только по одному элементу типа
[`<thead>`](https://webref.ru/html/thead) и
[`<tfoot>`](https://webref.ru/html/tfoot). Допускается указывать несколько 
элементов [`<tbody>`](https://webref.ru/html/tbody) внутри таблицы.

Вместе с элементами стоит также рассмотреть группу свойств, позволяющих 
устанавливать параметры отображения элементов таблиц:

- Положение заголовка [`caption-side`](https://webref.ru/css/caption-side).
- Отображение границ ячеек
[`border-collapse`](https://webref.ru/css/border-collapse).
- Расстояние между границами ячеек
[`border-spacing`](https://webref.ru/css/border-spacing).
- Отображение пустых ячеек [`empty-cells`](https://webref.ru/css/empty-cells).

Значения свойств [`border-spacing`](https://webref.ru/css/border-spacing) и 
[`empty-cells`](https://webref.ru/css/empty-cells) игнорируются, если 
свойству [`border-collapse`](https://webref.ru/css/border-collapse) 
установлено значение `collapse`.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Таблицы</title>
  <style>
    table, td, th {
      text-align: center;
      border: 1px solid black;
      border-collapse: collapse;
    }
  </style>
</head>

<body>
  <table>
    <caption>Заголовок таблицы</caption>

    <thead>
      <tr>
        <th colspan="2">Шапка таблицы</th>
      </tr>
      <tr>
        <th>Заглавная ячейка 1</th>
        <th>Заглавная ячейка 2</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Ячейка 1</td>
        <td rowspan="2">Ячейка 2</td>
      </tr>
      <tr>
        <td>Ячейка 3</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="2">Подвал таблицы</td>
      </tr>
    </tfoot>
  </table>
</body>

</html>
```

### Псевдоклассы. Ссылки и их свойства

Для стилизации полезно также использовать псевдоклассы. Псевдоклассы 
позволяют динамически применить стиль к элементам исходя из их положения в 
дереве элементов или действий пользователя. Полный список псевдоклассов 
можно посмотреть в [справочнике](https://webref.ru/css/type/pseudoclass).

Псевдоклассы указываются вместе с селекторами, перед именем псевдокласса 
ставится знак `:`.

Рассмотрим следующую группу псевдоклассов:

- Первый дочерний элемент [`:first-child`](https://webref.ru/css/first-child).
- Последний дочерний элемент [`:last-child`](https://webref.ru/css/last-child).
- Группа дочерних элементов в соответствии с их нумерацией в дереве 
элементов [`:nth-child()`](https://webref.ru/css/nth-child) и 
[`:nth-last-child()`](https://webref.ru/css/nth-last-child) (нумерация в 
обратном порядке).

Запись `:first-child` равноценна записи `:nth-child(1)`, то же самое 
касается и `:last-child` и `:nth-last-child(1)`.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Псевдоклассы</title>
  <style>
    table, td {
      border: 1px solid black;
      border-collapse: collapse;
    }

    
    tr:first-child {
      color: white;
      background-color: red;
    }

    
    tr:nth-child(even) {
      background-color: yellow;
    }
  </style>
</head>

<body>
  <table>
    <caption>Заголовок таблицы</caption>
    
    <tbody>
      <tr>
        <td>Ячейка 11</td>
        <td>Ячейка 12</td>
      </tr>
      <tr>
        <td>Ячейка 21</td>
        <td>Ячейка 22</td>
      </tr>
      <tr>
        <td>Ячейка 31</td>
        <td>Ячейка 32</td>
      </tr>
      <tr>
        <td>Ячейка 41</td>
        <td>Ячейка 42</td>
      </tr>
      <tr>
        <td>Ячейка 51</td>
        <td>Ячейка 52</td>
      </tr>
      <tr>
        <td>Ячейка 61</td>
        <td>Ячейка 62</td>
      </tr>
    </tbody>
  </table>  
</body>

</html>
```

Ссылка [`<a>`](https://webref.ru/html/a) и её атрибуты:
 
- Адрес документа, на который следует перейти
[`href`](https://webref.ru/html/a/href).
- Имя окна или фрейма, куда браузер будет загружать документ
[`target`](https://webref.ru/html/a/target)
- Скачать указанный по ссылке файл
[`download`](https://webref.ru/html/a/download).

Псевдоклассы:

- Непосещённая ссылка [`:link`](https://webref.ru/css/link).
- Посещённая ссылка [`:visited`](https://webref.ru/css/visited).
- Элемент, на который наведён указатель мыши
[`:hover`](https://webref.ru/css/hover).

Адреса бывают абсолютные и относительные:
[статья](https://webref.ru/html/value/url).
Можно ссылаться по [`id`](https://webref.ru/html/attr/id).


```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Ссылки</title>
  <style>
    a:link {
      color: green;
    }
    
    a:visited {
      color: red;
    }
    
    a:hover {
      background-color: yellow;
    }
  </style>
</head>

<body>
  <a href="https://google.com/">Абсолютная ссылка</a>
  
  <h1 id="header">Заголовок</h1>
  <a href="#header">Относительная ссылка</a>
</body>

</html>
```

### Элементы мультимедиа. Встроенный фрейм. Задание размеров

Элементы мультимедиа:

- Изображение [`<img>`](https://webref.ru/html/img).
- Аудиозапись [`<audio>`](https://webref.ru/html/audio).
- Видеоролик [`<video>`](https://webref.ru/html/video).
- Текстовая дорожка [`<track>`](https://webref.ru/html/track).

Встроенный фрейм [`<iframe>`](https://webref.ru/html/iframe).

Размеры элементов:

- Ширина [`width`](https://webref.ru/css/width).
- Высота [`height`](https://webref.ru/css/height).

Размеры можно указывать в пискелях и процентах.

```html
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Элементы мультимедиа и фреймы</title>
  <style>
    h1 {
      text-align: center;
    }
    
    audio, video, img, iframe {
      width: 100%;
    }
    
    iframe {
      border: none;
    }
  </style>
</head>

<body>
  <h1>Изображение</h1>
  <img src="images/cat.jpeg" alt="Котик">
  

  <h1>Аудиозапись</h1>
  <audio src="assets/audio.mp3" controls>
    <p>Ваш веб-браузер не поддерживает проигрывание аудио.</p>
  </audio>
  

  <h1>Видеоролик</h1>
  <video src="assets/video.mp4" controls>
    <track kind="subtitles" src="assets/subtitles.en.vtt"
           srclang="en" label="English">
    <track kind="subtitles" src="assets/subtitles.ru.vtt"
           srclang="ru" label="Русский" default>
    <p>Ваш веб-браузер не поддерживает проигрывание видео.</p>
  </video>
  

  <h1>Встроенный фрейм</h1>
  <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0"
          width="560" height="315" allowfullscreen></iframe>
</body>

</html>
```

### Заключение

Кратко повторить пройденный материал.

Студенты переходят к выполнению самостоятельных заданий. Кратко описать, что
нужно сделать в заданиях. Обратить внимание на раздел `Теоретические 
сведения`, а также на подсказки к заданиям.

Тем, у кого есть долги, следует сдать их перед началом работы над новыми 
заданиями.