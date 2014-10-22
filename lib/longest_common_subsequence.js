// https://www.codeeval.com/open_challenges/6/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(';');
    console.log(longest_common_subsequence(lineSplit[0], lineSplit[1]));
});

function longest_common_subsequence(string1, string2) {
    var string1Length = string1.length;
    var string2Length = string2.length;
    var cache = [];
    var i, j;
    for (i = 0; i < string1Length; i++) {
        cache[i] = [];
    }
    function backtrack(i, j) {
        if (i === -1 || j === -1) {
            return '';
        }
        if (typeof cache[i][j] !== 'undefined') {
            return cache[i][j];
        }
        var result = '';
        if (string1[i] === string2[j]) {
            result = backtrack(i - 1, j - 1) + string1[i];
        } else {
            if (backtrack(i, j - 1).length > backtrack(i - 1, j).length) {
                result = backtrack(i, j - 1);
            } else {
                result = backtrack(i - 1, j);
            }
        }
        cache[i][j] = result;
        return result;
    }
    return backtrack(string1.length - 1, string2.length - 1);
}

