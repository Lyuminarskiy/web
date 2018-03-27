var start = new Date().getTime();
var end;

// Цикл с длительностью в 1 секунду.
while ((end = new Date().getTime() - start) < 1000);

// Создать параграф с указанием времени загрузки скрипта.
var message = document.createElement('p');
message.style.color = 'green';
message.innerText = 'Скрипт выполнился за ' + end / 1000 + ' с';

// Добавить параграф на страницу.
document.body.appendChild(message);