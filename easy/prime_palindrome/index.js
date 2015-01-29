// https://www.codeeval.com/open_challenges/3/

console.log(prime_palindrome(1000));

function prime_palindrome(number) {
  var i = number;
  var result;
  for (; i > 0; i--) {
    if (isPrime(i) && isPalindrome(i)) {
      result = i;
      break;
    }
  }
  return result;
}

function isPrime(number) {
  var numberSqrt = Math.sqrt(number);
  var i = 2;
  var result = true;
  for (; i < numberSqrt; i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

function isPalindrome(number) {
  var numberString = number.toString();
  var i = 0;
  var result = true;
  for (; i < numberString.length / 2; i++) {
    if (numberString[i] !== numberString[numberString.length - i - 1]) {
      result = false;
    }
  }
  return result;
}

