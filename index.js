import express from "express";
import router from "./routes/router.js"
const app = express ()

const PORT = process.env.PORT || 3000

//middleware para enviar info x post, debe ir antes de las rutas
app.use (express.json())

//middleware para rutas
app.use ('/', router) 

app.listen (PORT, () => console.log  (`Servidor levantado en puerto http://localhost:${PORT}`))