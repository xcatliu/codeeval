// https://www.codeeval.com/open_challenges/136/

var line;
var width;
var map = [];
var mapObj = [];
var resultMap = [];

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  map.push(line.split(''));
  mapObj.push(line.split(''));
  resultMap.push(line.split(''));
});

line = map.length;
width = map[0].length;

console.log(racing_chars(map).map(function(item) {
  return item.join('');
}).join('\n'));

function racing_chars(map) {
  initFirstLine();
  for (var i = 1; i < line; i++) {
    for (var j = 0; j < width; j++) {
      fillMapObj(i, j);
    }
  }
  changeResultMap();
  return resultMap;
}

function getItemValue(item) {
  if (item === 'C') {
    return 1;
  }
  if (item === '_') {
    return 0;
  }
  return -1;
}

function getObjValue(i, j) {
  if (i === -1) {
    return -1;
  }
  if (j === -1) {
    return -1;
  }
  if (j === width) {
    return -1;
  }
  return mapObj[i][j].value;
}

function initFirstLine() {
  for (var j = 0; j < width; j++) {
    if (map[0][j] === '#') {
      mapObj[0][j] = {
        value: -1
      }
    } else {
      mapObj[0][j] = {
        value: getItemValue(map[0][j]),
        direction: '|'
      };
    }
  }
}

function fillMapObj(i, j) {
  if (map[i][j] === '#') {
    mapObj[i][j] = {
      value: -1
    };
    return;
  }
  var left = getObjValue(i - 1, j - 1);
  var center = getObjValue(i - 1, j);
  var right = getObjValue(i - 1, j + 1);
  var max = Math.max(left, center, right);
  if (max === -1) {
    mapObj[i][j] = {
      value: -1
    };
    return;
  }
  if (left === max) {
    mapObj[i][j] = {
      value: left + getItemValue(map[i][j]),
      direction: '\\'
    };
  } else if (center === max) {
    mapObj[i][j] = {
      value: center + getItemValue(map[i][j]),
      direction: '|'
    }
  } else if (right === max) {
    mapObj[i][j] = {
      value: right + getItemValue(map[i][j]),
      direction: '/'
    }
  }
}

function changeResultMap() {
  var tempIndex = getMaxItemIndex();
  var tempDirection = mapObj[line - 1][tempIndex].direction;
  for (var i = line - 1; i > 0; i--) {
    resultMap[i][tempIndex] = tempDirection;
    if (tempDirection === '/') {
      tempIndex++;
    } else if (tempDirection === '\\') {
      tempIndex--;
    }
    tempDirection = mapObj[i - 1][tempIndex].direction;
  }
}

function getMaxItemIndex() {
  var max = -1;
  var index = -1;
  for (var j = 0; j < width; j++) {
    if (mapObj[line - 1][j].value > max) {
      index = j;
    }
  }
  return index;
}

