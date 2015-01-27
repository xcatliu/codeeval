// https://www.codeeval.com/open_challenges/139/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var lineSplit = line.split('; ');
  var working = lineSplit.map(function(experience) {
    return experience.split('-').map(Date);
  });
  console.log(working_experience(working));
});

function working_experience(working) {
  return working;
}

