// https://www.codeeval.com/open_challenges/139/

var year = 1000 * 3600 * 24 * 365;

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split('; ');
  var working = lineSplit.map(function(experience) {
    return experience.split('-').map(function(dateString) {
      return new Date(Date.parse(dateString));
    });
  });
  console.log(working_experience(working));
});

function working_experience(working) {
  var numberPairs = working.map(function(w) {
    return [dateToNumber(w[0]), dateToNumber(w[1])];
  }).sort(function(a, b) {
    return (a[0] - b[0]);
  });
  var sum = 0;
  var start = 0;
  var end = 0;
  numberPairs.forEach(function(pair, index) {
    if (index === 0) {
      start = pair[0];
      end = pair[1];
      return;
    }
    if (pair[0] > end) {
      sum += end - start + 1;
      start = pair[0];
      end = pair[1];
      return;
    }
    if (pair[1] < end) {
      return;
    }
    end = pair[1];
  });
  sum += end - start + 1;
  return Math.floor(sum / 12);
}

function dateToNumber(d) {
  return d.getYear() * 12 + d.getMonth();
}