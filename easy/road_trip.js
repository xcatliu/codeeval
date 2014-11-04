// https://www.codeeval.com/open_challenges/124/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(' ').map(function(item) {
        return Number(item.split(',')[1].replace(';', ''));
    });
    console.log(road_trip(lineSplit).join(','));
});

function road_trip(array) {
    var sortedArray = array.sort(function(a, b) {
        return a - b;
    });
    var deltaArray = [];
    sortedArray.forEach(function(item, i) {
        if (i === 0) {
            deltaArray.push(item);
            return;
        }
        deltaArray.push(item - sortedArray[i - 1]);
    });
    return deltaArray;
}

