// console.log('This is the first .js file');
// const { error } = require('console');
// const fs=require('fs');
// fs.writeFile('output.txt','hello,world',(err)=>{
//     if(err){
//         console.error('error writing to file :',err);
//     }else{
//         console.log('file written Successfully:');
//     }
// });

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
});

server.listen(3000); 