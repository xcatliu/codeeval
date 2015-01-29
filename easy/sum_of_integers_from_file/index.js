// https://www.codeeval.com/open_challenges/24/

var numbers = [];

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  numbers.push(Number(line));
});

console.log(sum_of_integers_from_file(numbers));

function sum_of_integers_from_file(numbers) {
  return numbers.reduce(function(prev, item) {
    return prev + item
  }, 0);
}

