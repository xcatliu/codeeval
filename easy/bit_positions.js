// https://www.codeeval.com/open_challenges/19/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(',');
    var n = Number(lineSplit[0]);
    var p1 = Number(lineSplit[1]);
    var p2 = Number(lineSplit[2]);
    console.log(bit_positions(n, p1, p2) ? 'true': 'false');
});

function bit_positions(n, p1, p2) {
    var binary = n.toString(2);
    return binary.substr(0 - p1, 1) === binary.substr(0 - p2, 1);
}

