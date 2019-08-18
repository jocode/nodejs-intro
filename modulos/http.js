// Nos permite usar el protocolo HTTP en nodejs
/* const http = require('http');
const colors = require('colors');

const handleServer = function(req, resp){
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('<h1>Hola mundo desde NodeJS</h1>');
    resp.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Servidor en el puerto 3000'.green);
}); */

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h2>Hola mundo con Express y nodeJS');
    res.end();
})

server.listen(3000, ()=>{
    console.log('Server on port 3000'.yellow)
})