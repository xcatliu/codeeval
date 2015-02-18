// https://www.codeeval.com/open_challenges/140/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = data_recovery.split(';');
  var sentence = lineSplit[0];
  var numbers = lineSplit[1].split(' ');
  console.log(data_recovery(sentence, numbers));
});

function data_recovery(sentence, numbers) {
  var words = sentence.split(' ');
  var newWords = [];
}