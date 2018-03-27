// Цикл, длительностью 3000 мс.
let start = new Date().getTime(), end;
while ((end = new Date().getTime() - start) < 3000);

// Добавляем на страницу параграф с указанием времени загрузки скрипта.
let message = document.createElement('p');
message.style.color = 'red';
message.innerText = 'Скрипт загрузился за ' + end / 1000 + ' с';

document.body.appendChild(message);