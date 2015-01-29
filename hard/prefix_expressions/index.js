// https://www.codeeval.com/open_challenges/7/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split(' ').map(function(item) {
    if (isNaN(Number(item))) {
      return item;
    }
    return Number(item);
  });
  console.log(prefix_expressions(lineSplit));
});

function prefix_expressions(array) {
  var i = 0;
  return getValue();
  function getValue() {
    if (typeof array[i] === 'number') {
      i += 1;
      return array[i - 1];
    }
    if (array[i] === '+') {
      i += 1;
      return getValue() + getValue();
    }
    if (array[i] === '-') {
      i += 1;
      return getValue() - getValue();
    }
    if (array[i] === '*') {
      i += 1;
      return getValue() * getValue();
    }
    if (array[i] === '/') {
      i += 1;
      return getValue() / getValue();
    }
  }
}

