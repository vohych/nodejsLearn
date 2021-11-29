// const dirNameForModule = './custom_modules/';
// const pathModule = require( dirNameForModule + 'path_module');
// const mkDirModule = require( dirNameForModule + 'fs_ref');
// const osRef = require( dirNameForModule + 'os_ref');
// const eventsModule = require( dirNameForModule + 'eventsModule');


const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.method === 'GET'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end( `<h1>form</h1>
        <form method="post" action="/">
            <input type="text" name="title">
            <button type="submit"> Send </button>
        </form>`)
    } else if (req.method === 'POST'){
        const body = [];

        req.on('data', data =>{
            body.push(Buffer.from(data));
            console.log(data, 'data');
        })

        req.on('end', () =>{
            console.log(body.toString());
        })

        res.end(`
        
            <h1> Message send </h1>
        
        `)
    }

})

server.listen(3000, ()=>{
    console.log('Server is ranning via port 3000')
})