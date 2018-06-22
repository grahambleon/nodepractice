let fs = require('fs')
let filePath = process.argv[2];
let argument = process.argv[3];

fs.readdir(filePath, function (err, list) {
  list.forEach((file) => {
    if (file.endsWith('.' + argument)) {
      console.log(file);
    }
  })
})
