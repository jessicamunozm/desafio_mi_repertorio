import express from 'express'
import {traerData} from "../controllers/consultas.js"
import path from 'path'
import pool from "../config/base_de_datos.js"

const __dirname = import.meta.dirname
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, '../views/index.html'))})

router.get ('/date', async(req, res) => {
    const result = await pool.query('select now()')
    res.send (result.rows)
    })

router.get('/canciones', async (req,res) => {
    const result = await traerData()
    console.log(result.rows)
    res.json(result)
})

router.post('/cancion', async(req, res) => {
const {titulo, artista, tono} = req.body
const cancion = [titulo, artista, tono]
const result = await addData(cancion)
console.log(result.rows)
res.json(result)

})


export default router

