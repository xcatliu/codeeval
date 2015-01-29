// https://www.codeeval.com/open_challenges/104/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(word_to_digit(line.split(';')));
});

function word_to_digit(array) {
  var obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  return array.map(function(string) {
    return obj[string];
  }).join('');
}

