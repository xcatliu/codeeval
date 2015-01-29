// https://www.codeeval.com/open_challenges/107/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(shortest_repetition(line));
});

function shortest_repetition(string) {
  var length = string.length;
  var i = 1;
  while (i <= length) {
    if (length % i !== 0) {
      i++;
      continue;
    }
    if (isRepetition(string, i)) {
      return i;
    }
    i++;
  }
}

function isRepetition(string, i) {
  var splitResult = splitByCount(string, i);
  splitResult.sort();
  return splitResult[0] === splitResult[splitResult.length - 1];
}

function splitByCount(string, i) {
  var result = [];
  var j = 0;
  while (j < string.length) {
    result.push(string.slice(j, j + i));
    j = j + i;
  }
  return result;
}

