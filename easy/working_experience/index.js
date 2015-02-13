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
  return working.map(function(w) {
    return [dateToNumber(w[0]), dateToNumber(w[1])];
  });
}

function dateToNumber(d) {
  return d.getYear() * 12 + d.getMonth();
}