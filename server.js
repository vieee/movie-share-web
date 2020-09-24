const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
    socket.on('action', (action, value) => {
        io.emit('broadcast', action, value)
    })
})

server.listen(process.env.PORT || 3000)