const express = require('express')
const Contenedor = require('./archivos')
const productosContenedor = new Contenedor('productos.txt')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenidos a la libreria</h1><h3>/productos</h3><h3>/productosRandom</h3>`);
})

app.get('/productos', async (req, res) => {
    try {
        res.send(await productosContenedor.getAll());
    } catch (error) {
        console.error(error);
    }
});

app.get('/productosRandom', async (req, res) => {
    try{
        // let cantidadObjetos = productosContenedor.length
        // console.log(cantidadObjetos)
        let random = Math.floor(Math.random() * 6 + 1)
        res.json(await productosContenedor.getById(random))
    } catch (error) {
        console.error(error);
    }
})

const server = app.listen(PORT, () => {
    console.log(`Server runing...`)
})
server.on('error', e =>console.log(`Error en server`, e))