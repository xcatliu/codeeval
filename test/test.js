var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var files = glob.sync(path.resolve(__dirname, '../easy/*'))
        .concat(glob.sync(path.resolve(__dirname, '../moderate/*')))
        .concat(glob.sync(path.resolve(__dirname, '../hard/*')));

files.forEach(function(filePath) {
    var fileName = path.basename(filePath, '.js');
    var programPath = filePath;
    var inputPath = path.resolve(__dirname, 'fixtures', fileName, 'input');
    var outputPath = path.resolve(__dirname, 'fixtures', fileName, 'output');
    describe(fileName, function() {
        it('should equal to the output', function(done) {
            exec('node ' + programPath + ' ' + inputPath, function(error, stdout, stderr) {
                if (error) {
                    return done(error);
                }
                var output = fs.readFileSync(outputPath, {
                    encoding: 'utf8'
                });
                if (output.trim() === stdout.trim()) {
                    done();
                } else {
                    done(new Error());
                }
            });
        });
    });
});

