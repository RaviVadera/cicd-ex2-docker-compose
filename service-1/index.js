import express from 'express';
import fetch from 'node-fetch';

// read local ip address and port configuration
// from environment variables
const localIP = process.env.host || '0.0.0.0';
const localPort = process.env.port || 3000;

// configure express server
const app = express();

// '/' endpoint for service-1
app.get('/', async (req, res) => {
    // call service-2 endpoint
    const service2Response = await (await fetch('http://service-2:3000/')).text();

    // form and send response
    const sender = `${req.socket.remoteAddress}:${req.socket.remotePort}`;
    const receiver = `${req.socket.localAddress}:${req.socket.localPort}`;
    let response = `Hello from ${sender}\nto ${receiver}\n${service2Response}\n`;
    res.send(response);
});

// start express server on port
app.listen(localPort, localIP, () => {
    console.log("service-1 -> started");
});