// https://www.codeeval.com/open_challenges/73/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var number = Number(line);
    console.log(decode_numbers(number));
});

function decode_numbers(number) {
    var numberString = number.toString();
    var length = numberString.length;
    if (length < 2) {
        return 1;
    }
    var firstTwo = Number(numberString.slice(0, 2));
    if (firstTwo > 26) {
        return decode_numbers(numberString.slice(1));
    }
    return decode_numbers(numberString.slice(1)) + decode_numbers(numberString.slice(2));
}

