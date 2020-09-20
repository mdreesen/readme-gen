const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // If there is an error, reject the promise and send the error to the catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise dosn't execute the resolve() function
                return;
            }
            // If everything went well, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: 'File Copied'
            });
        });
    });
};

module.exports = {
    writeFile,
    copyFile
};