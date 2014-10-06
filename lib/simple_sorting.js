// https://www.codeeval.com/open_challenges/91/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(' ');
    var array = lineSplit.map(Number)
    console.log(simple_sorting(array).join(' '));
});

function simple_sorting(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
}

