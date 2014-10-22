// https://www.codeeval.com/open_challenges/87/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    initMatrixOnce(256);
    var queryBoardResult = query_board(line);
    if (queryBoardResult) {
        console.log(queryBoardResult);
    }
});

var _matrix;
var once = false;

function initMatrixOnce(n) {
    if (once) {
        return;
    }
    once = true;
    var i, j;
    _matrix = [];
    for (i = 0; i < n; i++) {
        _matrix[i] = [];
        for (j = 0; j < n; j++) {
            _matrix[i][j] = 0;
        }
    }
}

function query_board(string) {
    var stringSplit = string.split(' ');
    var command = stringSplit[0];
    var args = stringSplit.slice(1);
    switch (command) {
        case 'SetRow':
            return setRow.apply(this, args);
            break;
        case 'SetCol':
            return setCol.apply(this, args);
            break;
        case 'QueryRow':
            return queryRow.apply(this, args);
            break;
        case 'QueryCol':
            return queryCol.apply(this, args);
            break;
    }
}

function setRow(row, num) {
    _matrix[row].forEach(function(item, i) {
        _matrix[row][i] = Number(num);
    });
}

function setCol(col, num) {
    _matrix.forEach(function(item, i) {
        _matrix[i][col] = Number(num);
    });
}

function queryRow(row) {
    return _matrix[row].reduce(function(prev, item) {
        return prev + item;
    }, 0);
}

function queryCol(col) {
    return _matrix.reduce(function(prev, item) {
        return prev + item[col];
    }, 0);
}

