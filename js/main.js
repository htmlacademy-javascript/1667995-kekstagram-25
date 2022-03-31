// 1
function getIntNumber(min, max) {
  if (max<=min) {
    alert('Второе число должно быть больше!')
  } else {
  return Math.round(Math.random() * (max - min + 1)) + min;
  }
}
console.log(getIntNumber(2, 7));

// стырено с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// честно говоря, не знаю, как можно додуматься самой до вот этого - (max - min + 1)) + min;

// 2
function checkStringLength(string, length) {
  let n = string.length;
  if (n<=length) {
    return true;
  }
  return false;
}
checkStringLength('hello there', 5);
