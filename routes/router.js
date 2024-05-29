import express from 'express'
import path from 'path'
import { getData, addData, deleteData, updateData } from "../controllers/consultas.js"

const __dirname = import.meta.dirname
const router = express.Router()

router.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/canciones', async (req, res) => {
    const result = await getData()
    res.json(result)
})

router.post('/cancion', async (req, res) => {
const {titulo, artista, tono} = req.body
    const result = await addData(titulo, artista, tono)
    res.json(result)
})

router.delete('/cancion', async (req, res) => {
const {id} = req.query
const result = await deleteData(id)
res.send('Cancion eliminada')
})

router.put('/cancion/:id', async (req, res) => {
const {id} = req.params
    const {titulo, artista, tono} = req.body
    const result = await updateData(id, titulo, artista, tono)
        res.send('Cancion actualizada')
})

export default router
