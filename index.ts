import Server from './src/server/server';

const server = Server.init(3000);
server.start(() => {
  console.log('servidor corriendo en el puerto 3000')
})