// https://www.codeeval.com/open_challenges/22/

var fibonacci = [1, 1];

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(fibonacci_series(Number(line)));
});

function fibonacci_series(n) {
  if (n === 0) {
    return 0;
  }
  if (fibonacci[n - 1]) {
    return fibonacci[n - 1];
  }
  var result = fibonacci_series(n - 2) + fibonacci_series(n - 1);
  fibonacci[n - 1] = result;
  return result;
}

