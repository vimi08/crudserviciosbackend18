import Server from "./src/server/config.js"
import router from "./src/routes/index.routes.js"
//crear elserver
const server =new Server()
//leer las rutas
//http://localhost:3000/api/servicios
server.app.use('/api',router)
//escuchar el puerto
server.listen()

console.log('Primer mensaje del Backend')