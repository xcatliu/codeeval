// https://www.codeeval.com/open_challenges/96/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(swap_case(line));
});

function swap_case(string) {
    return Array.prototype.map.call(string, swapLetterCase).join('');
}

function swapLetterCase(letter) {
    if (letter.toUpperCase() === letter) {
        return letter.toLowerCase();
    }
    return letter.toUpperCase();
}

