// https://www.codeeval.com/open_challenges/82/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var number = Number(line);
    console.log(armstrong_numbers(number) ? 'True': 'False');
});

function armstrong_numbers(number) {
    var length = number.toString().length;
    return number === number.toString().split('').reduce(function(prev, item) {
        return prev + Math.pow(Number(item), length);
    }, 0);
}

