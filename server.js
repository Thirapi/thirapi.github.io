const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // Broadcast pesan ke semua klien yang terhubung
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(process.env.PORT || 3000, function listening() {
    console.log('Server started on port %d', server.address().port);
});
