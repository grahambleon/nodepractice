let fs = require('fs')
let filePath = process.argv[2];

fs.readdir(filePath, function (err, list) {
  list.forEach((file) => {
    if (file.endsWith('js')) {
      console.log(file);
    }
  })
})
