// https://www.codeeval.com/open_challenges/111/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(longest_word(line));
});

function longest_word(sentence) {
    return sentence.split(' ').reduce(function(prev, value) {
        if (prev.length >= value.length) {
            return prev;
        }
        return value;
    }, '');
}

