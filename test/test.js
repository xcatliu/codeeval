var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var easyFiles = glob.sync(path.resolve(__dirname, '../easy/*'))
var moderateFiles = glob.sync(path.resolve(__dirname, '../moderate/*'));
var hardFiles = glob.sync(path.resolve(__dirname, '../hard/*'));

easyFiles.forEach(function(filePath) {
    var fileName = path.basename(filePath, '.js');
    var programPath = filePath;
    var inputPath = path.resolve(__dirname, 'easy', fileName, 'input');
    var outputPath = path.resolve(__dirname, 'easy', fileName, 'output');
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

moderateFiles.forEach(function(filePath) {
    var fileName = path.basename(filePath, '.js');
    var programPath = filePath;
    var inputPath = path.resolve(__dirname, 'moderate', fileName, 'input');
    var outputPath = path.resolve(__dirname, 'moderate', fileName, 'output');
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

hardFiles.forEach(function(filePath) {
    var fileName = path.basename(filePath, '.js');
    var programPath = filePath;
    var inputPath = path.resolve(__dirname, 'hard', fileName, 'input');
    var outputPath = path.resolve(__dirname, 'hard', fileName, 'output');
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

