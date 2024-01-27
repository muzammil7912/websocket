import express from "express"
import {WebSocketServer} from 'ws'

const app = express();
const port = 8080;


const server = app.listen(port,() => {
    console.log("server is listening..");
})

const wss = new WebSocketServer({server});

wss.on("connection",(ws) => {
    ws.on("message",(data) => {
        const stringData = data.toString();
        console.log("Data from client:", stringData);
        ws.send("thanks buddy!");
    })
})