typeof undefined; // "undefined"

typeof 0; // "number"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof {}; // "object"

typeof null; // "object" (1)

typeof function(){}; // "function" (2)

/*
1. Это официально признанная ошибка в языке, которая сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.

2. Функции не являются отдельным базовым типом в JavaScript, а подвидом объектов. Но typeof выделяет функции отдельно, возвращая для них "function". На практике это весьма удобно, так как позволяет легко определить функцию.
*/