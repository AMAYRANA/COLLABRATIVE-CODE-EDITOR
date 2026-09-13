import express from "express";
import http from "http";
import {WebSocketServer,WebSocket} from "ws";
import mongoose from "mongoose";
import roomroutes from '../backend/routes/roomroutes.js';
import cors from "cors";
import rmap from '../backend/rmap.js';

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use(roomroutes);

//mongodb connection string
mongoose.connect('mongodb://localhost:27017/collabrative-editor')
    .then(()=>{
        console.log("Mongodb connected")
    })
.catch((error)=>{
    console.log("error connecting = ",error)
})





const server = http.createServer(app);

const wss = new WebSocketServer({server});

wss.on("connection",(socket,request)=>{
    
    const roomid = request.url.split("/")[1];
    const clients = rmap.get(roomid)
    clients.add(socket);
    console.log("server connected")

    socket.on("message",(message)=>
    {
        const newCode = message.toString();

        clients.forEach((client)=>{
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

server.listen(3000,()=>{
    console.log("Server running on Port 3000")
})
