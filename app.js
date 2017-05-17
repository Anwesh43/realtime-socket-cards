const http = require('http')
const socketIO = require('socket.io')
const express = require('express')
const path = require('path')
const expressApp = express()
expressApp.use(express.static(path.join(__dirname,'public')))
const fs = require('fs')
const server = http.createServer(expressApp)
const io = socketIO(server)
io.of('/test').on('connection',(socket)=>{
    socket.emit('create-card',"Hello World")
    fs.watch('notes.txt',()=>{
        fs.readFile('notes.txt',(err,data)=>{
            if(err == null) {
                socket.emit('create-card',data.toString())
                //console.log(data.toString())
            }
        })
    })
})
server.listen(8000,()=>{
    console.log("connected")
})
