---
prev: /practice/
next: /exam/
---

# Лабораторные работы

## Общая информация

### Сроки сдачи и оценка работы

На выполнение каждой из лабораторных работ даётся **4 недели**.
В этот срок не включается время, затраченное преподавателем на проверку
вашей работы, а только время, затраченное вами на выполнение самой работы.

Если вы сдали вашу работу преподавателю в рамках этого срока, то оценка за неё
остаётся максимальной, иначе её оценка будет уменьшаться, с течением времени 
постепенно приближаясь к половине максимального значения:

![Оценка лабораторной работы](./assets/lab_rating.svg)

### Макеты

В каждой лабораторной работе необходимо выбрать макет, на основе которого
вы будете разрабатывать веб-сайт. Число макетов ограничено,
поэтому вводится ограничение на максимально возможное количество человек,
выбравших один макет.

Расчёт ограничения проводится по следующей формуле:

```js
function вычислить_ограничение(количество_учащихся, число_макетов) {
  let отношение = количество_учащихся / число_макетов;

  return {
    от: Math.floor(отношение),
    до: Math.ceil(отношение),
  };
}
```

Пример:

```js
вычислить_ограничение(14, 3); // {от: 4, до: 5}
вычислить_ограничение(12, 10); // {от: 1, до: 2}
```

