// https://www.codeeval.com/open_challenges/28/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === '') {
        return;
    }
    var lineSplit = line.split(',');
    console.log(string_searching(lineSplit[0], lineSplit[1]) ? 'true': 'false');
});

function string_searching(string, pattern) {
    var pattern = pattern.replace(/([^\\]\*)/g, function(item) {
        return item[0] + '\.\*';
    }).replace(/\\\*/g, function() {
        return '\\\\\\\*';
    });
    var regexp = new RegExp(pattern);
    return string.search(regexp) !== -1;
}

