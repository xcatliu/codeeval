// https://www.codeeval.com/open_challenges/92/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === "") {
        return;
    }
    console.log(line.split(' ').splice(-2, 1)[0]);
});

