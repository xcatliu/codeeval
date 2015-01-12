// https://www.codeeval.com/open_challenges/83/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(beautiful_strings(line));
});

function beautiful_strings(line) {
  var lowerCaseString = line.toLowerCase();
  var abc = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce(function(prev, item) {
    prev[item] = 0;
    return prev;
  }, {});
  lowerCaseString.split('').forEach(function(letter) {
    if (typeof abc[letter] !== 'undefined') {
      abc[letter] += 1;
    }
  });
  return Object.keys(abc).map(function(letter) {
    return abc[letter];
  }).sort(function(a, b) {
    return a - b;
  }).reduce(function(prev, number, index) {
    return prev + number * (index + 1);
  }, 0);
}

