// https://www.codeeval.com/open_challenges/89/

var triangle = [];

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    triangle.push(line.split(' '));
});

console.log(pass_triangle(triangle));

function pass_triangle(triangle) {
    triangle.forEach(function(row, row_index) {
        if (row_index === 0) {
            return;
        }
        row.forEach(function(item, col_index) {
            triangle[row_index][col_index] = Math.max(Number(item) + parseItem(triangle[row_index - 1][col_index - 1]), Number(item) + parseItem(triangle[row_index - 1][col_index]));
        });
    });
    return getMax(triangle[triangle.length - 1]);
}

function parseItem(item) {
    if (typeof item === 'undefined') {
        return 0;
    }
    return Number(item);
}

function getMax(array) {
    return array.reduce(function(prev, item) {
        return Math.max(prev, item);
    }, array[0]);
}

