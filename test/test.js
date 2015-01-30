var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var easyDirs = glob.sync(path.resolve(__dirname, '../easy/*'))
var moderateDirs = glob.sync(path.resolve(__dirname, '../moderate/*'));
var hardDirs = glob.sync(path.resolve(__dirname, '../hard/*'));

var dirs = easyDirs.concat(moderateDirs).concat(hardDirs);

dirs.forEach(function(dirPath) {
  var dirName = path.relative(path.resolve(dirPath, '..'), dirPath);
  var programPath = path.join(dirPath, 'index.js');
  var inputPath = path.join(dirPath, 'input');
  var outputPath = path.join(dirPath, 'output');
  describe(dirName, function() {
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

