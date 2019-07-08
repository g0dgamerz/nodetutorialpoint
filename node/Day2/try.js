const fs = require('fs');
const http = require('http');
// const fetch =require('node-fetch');
// const dataHTML="";
// fs.writeFile('index.html','<h1 style="color:red"> this homepage</h1>',(err)=>console.log(err));
// console.log('before the file')

// console.log('after the file')
const server = http.createServer((req,res)=>{
console.log(req);
if (req.url ==='/api'){
    var jsondata={
        data:[]
    };
    fs.readFile('50-contacts.csv','utf8',(err,data)=>{
        if(err)  throw err;
        if(data) {
            arr=data.split('\n');
            arr.shift();
            arr.forEach(value => {
                let data =value.split(',');
                let first = data[0];
                let city = data[4];
                let email=data[data.length-1];
                jsondata.data.push({
                        'firstname' : first,
                        'city' : city,
                        'email' : email
                    });
            });
            res.writeHead(200,{'Content-Type': 'application/json'});
            // console.log(JSON.stringify(jsondata));
            // res.write(JSON.stringify(jsondata))
            res.end(JSON.stringify(jsondata));
        }
        else console.log('empty files');
    })
 }
//  if(req.url==='/get'){
    
//    fetch('http://localhost:3000/api')
//    .then(response=>{
//        return response.json();
//    })
//    .then(jsondata=>{
//     fs.writeFile('contacts.json',JSON.stringify(jsondata),(err)=>console.log(err));
//        })
//        res.end();
//  }
 else{
     res.write('<h1> 404 Page Not Found</h1>');
     res.end();
 }


})
server.listen(3000, ()=> console.log("server is up and runnug"));

