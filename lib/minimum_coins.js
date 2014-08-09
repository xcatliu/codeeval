// https://www.codeeval.com/open_challenges/74/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(minimun_coins(line));
});

function minimun_coins(num) {
    var quotient = parseInt(num / 5, 10);
    var resultMap = [ 0, 1, 2, 1, 2 ];
    return quotient + resultMap[num % 5];
}

