// https://www.codeeval.com/open_challenges/31/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(',');
    var S = lineSplit[0];
    var t = lineSplit[1];
    console.log(rightmost_char(S, t));
});

function rightmost_char(S, t) {
    return S.lastIndexOf(t);
}

