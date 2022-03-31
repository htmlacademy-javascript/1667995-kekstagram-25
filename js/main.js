
// 2) Функция для проверки максимальной длины строки. Будет использоваться для проверки
// длины введённого комментария, но должна быть универсальна.
// Пример использования функции:

// имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

// 1
function getIntNumber(min, max) {
  if (max<=min) {
    alert('Второе число должно быть больше!')
  } else {
  return Math.round(Math.random() * (max - min + 1)) + min;
  }
}
console.log(getIntNumber(2, 7));

// 2
function checkStringLength(string, length) {

}

checkStringLength('hello there', 5);
