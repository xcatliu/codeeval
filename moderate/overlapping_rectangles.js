// https://www.codeeval.com/open_challenges/70/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var rectanglesA = line.split(',').slice(0, 4).map(function(item) {return Number(item);});
  var rectanglesB = line.split(',').slice(-4).map(function(item) {return Number(item);});
  console.log(overlapping_rectangles(rectanglesA, rectanglesB) ? 'True': 'False');
});

function overlapping_rectangles(rectanglesA, rectanglesB) {
  return hasCommonSection([ rectanglesA[0], rectanglesA[2] ], [ rectanglesB[0], rectanglesB[2] ]) &&
      hasCommonSection([ rectanglesA[3], rectanglesA[1] ], [ rectanglesB[3], rectanglesB[1] ]);
}

function hasCommonSection(sectionA, sectionB) {
  return sectionA[1] >= sectionB[0] && sectionB[1] >= sectionA[0];
}

