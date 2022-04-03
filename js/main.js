// 1.1
function getIntNumber(min, max) {
  if (max<min || min<0) {
    return null;
  } else {
  return Math.round(Math.random() * (max - min)) + min;
  }
}
console.log(getIntNumber(10, 10));

// 1.2, функция с переменой мест
function getIntNumber(min, max) {
  if (min<0) {
    return null;
  } else if (max<min)  {
    return Math.round(Math.random() * (min - max)) + max;
  } else {
  return Math.round(Math.random() * (max - min)) + min;
  }
}
console.log(getIntNumber(10, 10));

// 1.3, функция для получения случайного числа с дробной частью с n знаков после запятой
function getIntNumber(min, max) {
  let n = 5;
  // непонятно, как задать n, поэтому из головы
  if (max<min || min<0) {
    return null;
  } else {
  return (Math.random() * (max - min) + min).toFixed(n);
  }
}
console.log(getIntNumber(10, 30));

// стырено с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// честно говоря, не знаю, как можно додуматься самой до вот этого - (max - min + 1)) + min;

// 2
function checkStringLength(string, length) {
  let n = string.length;
  return n<=length
}
checkStringLength('hello there', 5);
