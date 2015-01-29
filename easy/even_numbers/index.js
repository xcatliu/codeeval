// https://www.codeeval.com/open_challenges/100/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var number = Number(line);
  console.log(even_numbers(number) ? 1 : 0);
});

function even_numbers(number) {
  return (number % 2 === 0);
}

