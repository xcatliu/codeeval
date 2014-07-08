// https://www.codeeval.com/open_challenges/112/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplitResult = line.split(' : ');
    var array = lineSplitResult[0].split(' ');
    var operations = lineSplitResult[1].split(', ').map(function(item) {
        return item.split('-');
    });
    console.log(swap_elements(array, operations).join(' '));
});

function swap_elements(array, operations) {
    return operations.reduce(function(prev, operation) {
        return swap(prev, operation[0], operation[1]);
    }, array);
}

function swap(array, indexA, indexB) {
    var tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    return array;
}

