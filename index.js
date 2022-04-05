const http = require('http');
const app = require('./app.js');


const server = http.createServer(app);

server.listen('5010', () => {
    console.log("Server is now listening to port 5010.");
});





