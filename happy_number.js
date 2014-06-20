// https://www.codeeval.com/open_challenges/39/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var number = Number(line);
    console.log(happy_number(number));
});

function happy_number(number, stack) {
    if (typeof stack === 'undefined') {
        stack = [number];
    }
    if (stack[stack.length - 1] === 1) {
        return true;
    }
    var digitSquareSum = getDigitSquareSum(number);
    if (stack.indexOf(digitSquareSum) !== -1) {
        return false;
    }
    stack.push(digitSquareSum);
    return happy_number(digitSquareSum, stack);
}

function getDigitSquareSum(number) {
    return Array.prototype.reduce.call(number.toString(), function(prev, digit) {
        return prev + digit * digit;
    }, 0);
}

