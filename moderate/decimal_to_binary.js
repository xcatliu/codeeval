// https://www.codeeval.com/open_challenges/27/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var number = Number(line);
  console.log(decimal_to_binary(number));
});

function decimal_to_binary(number) {
  return number.toString(2);
}

