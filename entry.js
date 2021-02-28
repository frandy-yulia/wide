const {server,ssl} = require('./constants');
const express = require('express');
const http = require('http');
const path = require('path');


// create the server
const app = express();
const http_server = http.createServer(app);

// create web socket
// const wss = new WebSocket.Server({ http_server });

// wss.on('connection', (ws) => {
//     ws.on('message', (event) => router(ws, event));
// });

// set static file end render index.html
app.use(express.static(path.resolve(server.path)));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(server.path, './index.html'));
});


// runing the server
http_server.listen(server.port,server.host, () => {
    const protocol = (ssl.keys) ? 'https' : 'http';
    const url = `${protocol}://${server.host}:${server.port}`;
    console.log('Listening on %s', url);
});