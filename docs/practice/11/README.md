# 11. Встроенные объекты и их свойства

## Темы занятия

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects),
их свойства и методы.

- Деструктуризация:

  - [Оператор `...`
  ](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
  
- Отладка кода с помощью [Visual Studio Code](https://code.visualstudio.com).

## Теоретические сведения

### JavaScript

- [Стандартные встроенные объекты
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects),
их свойства и методы:

  - Объект `Number` и числа:
  
  - Объект `String` и строки:
  
  - Массивы:
  
  - Объект `Object`:
    
  - Объект `Math`:
  
  - Объект `Date`:

- [Оператор `...`
](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
  
### Visual Studio Code

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