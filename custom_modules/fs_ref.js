const fs = require('fs');
const path = require('path');
const fsObj = {

    mkDir: function () {
        return fs.mkdir(path.join(__dirname, 'test'), err => {
            if (err) throw err
            console.log('Folder created')
        })
    },

}

module.exports = (function () {
    return fsObj;
})();
