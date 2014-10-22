// https://www.codeeval.com/open_challenges/8/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(reverse_words(line));
});

function reverse_words(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

