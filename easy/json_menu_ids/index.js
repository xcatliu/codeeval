// https://www.codeeval.com/open_challenges/102/

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line === '') {
    return;
  }
  console.log(json_menu_ids(JSON.parse(line)));
});

function json_menu_ids(obj) {
  return obj.menu.items.reduce(function(prev, item) {
    if (item === null) {
      return prev;
    }
    if (typeof item.label === 'string') {
      return prev + Number(item.label.replace('Label ', ''));
    }
    return prev;
  }, 0);
}

