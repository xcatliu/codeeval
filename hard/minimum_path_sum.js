// https://www.codeeval.com/open_challenges/72/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var matrix = getMatrix(line);
  if (matrix) {
    console.log(minimum_path_sum(matrix));
  }
});

var _n;
var _matrix;

function getMatrix(line) {
  if (typeof _n === 'undefined') {
    return initMatrix(line);
  }
  _n--;
  if (_n === -1) {
    return initMatrix(line);
  }
  _matrix.push(line.split(',').map(function(item) {
    return Number(item);
  }));
  if (_n > 0) {
    return false;
  }
  return _matrix;
}

function initMatrix(line) {
  _n = line;
  _matrix = [];
  return false;
}

function minimum_path_sum(matrix) {
  minimumPathMatrix = getEmptyArray(matrix.length);
  matrix.forEach(function(row, x) {
    row.forEach(function(item, y) {
      minimumPathMatrix[x][y] = getItemMinimunPath(item, x, y, minimumPathMatrix);
    });
  });
  return minimumPathMatrix[matrix.length - 1][matrix.length - 1];
}

function getEmptyArray(n) {
  var i;
  var result = [];
  for (i = 0; i < n; i++) {
    result[i] = [];
  }
  return result;
}

function getItemMinimunPath(item, x, y, minimumPathMatrix) {
  if (x === 0 && y === 0) {
    return item;
  }
  return Math.min(item + getMatrixItem(x - 1, y), item + getMatrixItem(x, y - 1));
  function getMatrixItem(x, y) {
    if (x < 0 || y < 0) {
      return Infinity;
    }
    return minimumPathMatrix[x][y];
  }
}

