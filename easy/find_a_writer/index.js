// https://www.codeeval.com/open_challenges/97/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split('|');
  var keys = lineSplit[1].trim().split(' ').map(Number);
  console.log(find_a_writer(lineSplit[0], keys));
});

function find_a_writer(str, keys) {
  return keys.reduce(function(prev, key) {
    return prev + str[key - 1];
  }, '');
}

