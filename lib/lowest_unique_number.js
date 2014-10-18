// https://www.codeeval.com/open_challenges/103/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(lowest_unique_number(line.split(' ').map(Number)));
});

function lowest_unique_number(array) {
    var obj = {};
    array.forEach(function(number, index) {
        if (typeof obj[number] === 'undefined') {
            obj[number] = index;
        } else if (typeof obj[number] === 'number') {
            obj[number] = false;
        }
    });
    var result = 0;
    var min = 10;
    Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] === 'number' && key < min) {
            min = key;
            result = obj[key] + 1;
        }
    });
    return result;
}

