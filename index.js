// const dirNameForModule = './custom_modules/';
// const pathModule = require( dirNameForModule + 'path_module');
// const mkDirModule = require( dirNameForModule + 'fs_ref');
// const osRef = require( dirNameForModule + 'os_ref');
// const eventsModule = require( dirNameForModule + 'eventsModule');


const http = require('http');

const server = http.createServer((req, res)=>{

    res.write('aassasasas');
    res.end(`
        <div>fekljfeifjer</div>
`);

})

server.listen(3000, ()=>{
    console.log('Server is ranning via port 3000')
})