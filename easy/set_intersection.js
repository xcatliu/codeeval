// https://www.codeeval.com/open_challenges/30/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(';');
    var array1 = lineSplit[0].split(',').map(Number);
    var array2 = lineSplit[1].split(',').map(Number);
    console.log(set_intersection(array1, array2).join(','));
});

function set_intersection(array1, array2) {
    var result = [];
    var i = array1.length - 1;
    var j = array2.length - 1;
    while (i >= 0 && j >= 0) {
        if (array1[i] < array2[j]) {
            j -= 1;
        } else if (array1[i] === array2[j]) {
            result.unshift(array1[i]);
            i -= 1;
            j -= 1;
        } else {
            i -= 1;
        }
    }
    return result;
}

