// https://www.codeeval.com/open_challenges/25/

odd_numbers(100).forEach(function(item) {
    console.log(item);
});

function odd_numbers(n) {
    var i = 1;
    var result = [];
    for (; i < n; i += 2) {
        result.push(i);
    }
    return result;
}

