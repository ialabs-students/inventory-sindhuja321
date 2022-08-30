const { response } = require("express");
const express = require("express");

console.log("Welcome");

const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

server.use(express.json())    // midllevar method

var users = [{id : 1, name: "Sindhu",mail:"sindhu@gmail.com",age:22},{id : 2, name : "Pooja",mail:"pooja@gmail.com",age:22},{id : 2, name : "kavin",mail:"kavin@gmail.com",age:32}
];

var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};

server.get("/hello",(req,res)=> {
    res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
    users.push(req.body);
    res.send("user register succesfully")
});
server.post("/add/users", (req, res) => {
    users.push(req.body);
    res.send("user register succesfully")
});
server.put("/update/users", (req, res) => {
    for(let i=0;i<users.length;i++){
        if(users.id == 2){
            users.update.id=05;
            res.send("vaalue updated")
        }
    }
    users.push(req.body);
    res.send("user update succesfully")
});

// server.put("/update/users",(req,res) => {
//     let name=req.params.id;
//     let email=req.body.id;
//     let age=req.body.id;
//     let upid=req.body.id;

//     users.update({id:upid},{$set:{name:name,email:email,age:age}},{new:true},(err,data)=>{
//         if(data==null){
//             res.send("nothing found");
//         }else{
//             res.send(data);
//         }
//     })

// })


//-----------------------delete--------------------
server.delete("/delete/user", (req, res) => {
    for(let user in users){
        if(users[user].name=="Pooja"){
            users.slice(req.body);
        }
    }
    res.send(users);
});




// Initialize App
const app = express();

app.get('/', (req, res) => {
const filters = req.query;
const filteredUsers = users.filter(users => {
	let isValid = true;
	for (key in filters) {
	console.log(key, users[key], filters[key]);
	isValid = isValid && users[key] == filters[key];
	}
	return isValid;
});
res.send(filteredUsers);
});



//-------------fetch----------------------------

server.get("/fetch/user", (req, res) => {

    res.send(users)
});
server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});

//-----------------filter----------------------
server.get("/filter/user/name",(req,res) =>{
    id=1;
    users = users.filter(item => item.id !== id);
    res.send(users);
})


server.listen(4000, () => {
    console.log("server running on port :4000");
});



//REQUEST/QUERY PARAM -- <URL?key=value&key1=value1&key2=value2>
//   http://localhost:4000/hello?key=value&key1=value1&key2=value2
//   http://localhost:4000/hello?name=JN

//PATH PARAM -- <URL/extra/path>
//   http://localhost:4000/hello/JN
