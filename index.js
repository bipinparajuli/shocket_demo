const { log } = require("console");
const express = require("express");
const app =express()
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io")

const io = new Server(server);



app.get("/",(req,res)=>{
res.sendFile(__dirname + '/index.html')
})


io.on("connection",(socket)=>{
    console.log("User is Conencted");


    socket.on("chat messege",(msg)=>{
        console.log("User disconnect",msg);
        io.emit("chat messege",msg)
    })

})

server.listen(8000,()=>{
    console.log("App is running");
})