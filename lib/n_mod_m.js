// https://www.codeeval.com/open_challenges/62/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(',');
    var n = lineSplit[0];
    var m = lineSplit[1];
    console.log(n_mod_m(n, m));
});

function n_mod_m(n, m) {
    return (n - parseInt(n / m, 10) * m);
}

