//  const colors = require("colors");

//  console.log("Hello".rainbow)
//  console.log("Namskar".red)
//  console.log("Heyyyy".yellow)



// const http = require("http");
// http
// .createServer((req,res) => {
//     res.write("<h1>Hello World<h1>");
//     res.end ();
// })
// .listen(5000);


const http = require("http");
const data = require("./data")
http
.createServer((req,resp)=>{
    resp.writeHead(200,{"ContentType":"applicationjion"});
    // resp.write(JSON.stringify({name:"Bharati", age:30 ,address:"Pune"}));
    resp.write(JSON.stringify());
    resp.end();
})
.listen(5000);
// const data = require("./data")

// http.createServer((req,resp) =>{
// resp.writeHead(200,{"Content-Type":"applicationjson"});
// resp.write(JSON.stringify(data))
// })
// .listen(5000);

