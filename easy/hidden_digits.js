// https://www.codeeval.com/open_challenges/122/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(hidden_digits(line));
});

function hidden_digits(string) {
  var result = Array.prototype.reduce.call(string, function(prev, value) {
    return prev + getDigit(value);
  }, '');
  if (result === '') {
    return 'NONE';
  }
  return result;
}

function getDigit(word) {
  if (!isNaN(parseInt(word))) {
    return word;
  }
  var result = word.charCodeAt(0) - 97;
  if (result < 0 || result > 9) {
    return '';
  }
  return result;
}

