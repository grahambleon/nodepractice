let fs = require('fs')

let filePath = process.argv[2];
let file = fs.readFileSync(filePath).toString()
let lines = file.split("\n")
console.log(lines.length - 1);
