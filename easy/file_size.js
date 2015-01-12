// https://www.codeeval.com/open_challenges/26/

console.log(file_size(process.argv[2]));

function file_size(filePath) {
  return require('fs').statSync(filePath).size;
}

