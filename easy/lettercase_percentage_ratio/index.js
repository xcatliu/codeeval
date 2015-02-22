// https://www.codeeval.com/open_challenges/147/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var result = lettercase_percentage_ratio(line);
  console.log('lowercase: ' + result.lowercase.toFixed(2) + ' uppercase: ' + result.uppercase.toFixed(2));
});

function lettercase_percentage_ratio(line) {
  var lowerSum = 0;
  line.split('').forEach(function(letter) {
    if (letter >= 'a' && letter <= 'z') {
      lowerSum++;
    }
  });
  var lowercase = lowerSum / line.length;
  var uppercase = 1 - lowercase;
  return {
    lowercase: lowercase,
    uppercase: uppercase
  };
}
