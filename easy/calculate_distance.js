// https://www.codeeval.com/open_challenges/99/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var execLine = /\((.*?)\) \((.*?)\)/g.exec(line);
    var point1 = execLine[1].split(', ').map(Number);
    var point2 = execLine[2].split(', ').map(Number);
    console.log(calculate_distance(point1, point2));
});

function calculate_distance(point1, point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
}

