import express from 'express';

// read local ip address and port configuration
// from environment variables
const localIP = process.env.host || '0.0.0.0';
const localPort = process.env.port || 3000;

// configure express server
const app = express();

// '/' endpoint for service-2
app.get('/', (req, res) => {
    // form and send response
    // form and send response
    const sender = `${req.socket.remoteAddress}:${req.socket.remotePort}`;
    const receiver = `${req.socket.localAddress}:${req.socket.localPort}`;
    let response = `Hello from ${sender}\nto ${receiver}`
    res.send(response);
});

// start express server on port
app.listen(localPort, localIP, () => {
    console.log("service-2 -> started");
});