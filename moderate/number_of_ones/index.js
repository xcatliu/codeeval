// https://www.codeeval.com/open_challenges/16/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(number_of_ones(Number(line)));
});

function number_of_ones(num) {
  return Array.prototype.filter.call(num.toString(2), function(dig) {
    return dig === '1';
  }).length;
}

