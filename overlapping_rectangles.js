// https://www.codeeval.com/open_challenges/70/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === "") {
        return;
    }
    var lineSplitResult = line.split(',');
    var rectanglesA = lineSplitResult.splice(0, 4).map(function(item) {return Number(item);});
    var rectanglesB = lineSplitResult.map(function(item) {return Number(item);});
    console.log(capitaliseFirstLetter(isOverlapping(rectanglesA, rectanglesB).toString()));

    function isOverlapping(rectanglesA, rectanglesB) {
        return hasCommonSection([ rectanglesA[0], rectanglesA[2] ], [ rectanglesB[0], rectanglesB[2] ]) &&
                hasCommonSection([ rectanglesA[1], rectanglesA[3] ], [ rectanglesB[1], rectanglesB[3] ]);
    }

    function hasCommonSection(sectionA, sectionB) {
        sectionA.sort(function(a, b) {return a > b;});
        sectionB.sort(function(a, b) {return a > b});
        return sectionA[1] >= sectionB[0] && sectionA[0] <= sectionB[1];
    }

    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

});

