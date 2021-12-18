const os = require('os');

function f() {
    console.log(os.platform());
    console.log(os.arch());
    console.log(os.cpus());
    console.log(os.freemem);
    console.log(os.totalmem);

    //root folder
    console.log(os.homedir())

    console.log(os.uptime())
}

module.exports = (function () {
    return f();
})