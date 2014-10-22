// https://www.codeeval.com/open_challenges/23/

multiplication_tables(12).forEach(function(row) {
    console.log(row.map(function(item) {
        if (item < 10) {
            return '   ' + item;
        }
        if (item < 100) {
            return '  ' + item;
        }
        return ' ' + item;
    }).join(''));
});

function multiplication_tables(n) {
    var i = 0, j = 0;
    var result = [];
    for (; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (j === 0) {
                result[i] = [];
            }
            result[i].push((i + 1) * (j + 1));
        }
    }
    return result;
}

