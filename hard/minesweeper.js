// https://www.codeeval.com/open_challenges/79/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(';');
    var rowsColumns = lineSplit[0].split(',');
    var rows = rowsColumns[0];
    var columns = rowsColumns[1];
    var matrix = getMatrix(lineSplit[1], rows, columns);
    console.log(minesweeper(matrix).reduce(function(prev, column) {
        return prev += column.join('');
    }, ''));
});

function getMatrix(string, rows, columns) {
    return Array.prototype.reduce.call(string, function(prev, letter, index) {
        var x = Math.floor(index / columns);
        var y = index % columns;
        if (!prev[x]) {
            prev[x] = [];
        }
        prev[x][y] = letter;
        return prev;
    }, []);
}

function minesweeper(matrix) {
    matrix.forEach(function (column, x) {
        column.forEach(function (item, y) {
            if (item === '*') {
                return;
            }
            if (item === '.') {
                matrix[x][y] = 0;
            }
            matrix[x][y] += getAdjacentNum(matrix, x, y);
        });
    });
    return matrix;
}

function getAdjacentNum(matrix, x, y) {
    return [
        [ x - 1, y - 1 ],
        [ x - 1, y ],
        [ x - 1, y + 1 ],
        [ x, y - 1 ],
        [ x, y + 1 ],
        [ x + 1, y - 1 ],
        [ x + 1, y ],
        [ x + 1, y + 1 ]
    ].reduce(function(prev, xy) {
        if (typeof matrix[xy[0]] === 'undefined') {
            return prev;
        }
        if (matrix[xy[0]][xy[1]] === '*') {
            return prev + 1;
        }
        return prev;
    }, 0);
}

