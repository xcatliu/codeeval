// https://www.codeeval.com/open_challenges/128/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var origin = line.split(' ').map(Number);
    console.log(armstrong_numbers(origin).join(' '));
});

function armstrong_numbers(origin) {
    var i = 1;
    var count = 1;
    var result = [];
    for (; i < origin.length; i++) {
        if (origin[i] === origin[i - 1]) {
            count++;
        } else {
            result.push(count, origin[i - 1]);
            count = 1;
        }
    }
    result.push(count, origin[i - 1]);
    return result;
}

