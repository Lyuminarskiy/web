// Пример с var.
var number1 = 5;

if (true) {
  var number1 = 10;

  alert(number1); // 10 (внутри блока)
}

alert(number1); // 10 (снаружи блока то же самое)

// Пример с let.
let number2 = 5;

if (true) {
  let number2 = 10;

  alert(number2); // 10 (внутри блока)
}

alert(number2); // 5 (снаружи блока осталось старое значение)