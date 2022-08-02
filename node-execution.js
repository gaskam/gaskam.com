const express = require('express');
const app = express();
const port = 80;

const path = require('path');
const fs = require('fs');

let getDir = (dirPath) => {
    dirPath = path.join(__dirname, 'web', dirPath) + '/';
    fs.readdir(dirPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach((file) => {
            // Do whatever you want to do with the file
            if (file == 'index.html') {
                return app.get('/', function (req, res) {
                    res.sendFile(dirPath + file);
                });
            }
            let tmp = dirPath.replaceAll('\\', '/');
            let path = tmp.indexOf('/web/');
            path = tmp.substring(path);
            path += file;
            console.log(path);
            app.get(path, (req, res) => {
                res.sendFile(dirPath + file);
            });
        });
    });
}

getDir("");


/*app.get('/', (req, res) => {
  res.send('Hello World!');
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
