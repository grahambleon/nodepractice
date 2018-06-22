let fs = require('fs')
let filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {

  lines = data.toString().split('\n').length - 1;

  console.log(lines);
})
