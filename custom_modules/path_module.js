const path = require('path');
const pathObj = {

    path: path,
    baseName: path.basename(__filename),
    dirName: path.dirname(__filename),
    extname: path.extname(__filename),
    parse: path.parse(__filename),
    customLinkAsJoin: path.join(__dirname, '../test/', 'second.html'),
    customLinkAsResolve: path.resolve('../', 'test', 'second.html'),


}

module.exports = (function () {
    return pathObj;
})();
