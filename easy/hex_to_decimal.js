// https://www.codeeval.com/open_challenges/67/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    console.log(hex_to_decimal(line));
});

function hex_to_decimal(string) {
    return parseInt(string, 16);
}

