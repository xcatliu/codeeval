// https://www.codeeval.com/open_challenges/140/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split(';');
  var sentence = lineSplit[0];
  var numbers = lineSplit[1].split(' ');
  console.log(data_recovery(sentence, numbers));
});

function data_recovery(sentence, numbers) {
  var words = sentence.split(' ');
  var newWords = [];
  numbers.forEach(function(number, index) {
    newWords[number - 1] = words[index];
  });
  var i;
  var l = words.length;
  for (i = 0; i < l; i++) {
    if (typeof newWords[i] === 'undefined') {
      newWords[i] = words[l - 1];
      break;
    }
  }
  return newWords.join(' ');
}