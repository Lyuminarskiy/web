# 11. Встроенные объекты и их свойства

## Темы занятия

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects),
их свойства и методы.
- [Оператор распространения `...`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
- Отладка кода с помощью [Visual Studio Code](https://code.visualstudio.com).

## Теоретические сведения

### JavaScript

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects),
их свойства и методы:

  - `Object`:
  
    - `Object.keys()`
    
  - `Number`:
  
    - `Number.isInteger(value)`
    - `Number.isFinite(value)`
    - `Number.isNaN(value)`
    - `numObj.toFixed([digits])`
    - `numObj.toPrecision([precision])`
    
  - `Math`:
  
    - `Math.PI`, `Math.E`, ...
    - `Math.sin()`, `Math.cos()`, ...
    - `Math.max()`, `Math.min()`
  
### Visual Studio Code

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

Добавьте конфигурацию отладки `Chrome: Attach` с помощью меню `Отладка → 
Добавить конфигурацию...`:

```json
{
  "type": "chrome",
  "request": "attach",
  "name": "Attach to Chrome",
  "port": 9222,
  "webRoot": "${workspaceFolder}"
}
```