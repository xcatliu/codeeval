// https://www.codeeval.com/open_challenges/93/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(captilize_words(line));
});

function captilize_words(sentence) {
  return sentence.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

