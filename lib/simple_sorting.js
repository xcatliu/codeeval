// https://www.codeeval.com/open_challenges/91/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(' ');
    console.log(simple_sorting(lineSplit).join(' '));
});

function simple_sorting(array) {
    return array.sort(function(a, b) {
        return Number(a) - Number(b);
    });
}

