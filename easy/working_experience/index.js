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
  return working.map(function(one) {
    return [one[0], one[1]];
  });
}

