var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var files = glob.sync(path.resolve(__dirname, '../lib/*'));

files.forEach(function(filePath) {
    var fileName = path.basename(filePath, '.js');
    var programPath = filePath;
    var inputPath = path.resolve(__dirname, 'fixtures', fileName, 'input');
    var resultPath = path.resolve(__dirname, 'fixtures', fileName, 'result');
    describe(fileName, function() {
        it('should equal to the result', function(done) {
            exec('node ' + programPath + ' ' + inputPath, function(error, stdout, stderr) {
                if (error) {
                    return done(error);
                }
                var result = fs.readFileSync(resultPath, {
                    encoding: 'utf8'
                });
                if (result.trim() === stdout.trim()) {
                    done();
                } else {
                    done(new Error());
                }
            });
        });
    });
});