Макеты предоставлены компанией [Colorlib](https://colorlib.com) и
распространяются по лицензии
[CC BY 3.0](https://creativecommons.org/licenses/by/3.0), согласно которой
вы можете свободно изменять оригинальные материалы, но должны указать
информацию об авторе в подвале страницы. Все макеты уже содержат такую
информацию, так что вы должны просто оставить её такой, какая она есть.

Все макеты можно открыть для предпросмотра и скачать их исходный код.

## Общие требования

Помимо выполнения основного задания лабораторной работы, от вас требуется
также соблюдать ряд требований, перечисленных далее. 

### Стиль кодирования

Стиль кодирования призван сделать содержимое вашего кода удобочитаемым для 
вас и для других людей. Это относится не только к отступам и переносам строк,
но и к способам использования особенностей HTML, CSS и JavaScript.

Для наиболее простого соблюдения требований к стилю кодирования
установите и настройте следующие расширения для
[Visual Studio Code](https://code.visualstudio.com):

- Расширение [Beautify
](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
будет автоматически форматировать ваш HTML, CSS и JavaScript код:

  <details>
  <summary>Настройка Beautify (нажмите, чтобы раскрыть):</summary>

  1. Ознакомьтесь со [списком правил
  ](https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md).

  2. Добавьте следующие настройки в файл настроек:

      ```json
      {
        "beautify.config": {
          "break_chained_methods": true,
          "extra_liners": ["head", "body", "html", "/html"],
          "indent_size": 2,
          "max_preserve_newlines": 1,
          "newline_between_rules": true,
          "selector_separator_newline": false,
          "space_around_combinator": true,
          "tab_size": 2,
          "wrap_attributes": "aligned-multiple",
          "wrap_line_length": 80
        },
        "editor.formatOnSave": true,
        "html.format.enable": false
      }
      ```

  </details>

- Расширение [HTMLHint
](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
будет проверять ваш HTML код:

  <details>
  <summary>Настройка HTMLHint</summary>

  1. Ознакомьтесь со
  [списком правил](https://github.com/htmlhint/HTMLHint/wiki).

  2. Добавьте следующие настройки в файл настроек:

      ```json
      {
        "htmlhint.options": {
          "alt-require": true,
          "attr-lowercase": true,
          "attr-no-duplication": true,
          "attr-unsafe-chars": true,
          "attr-value-double-quotes": true,
          "doctype-first": true,
          "doctype-html5": true,
          "id-unique": true,
          "inline-script-disabled": true,
          "inline-style-disabled": true,
          "space-tab-mixed-disabled": "space",
          "spec-char-escape": true,
          "src-not-empty": true,
          "style-disabled": true,
          "tagname-lowercase": true,
          "tag-pair": true,
          "title-require": true
        }
      }
      ```

  </details>

- Расширение [stylelint
](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
будет проверять ваш CSS код:

  <details>
  <summary>Настройка stylelint</summary>

  1. Ознакомьтесь со
  [списком правил](https://stylelint.io/user-guide/rules).

  2. Добавьте следующие настройки в файл настроек:

      ```json
      {
        "css.validate": false,
        "stylelint.config": {
          "defaultSeverity": "warning",
          "rules": {
            "at-rule-name-case": "lower",
            "at-rule-name-space-after": "always",
            "at-rule-no-unknown": [true, {
              "severity": "error"
            }],
            "at-rule-no-vendor-prefix": [true, {
              "severity": "error"
            }],
            "at-rule-semicolon-newline-after": "always",
            "at-rule-semicolon-space-before": "never",
            "block-closing-brace-empty-line-before": "never",
            "block-closing-brace-newline-after": "always",
            "block-closing-brace-newline-before": "always",
            "block-no-empty": true,
            "block-opening-brace-newline-after": "always",
            "block-opening-brace-space-before": "always",
            "color-hex-case": "lower",
            "color-hex-length": "short",
            "color-named": "always-where-possible",
            "color-no-invalid-hex": [true, {
              "severity": "error"
            }],
            "comment-no-empty": true,
            "comment-whitespace-inside": "always",
            "comment-empty-line-before": ["always", {
              "except": "first-nested"
            }],
            "custom-property-empty-line-before": ["never", {
              "except": "after-comment"
            }],
            "declaration-block-no-duplicate-properties": [true, {
              "severity": "error"
            }],
            "declaration-block-no-redundant-longhand-properties": [true, {
              "severity": "error"
            }],
            "declaration-block-no-shorthand-property-overrides": [true, {
              "severity": "error"
            }],
            "declaration-block-semicolon-newline-after": "always",
            "declaration-block-semicolon-newline-before": "never-multi-line",
            "declaration-block-semicolon-space-before": "never",
            "declaration-block-trailing-semicolon": "always",
            "declaration-colon-newline-after": "always-multi-line",
            "declaration-colon-space-after": "always-single-line",
            "declaration-colon-space-before": "never",
            "declaration-empty-line-before": "never",
            "declaration-no-important": [true, {
              "severity": "error"
            }],
            "font-family-name-quotes": ["always-where-recommended", {
              "severity": "error"
            }],
            "font-family-no-duplicate-names": [true, {
              "severity": "error"
            }],
            "font-family-no-missing-generic-family-keyword": [true, {
              "severity": "error"
            }],
            "font-weight-notation": "named-where-possible",
            "function-calc-no-unspaced-operator": true,
            "function-comma-newline-after": "always-multi-line",
            "function-comma-newline-before": "never-multi-line",
            "function-comma-space-after": "always-single-line",
            "function-comma-space-before": "never",
            "function-linear-gradient-no-nonstandard-direction": [true, {
              "severity": "error"
            }],
            "function-max-empty-lines": 0,
            "function-name-case": "lower",
            "function-parentheses-newline-inside": "always-multi-line",
            "function-parentheses-space-inside": "never",
            "function-url-no-scheme-relative": [true, {
              "severity": "error"
            }],
            "function-url-quotes": ["always", {
              "severity": "error",
              "except": "empty"
            }],
            "function-whitespace-after": "always",
            "indentation": 2,
            "keyframe-declaration-no-important": [true, {
              "severity": "error"
            }],
            "length-zero-no-unit": true,
            "max-empty-lines": 1,
            "max-line-length": 80,
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-case": "lower",
            "media-feature-name-no-unknown": [true, {
              "severity": "error"
            }],
            "media-feature-name-no-vendor-prefix": [true, {
              "severity": "error"
            }],
            "media-feature-parentheses-space-inside": "never",
            "media-feature-range-operator-space-after": "always",
            "media-feature-range-operator-space-before": "always",
            "media-query-list-comma-newline-after": "always-multi-line",
            "media-query-list-comma-newline-before": "never-multi-line",
            "media-query-list-comma-space-after": "always-single-line",
            "media-query-list-comma-space-before": "never",
            "no-descending-specificity": [true, {
              "severity": "error"
            }],
            "no-duplicate-at-import-rules": [true, {
              "severity": "error"
            }],
            "no-duplicate-selectors": [true, {
              "severity": "error"
            }],
            "no-empty-first-line": true,
            "no-empty-source": true,
            "no-eol-whitespace": true,
            "no-extra-semicolons": true,
            "no-invalid-double-slash-comments": [true, {
              "severity": "error"
            }],
            "no-unknown-animations": [true, {
              "severity": "error"
            }],
            "number-leading-zero": "always",
            "number-max-precision": 2,
            "number-no-trailing-zeros": true,
            "property-case": "lower",
            "property-no-unknown": [true, {
              "severity": "error"
            }],
            "property-no-vendor-prefix": [true, {
              "severity": "error"
            }],
            "rule-empty-line-before": ["always", {
              "except": ["after-single-line-comment", "first-nested"]
            }],
            "selector-attribute-brackets-space-inside": "never",
            "selector-attribute-operator-space-after": "never",
            "selector-attribute-operator-space-before": "never",
            "selector-attribute-quotes": "always",
            "selector-combinator-space-after": "always",
            "selector-combinator-space-before": "always",
            "selector-descendant-combinator-no-non-space": true,
            "selector-list-comma-newline-after": "always-multi-line",
            "selector-list-comma-newline-before": "never-multi-line",
            "selector-list-comma-space-after": "always-single-line",
            "selector-list-comma-space-before": "never",
            "selector-max-attribute": [1, {
              "severity": "error"
            }],
            "selector-max-class": [3, {
              "severity": "error"
            }],
            "selector-max-combinators": [1, {
              "severity": "error"
            }],
            "selector-max-compound-selectors": [2, {
              "severity": "error"
            }],
            "selector-max-empty-lines": 0,
            "selector-max-id": [1, {
              "severity": "error"
            }],
            "selector-max-pseudo-class": [2, {
              "severity": "error"
            }],
            "selector-max-specificity": ["1,3,2", {
              "severity": "error"
            }],
            "selector-max-type": [2, {
              "severity": "error"
            }],
            "selector-max-universal": [1, {
              "severity": "error"
            }],
            "selector-no-qualifying-type": [true, {
              "severity": "error",
              "ignore": ["attribute"]
            }],
            "selector-no-vendor-prefix": [true, {
              "severity": "error"
            }],
            "selector-pseudo-class-case": "lower",
            "selector-pseudo-class-no-unknown": [true, {
              "severity": "error"
            }],
            "selector-pseudo-class-parentheses-space-inside": "never",
            "selector-pseudo-element-case": "lower",
            "selector-pseudo-element-colon-notation": ["double", {
              "severity": "error"
            }],
            "selector-pseudo-element-no-unknown": [true, {
              "severity": "error"
            }],
            "selector-type-case": "lower",
            "selector-type-no-unknown": [true, {
              "severity": "error"
            }],
            "shorthand-property-no-redundant-values": [true, {
              "severity": "error"
            }],
            "string-no-newline": [true, {
              "severity": "error"
            }],
            "string-quotes": "double",
            "time-min-milliseconds": 100,
            "unit-case": "lower",
            "unit-no-unknown": [true, {
              "severity": "error"
            }],
            "value-keyword-case": "lower",
            "value-list-comma-newline-after": "always-multi-line",
            "value-list-comma-newline-before": "never-multi-line",
            "value-list-comma-space-after": "always-single-line",
            "value-list-comma-space-before": "never",
            "value-list-max-empty-lines": 0,
            "value-no-vendor-prefix": [true, {
              "severity": "error"
            }]
          }
        }
      }
      ```

  </details>

- Расширения [ESLint
](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
и [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
будут проверять ваш JavaScript код:

  <details>
  <summary>Настройка ESLint и Vetur</summary>

  1. Ознакомьтесь со списками правил для
  [ESLint](https://eslint.org/docs/rules) и
  [Vetur](https://vuejs.github.io/eslint-plugin-vue/rules).

  2. Добавьте следующие настройки в файл настроек:

      ```json
      {
        "eslint.autoFixOnSave": true,
        "eslint.validate": [
          "javascript",
          "javascriptreact",
          {
            "language": "vue",
            "autoFix": true
          }
        ]
      }
      ```

  3. Убедитесь, что корне проекта у вас присутствует файл `package.json`
  c минимальным содержимым.

  4. Установите необходимые пакеты в проект c помощью следующей команды:

      ```
      npm install --save-dev eslint eslint-plugin-vue
      ```

  5. Создайте в корне проекта файл `.eslintrc.json` со следующим содержимым:

      ```json
      {
        "env": {
          "browser": true,
          "es6": true,
          "node": true
        },
        "parserOptions": {
          "ecmaVersion": 9,
          "sourceType": "module"
        },
        "plugins": ["vue"],
        "extends": [
          "eslint:recommended",
          "plugin:vue/recommended"
        ],
        "rules": {
          "accessor-pairs": "error",
          "array-bracket-newline": ["warn", "consistent"],
          "array-bracket-spacing": ["warn", "never"],
          "array-callback-return": "error",
          "array-element-newline": ["warn", "consistent"],
          "arrow-body-style": "error",
          "arrow-parens": "warn",
          "arrow-spacing": "warn",
          "block-spacing": "warn",
          "brace-style": ["warn", "stroustrup"],
          "camelcase": "warn",
          "capitalized-comments": "warn",
          "class-methods-use-this": "error",
          "comma-dangle": "warn",
          "comma-spacing": "warn",
          "comma-style": "warn",
          "complexity": ["error", 5],
          "computed-property-spacing": "warn",
          "consistent-return": "error",
          "curly": ["warn", "multi-or-nest", "consistent"],
          "default-case": "error",
          "dot-location": ["warn", "property"],
          "dot-notation": ["warn"],
          "eol-last": ["warn", "never"],
          "eqeqeq": ["error", "smart"],
          "func-call-spacing": "warn",
          "function-paren-newline": ["warn", "never"],
          "generator-star-spacing": ["warn", "after"],
          "global-require": "error",
          "implicit-arrow-linebreak": "warn",
          "indent": ["warn", 2],
          "key-spacing": "warn",
          "keyword-spacing": "warn",
          "line-comment-position": "warn",
          "lines-around-comment": ["warn", {
            "beforeLineComment": true,
            "allowBlockStart": true,
            "allowClassStart": true,
            "allowObjectStart": true,
            "allowArrayStart": true
          }],
          "lines-between-class-members": "warn",
          "max-classes-per-file": ["error", 1],
          "max-depth": "error",
          "max-len": "warn",
          "max-params": "error",
          "max-statements-per-line": "warn",
          "multiline-ternary": ["warn", "always-multiline"],
          "new-cap": "error",
          "new-parens": "warn",
          "newline-per-chained-call": ["warn", {
            "ignoreChainWithDepth": 1
          }],
          "no-alert": "error",
          "no-array-constructor": "error",
          "no-bitwise": "error",
          "no-buffer-constructor": "error",
          "no-console": "off",
          "no-else-return": "warn",
          "no-empty-function": "error",
          "no-eval": "error",
          "no-extra-bind": "error",
          "no-extra-parens": "warn",
          "no-floating-decimal": "warn",
          "no-implicit-coercion": "error",
          "no-implicit-globals": "error",
          "no-invalid-this": "error",
          "no-labels": "error",
          "no-lone-blocks": "error",
          "no-lonely-if": "error",
          "no-loop-func": "error",
          "no-magic-numbers": "error",
          "no-mixed-requires": ["warn", {
            "grouping": true,
            "allowCall": false
          }],
          "no-multi-assign": "error",
          "no-multi-spaces": "warn",
          "no-multi-str": "error",
          "no-multiple-empty-lines": ["warn", {
            "max": 2,
            "maxBOF": 0,
            "maxEOF": 0
          }],
          "no-negated-condition": "error",
          "no-nested-ternary": "error",
          "no-new": "error",
          "no-new-func": "error",
          "no-new-object": "error",
          "no-new-require": "error",
          "no-new-wrappers": "error",
          "no-param-reassign": "error",
          "no-path-concat": "error",
          "no-process-env": "warn",
          "no-process-exit": "error",
          "no-return-assign": "error",
          "no-return-await": "error",
          "no-script-url": "error",
          "no-self-compare": "error",
          "no-sequences": "error",
          "no-shadow-restricted-names": "error",
          "no-sync": ["error", {
            "allowAtRootLevel": true
          }],
          "no-template-curly-in-string": "error",
          "no-throw-literal": "error",
          "no-trailing-spaces": "warn",
          "no-undef-init": "warn",
          "no-underscore-dangle": "error",
          "no-unmodified-loop-condition": "error",
          "no-unneeded-ternary": "error",
          "no-unused-expressions": "error",
          "no-use-before-define": "error",
          "no-useless-call": "error",
          "no-useless-catch": "error",
          "no-useless-computed-key": "error",
          "no-useless-concat": "warn",
          "no-useless-constructor": "warn",
          "no-useless-rename": "error",
          "no-useless-return": "warn",
          "no-void": "error",
          "no-whitespace-before-property": "warn",
          "no-with": "error",
          "object-curly-newline": "warn",
          "object-curly-spacing": "warn",
          "object-shorthand": "error",
          "one-var": ["error", "never"],
          "operator-assignment": "error",
          "operator-linebreak": ["warn", "before"],
          "prefer-arrow-callback": "error",
          "prefer-const": "error",
          "prefer-destructuring": "warn",
          "prefer-named-capture-group": "warn",
          "prefer-numeric-literals": "error",
          "prefer-object-spread": "error",
          "prefer-promise-reject-errors": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
          "prefer-template": "error",
          "quote-props": ["warn", "as-needed"],
          "require-await": "error",
          "rest-spread-spacing": "warn",
          "semi": "error",
          "semi-spacing": "warn",
          "semi-style": "warn",
          "space-before-blocks": "warn",
          "space-before-function-paren": ["warn", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
          }],
          "space-in-parens": "warn",
          "space-infix-ops": "warn",
          "space-unary-ops": "warn",
          "spaced-comment": "warn",
          "switch-colon-spacing": "warn",
          "symbol-description": "error",
          "template-curly-spacing": "warn",
          "template-tag-spacing": "warn",
          "vars-on-top": "warn",
          "wrap-iife": ["warn", "inside"],
          "yield-star-spacing": ["warn", "after"],
          "yoda": "warn"
        }
      }
      ```

  </details>

Результаты работы расширений вы можете посмотреть в панели `Проблемы`,
которую можно открыть через меню `Вид → Проблемы`. На этой панели будут
отображены сообщения об ошибках и предупреждения для всех открытых в данный
момент файлов. Кроме того, в левом нижнем углу редактора вы сможете увидеть
счётчики этих сообщений. 

Ваша задача - добиться результата без единой ошибки или предупреждения.
Помимо этого, выполняйте следующие рекомендации:

1. Называйте ваши файлы именами, по которым можно определить их назначение,
например:

    - Правильно: `icon.png`, `background.jpg`, `theme.css`, `helpers.js`.
    - Неправильно: `b6c07eee0c424eb0.jpg`, `dcde7632138481f5c.png`.

2. Указывайте кодировку у всех файлов HTML и CSS.

3. Указывайте заголовок, иконку, имя автора, описание и список ключевых слов
у всех страниц веб-сайта.

4. Используйте семантические элементы в тех местах, где они подходят по смыслу.

5. Для стилизации элементов используйте преимущественно
[селекторы класса](https://webref.ru/css/selector/class).

6. Проверяйте ваш код в валидаторах [HTML](https://validator.w3.org)
и [CSS](http://jigsaw.w3.org/css-validator).

7. При использовании Node.js указывайте описание, лицензию, информацию об
авторе и репозитории, сценарий `start` и зависимости проекта
в файле `package.json`.

::: tip На заметку
Файл [настроек](https://code.visualstudio.com/docs/getstarted/settings)
`settings.json` можно открыть с помощью комбинации клавиш `CTRL + ,`
либо через меню редактора `Файл → Параметры → Параметры → {}`.
:::

::: tip На заметку
Части сообщений об ошибках и предупреждениях можно избежать, если регулярно 
форматировать код в открытом файле с помощью комбинации клавиш
`SHIFT + ALT + F`, либо через контекстное меню `Форматировать документ`.
:::

### Хранение кода

Код ваших лабораторных работ должен храниться в виде _репозитория_ на
[GitHub](https://github.com). Для работы с этим сайтом вам надо будет пройти
регистрацию. После регистрации в настройках профиля в поле **Name** укажите
ваши Ф.И.О.

Для наиболее удобной работы с вашими репозиториями установите приложение
[GitHub Desktop](https://desktop.github.com).

Репозиторий для каждой лабораторной работы будет создаваться автоматически из
шаблона. Для этого нужно перейти по ссылке, которую даст вам преподаватель.
Ссылка будет уникальной для каждой лабораторной работы.

После этого вам надо будет _клонировать_ репозиторий с сайта на локальный
компьютер. Для этого в программе [GitHub Desktop](https://desktop.github.com)
через меню `File → Clone repository...` откройте диалоговое окно
клонирования и в этом окне выберите из списка только что созданный репозиторий.

При создании _коммита_ в ваш репозиторий **указывайте понятное описание
изменений**, которые он приносит. Также вместо редких, но больших коммитов с
большим описанием изменений лучше делать множество мелких (_атомарных_)
коммитов.

## Регламент сдачи

Процесс сдачи лабораторных работ ведётся через электронную почту:

1. **Присылаете письмо** на почту
<a href='mailto:Vladislav.Lyuminarskiy@gmail.com
?subject=Web-программирование,%20группа%203-19-1од,%20Иванов%20Иван%20Иванович'
target='_blank'>Vladislav.Lyuminarskiy@gmail.com</a> в рамках переписки:

    - **Новое письмо**, если вы отправляете письмо в первый раз.
    - **Ответ на последнее письмо**, если вы уже ведёте переписку, для
    сохранения цепочки писем.

2. **В теме письма** указываете название курса, группу и Ф.И.О., например:

    `Web-программирование, группа 3-19-1од, Иванов Иван Иванович`.

3. **В самом письме** прописываете ваши вопросы и указываете ссылку на
[GitHub](https://github.com) репозиторий с кодом вашей работы.

4. В течение `1-2 рабочих дней` получаете **письмо с результатами проверки**
вашей работы:

    - **Список замечаний**, если в работе были найдены ошибки.
    - **Предложение подготовить отчёт**, если замечания к работе были вами
    исправлены или отсутствуют.

5. **После подготовки отчёта** отправляете преподавателю письмо со ссылкой на
[Google Docs](https://www.google.ru/intl/ru/docs/about) на ваш отчёт в
электронном виде и приносите ему на подпись физическую копию вашего отчёта.

В виде диаграммы:

![Процесс сдачи лабораторных работ](./assets/regulations.svg)

## Отчётность

Отчёт по лабораторной работе должен выполняться с помощью
[Google Docs](https://www.google.ru/intl/ru/docs/about). К файлу отчёта должен
быть предоставлен [доступ по ссылке
](https://support.google.com/drive/answer/2494822?visit_id=636848676904526147-3982144325&p=link_sharing_on&hl=ru&rd=1#link_sharing).

Состав отчёта по лабораторной работе:

1. `Титульный лист` - на основе [шаблона
](https://docs.google.com/document/d/13SaM4oJe0GyCfkPpq9uInhzCkGSV096PObiKUvSSJ6o/edit?usp=sharing).
В шаблоне необходимо заполнить следующие поля:

    1. Номер лабораторной работы.
    2. Тема лабораторной работы.
    3. Номер группы студента.
    4. Подпись и Ф.И.О. студента.
    5. Дата подготовки отчёта студентом.

2. `Задание` - информацию брать со страницы лабораторной работы:

    1. Общая информация.
    2. Изображение макета и его описание.
    3. Задачи.
    4. Дополнительные требования.

3. `Исходный код`:

    1. Список всех каталогов и файлов веб-сайта с описанием, например:

        ```
        Список каталогов и файлов веб-сайта:
    
        - assets - каталог медиафайлов:
          - icon.png - иконка веб-сайта.
          - ...
        - styles - каталог с файлами стилей:
          - main.css - главный файл стилей.
          - ...
        - index.html - главная страница.
        - ...
        ```

    2. Содержимое текстовых файлов. Допускается возможность размещать текст
    на одной странице в нескольких стобцах.

4. `Веб-сайт` - полноразмерные снимки экранов всех страниц веб-сайта в двух
видах: для мобильных устройств и компьютеров.

При оформлении отчёта соблюдайте правила русского языка. Страницы отчёта
пронумеруйте. Ко всем изображениям и исходным кодам в отчёте добавьте
поясняющие подписи, например:

- _Рис. 3 - главная страница (вид для мобильных устройств)_,
- _Исх. код 1 - содержимое файла index.html_.

<disqus-comments
  page-uuid="d4d7fa6d-6685-4d1e-99fa-ed6e6c857d43"
  page-title="Лабораторные работы"/>