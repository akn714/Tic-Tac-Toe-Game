const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(server);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/client.html');
    // res.send('<h1>hello</h1>');
})

io.on('connection',(socket)=>{
    console.log('a player connected');
    socket.on('disconnect', ()=>{
        console.log('player disconnected');
    })

    socket.on('player name', (name)=>{
        io.emit('pn', name);
    })
    socket.on('player selected', obj =>{
        // io.emit('ps',obj);
        socket.broadcast.emit('ps',obj);
    })
    socket.on('game reset',()=>{
        socket.broadcast.emit('gr');
    })
})

server.listen(8000 , ()=>{
    console.log('game running on 8000');
})