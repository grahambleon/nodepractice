let fs = require('fs')

let filePath = process.argv[2];

function doneReading(err, fileContents){

}

function countLines(callBack) {
  fs.readFile(filePath, doneReading())
}
