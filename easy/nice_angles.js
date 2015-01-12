// https://www.codeeval.com/open_challenges/160/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  var number = Number(line);
  console.log(nice_angles(number));
});

function nice_angles(number) {
  var integer = parseInt(number, 10);
  var decimal = number - integer;
  var minutes = parseInt(decimal * 60, 10);
  var seconds = parseInt((decimal - minutes / 60) * 3600, 10);
  return integer + '.' + toTwo(minutes) + "'" + toTwo(seconds) + '"';
}

function toTwo(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number.toString();
}

