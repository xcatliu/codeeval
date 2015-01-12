// https://www.codeeval.com/open_challenges/18/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split(',');
  var x = Number(lineSplit[0]);
  var n = Number(lineSplit[1]);
  console.log(multiples_of_a_number(x, n));
});

function multiples_of_a_number(x, n) {
  return Math.ceil(x / n) * n;
}

