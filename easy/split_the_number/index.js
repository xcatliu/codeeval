// https://www.codeeval.com/open_challenges/131/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split(' ');
  var number = lineSplit[0];
  var pattern = lineSplit[1];
  console.log(split_the_number(number, pattern));
});

function split_the_number(number, pattern) {
  var i = 0;
  var j = 0;
  var replacedPattern = '';
  for (; i < pattern.length; i++) {
    if (pattern[i] === '-' || pattern[i] === '+') {
      replacedPattern += pattern[i];
    } else {
      replacedPattern += number[j];
      j++;
    }
  }
  var replacedPatternSplit;
  if (replacedPattern.indexOf('-') !== -1) {
    replacedPatternSplit = replacedPattern.split('-');
    return Number(replacedPatternSplit[0]) - Number(replacedPatternSplit[1]);
  } else if (replacedPattern.indexOf('+') !== -1) {
    replacedPatternSplit = replacedPattern.split('+');
    return Number(replacedPatternSplit[0]) + Number(replacedPatternSplit[1]);
  }
}

