let express = require('express')
let app = express()
let socket = require('socket.io')

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

let server= app.listen(8000,()=>{
    console.log("Server is running at 4000");
})


// Socket setup & pass server
var io = socket(server);

io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});


