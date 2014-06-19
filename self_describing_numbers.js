// https://www.codeeval.com/open_challenges/40/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(self_describing_numbers(line) ? 1 : 0);
});

function self_describing_numbers(number) {
    var countMap = Array.prototype.reduce.call(number.toString(), function(prev, dig) {
        if (typeof prev[dig] === 'undefined') {
            prev[dig] = 1;
        } else {
            prev[dig] = prev[dig] + 1;
        }
        return prev;
    }, []);
    return !Array.prototype.some.call(number.toString(), function(dig, index) {
        if (typeof countMap[index] === 'undefined') {
            countMap[index] = 0;
        }
        if (dig !== countMap[index].toString()){
            return true;
        }
        return false;
    });
}

