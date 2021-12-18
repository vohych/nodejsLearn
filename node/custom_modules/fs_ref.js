const fs = require('fs');
const path = require('path');
const fsObj = {

    mkDir: function () {
        return fs.mkdir(path.join(__dirname, 'test'), err => {
            if (err) throw err
            console.log('Folder created')
        })
    },
    writeFile: function () {
        fs.writeFile(path.join(__dirname, 'notes', './test/test.file'), err => {
            if (err) throw err
            console.log('Folder writes')
        })
    }

}

module.exports = (function () {
    return fsObj;
})();
