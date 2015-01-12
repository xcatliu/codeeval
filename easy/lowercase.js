// https://www.codeeval.com/open_challenges/20/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(lowercase(line));
});

function lowercase(sentence) {
  return sentence.toLowerCase();
}

