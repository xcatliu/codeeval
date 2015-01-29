// https://www.codeeval.com/open_challenges/14/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(string_permutations(line).join(','));
});

function string_permutations(string) {
  var array = string.split('').sort(function(a, b) {
    return a < b ? -1 : 1;
  });
  return getPermutations(array);
  function getPermutations(array) {
    if (array.length === 1) {
      return array;
    }
    return array.reduce(function(prev, item, index) {
      var rest = array.slice(0, index).concat(array.slice(index + 1));
      return prev.concat(getPermutations(rest).map(function(subItem) {
        return item + subItem;
      }));
    }, []);
  }
}

