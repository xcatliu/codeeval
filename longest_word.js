// https://www.codeeval.com/open_challenges/111/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(longest_word(line));
});

function longest_word(string) {
    return string.split(' ').sort(function(a, b) {
        return a.length < b.length;
    })[0];
}

