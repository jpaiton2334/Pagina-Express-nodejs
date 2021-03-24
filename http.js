//rqeuerimos el servidor
const http = require('http');

// creamos el servidor y respondiendo
const server = http.createServer((req, res) => {
  
    res.end('estoy respondiendo a tu solicitud version 12');
  });


  //escuchando solicitudes
 const puerto = 3100;
server.listen(puerto, () => {
    console.log('estoy escuchando solicitudes');
  });