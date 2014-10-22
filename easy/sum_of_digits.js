// https://www.codeeval.com/open_challenges/21/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(sum_of_digits(Number(line)));
});

function sum_of_digits(number) {
    return number.toString().split('').reduce(function(prev, item) {
        return prev + Number(item);
    }, 0);
}

