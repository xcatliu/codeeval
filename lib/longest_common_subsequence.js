// https://www.codeeval.com/open_challenges/6/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(';');
    console.log(longest_common_subsequence(lineSplit[0], lineSplit[1]));
});

function longest_common_subsequence(string1, string2) {
    function backtrack(i, j) {
        if (i === -1 || j === -1) {
            return '';
        } else if (string1[i] === string2[j]) {
            return backtrack(i - 1, j - 1) + string1[i];
        } else {
            if (backtrack(i, j - 1).length > backtrack(i - 1, j).length) {
                return backtrack(i, j - 1);
            } else {
                return backtrack(i - 1, j);
            }
        }
    }
    return backtrack(string1.length - 1, string2.length - 1);
}

