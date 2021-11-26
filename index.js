const dirNameForModule = './custom_modules/';
const pathModule = require( dirNameForModule + 'path_module');
const mkDirModule = require( dirNameForModule + 'fs_ref');
mkDirModule.mkDir();
console.log(mkDirModule)