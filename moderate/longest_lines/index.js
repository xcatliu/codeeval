// https://www.codeeval.com/open_challenges/2/

var lines = [];

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  lines.push(line);
});

var number = Number(lines.shift());

console.log(longest_lines(number, lines).join('\n'));

function longest_lines(number, lines) {
  return lines.sort(function(a, b) {
    return b.length - a.length;
  }).splice(0, number);
}

