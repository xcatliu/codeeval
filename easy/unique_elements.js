// https://www.codeeval.com/open_challenges/29/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(unique_elements(line.split(',')).join(','));
});

function unique_elements(array) {
  var result = [];
  var obj = {};
  array.forEach(function(item) {
    if (!obj[item]) {
      obj[item] = true;
      result.push(item);
    }
  });
  return result;
}

