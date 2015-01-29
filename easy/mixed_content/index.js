// https://www.codeeval.com/open_challenges/115/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split(',');
  console.log(mixed_content(lineSplit));
});

function mixed_content(array) {
  var numberArray = [];
  var stringArray = [];
  array.forEach(function(item) {
    if (isNaN(Number(item))) {
      stringArray.push(item);
    } else {
      numberArray.push(item);
    }
  });
  if (stringArray.length === 0 || numberArray.length === 0) {
    return array.join(',')
  }
  return stringArray.join(',') + '|' + numberArray.join(',');
}

