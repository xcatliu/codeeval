// https://www.codeeval.com/open_challenges/1/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(' ');
    var f = lineSplit[0];
    var b = lineSplit[1];
    var length = lineSplit[2];
    console.log(fizz_buzz(f, b, length));
});

function fizz_buzz(f, b, length) {
    return createArray(length, '').map(function(item, index) {
        if ((index + 1) % f === 0) {
            item += 'F';
        }
        if ((index + 1) % b === 0) {
            item += 'B';
        }
        if (item === '') {
            item = index + 1;
        }
        return item;
    }).join(' ');
}

function createArray(length, init) {
    var i = 0;
    var result = [];
    for (i = 0; i < length; i++) {
        result[i] = init;
    }
    return result;
}

