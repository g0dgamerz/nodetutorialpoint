const fs = require('fs');
const http = require('http');
// const dataHTML="";
fs.writeFile('index.html','<h1 style="color:red"> this homepage</h1>',(err)=>console.log(err));
// console.log('before the file')

// console.log('after the file')

const server = http.createServer((req,res)=>{
// console.log(req);
if (req.url === '/'){
    fs.readFile('index.html','utf8',(err,data)=>{
        if(err)  throw err;
        if(data) {
            res.write(data);
            res.end();
            // console.log(data);
        }
        else console.log('empty files');
    })
 }


})
server.listen(3000, ()=> console.log("server is up and runnug"))
