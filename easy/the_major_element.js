// https://www.codeeval.com/open_challenges/132/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var element = the_major_element(line.split(','));
  if (typeof element === 'undefined') {
    console.log('None');
  } else {
    console.log(element);
  }
});

function the_major_element(array) {
  var hash = [];
  var i = 0;
  for (; i <= 100; i++) {
    hash[i] = 0;
  }
  array.forEach(function(item) {
    hash[item]++;
  });
  var length = array.length;
  var result;
  hash.forEach(function(item, index) {
    if (item > length / 2) {
      result = index;
    }
  });
  return result;
}

