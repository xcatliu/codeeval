// https://www.codeeval.com/open_challenges/5/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(detecting_cycles(line.split(' ').map(Number)).join(' '));
});

function detecting_cycles(array) {
    var tempArray = [];
    var i = 0;
    var arrayLength = array.length;
    var start, end, pos;
    for (;i < arrayLength; i++) {
        pos = tempArray.indexOf(array[i]);
        if (pos === -1) {
            tempArray.push(array[i]);
        } else {
            start = pos;
            end = i - 1;
            return array.slice(start, end + 1);
        }
    }
}

