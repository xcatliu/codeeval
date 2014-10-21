// https://www.codeeval.com/open_challenges/113/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split('|').map(function(item) {
        return item.trim();
    });
    var array1 = lineSplit[0].split(' ').map(Number);
    var array2 = lineSplit[1].split(' ').map(Number);
    console.log(multiply_lists(array1, array2).join(' '));
});

function multiply_lists(array1, array2) {
    return array1.reduce(function(prev, value, index) {
        prev.push(value * array2[index]);
        return prev;
    }, []);
}

