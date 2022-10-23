const express = require('express');
const app = express();
const port = 80;

const path = require('path');
const fs = require('fs');

const localDir = 'web';

let getDir = (dirPath) => {
    let tmp = path.join(__dirname, localDir);
    dirPath += '/';
    var dirPath2 = path.join(__dirname, localDir, dirPath);
    fs.readdir(dirPath2, {withFileTypes: true}, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach((file) => {
            if(file.isDirectory()) {
                dirPath2.slice(0, tmp.length+1);
                return getDir(dirPath + file.name);
            }
            // Do whatever you want to do with the file
            if (file.name == 'index.html') {
                return app.get('/', function (req, res) {
                    res.sendFile(dirPath2 + file.name);
                });
            }
            let tmp2 = dirPath2.replaceAll('\\', '/');
            let path = tmp2.indexOf('/web/');
            path = tmp2.substring(path);
            path += file.name;
            app.get(path, (req, res) => {
                res.sendFile(dirPath2 + file.name);
            });
        }, this);
    });
}

getDir("");


/*app.get('/', (req, res) => {
  res.send('Hello World!');
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
