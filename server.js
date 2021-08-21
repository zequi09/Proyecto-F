const http = require('http')

const port = 3000

const server  = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Prueba pf')
})

server.listen(port, () => [
    console.log(`Server running on port: ${port}`)
])



const dgram = require('dgram');
const serverudp = dgram.createSocket('udp4');

serverudp.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

serverudp.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

serverudp.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

serverudp.bind(41244);