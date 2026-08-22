import express from "express";
import http from "http";
import {WebSocketServer} from "ws";

const app = express();

app.use(express.static("public"));

const server = http.createServer(app);

const wss = new WebSocketServer({server});

wss.on("connection",(socket)=>{

    socket.on("message",(message)=>
    {
        const newCode = message.toString();

        wss.clients.forEach((client)=>{
            if(client !== socket && client.readyState === WebSocket.OPEN)
            {
            client.send(newCode)
            }
        })
    })

    socket.on("close",()=>{
        console.log("connection ended")
    })
})

server.listen(3000,"0.0.0.0",()=>{
    console.log("Server running on Port 3000")
})
