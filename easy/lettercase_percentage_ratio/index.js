// https://www.codeeval.com/open_challenges/147/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(lettercase_percentage_ratio(line));
});

function lettercase_percentage_ratio(line) {
  return line;
}

