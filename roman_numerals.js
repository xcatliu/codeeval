// https://www.codeeval.com/open_challenges/106/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(roman_numerals(line));
});

function roman_numerals(number) {
    var result = '';
    result += getRoman(parseInt( number / 1000, 10), 'M', '', '');
    result += getRoman(parseInt(( number % 1000 ) / 100, 10), 'C', 'D', 'M');
    result += getRoman(parseInt(( number % 100 ) / 10, 10), 'X', 'L', 'C');
    result += getRoman(number % 10, 'I', 'V', 'X');
    return result;
}

function getRoman(number, a, b, c) {
    var result = '';
    if (number === 9) {
        result += a + c;
    } else if (number >= 5) {
        result += b;
        number = number - 5;
        while (number > 0) {
            result += a;
            number--;
        }
    } else if (number === 4) {
        result += a + b;
    } else {
        while (number > 0) {
            result += a;
            number--;
        }
    }
    return result;
}

