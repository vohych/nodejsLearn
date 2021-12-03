// const dirNameForModule = './custom_modules/';
// const pathModule = require( dirNameForModule + 'path_module');
// const mkDirModule = require( dirNameForModule + 'fs_ref');
// const osRef = require( dirNameForModule + 'os_ref');
// const eventsModule = require( dirNameForModule + 'eventsModule');

// const fs = require('fs');
// const path = require('path');
// const http = require('http');
//
// const server = http.createServer((req, res)=>{
//
//     if(req.method === 'GET'){
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//
//         if (req.url === '/'){
//             fs.readFile(
//                 path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, content)=>{
//                     if (err){
//                         throw err
//                     }
//
//                     res.end(content)
//                 }
//             )
//         }
//
//     } else if (req.method === 'POST'){
//         const body = [];
//         console.log(body)
//         req.on('data', data =>{
//             body.push(Buffer.from(data));
//             console.log(data, 'data');
//         })
//
//         req.on('end', () =>{
//             console.log(body.toString());
//         })
//
//         fs.readFile(
//             path.join(__dirname, 'views', 'message.html'), 'utf-8', (err, content)=>{
//
//                 if (err){
//                     throw err
//                 }
//
//                 res.end(content);
//
//             }
//         )
//     }
//
// })


// server.listen(3000, ()=>{
    // console.log('Server is run via port 3000')
// })

//
// const express = require('express');
// const path = require("path");
// const app = express();
//
//
// app.get('/' ,(req,res)=>{
//
//     res.status(200);
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
//
// })
//
// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'views', 'message.html'))
// })
//
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, ()=>{
//
//     console.log('--------->' + PORT);
//
// })

const includeModeles = require('./modeles/course');

const course = new includeModeles('dwef');

course.save();