import express from 'express';
const app = express();

const products = [
    {
        id: 1,
        name: "Camiseta deportiva",
        price: 15000,
        categories: ['ropa', 'deportes', 'entrenamiento'],
    },
    {
        id: 2,
        name: "Zapatos deportivos",
        price: 97000,
        categories: ['calzado', 'deportes', 'entrenamiento'],        
    },
    {
        id: 3,
        name: "Auricular bluetooth",
        price: 23000,
        categories: ['auricular', 'vincha', 'multimedia'],
    },
    {
        id: 4,
        name: "Medias",
        price: 3000,
        categories: ['calzado', 'deportes', 'entrenamiento'],
    },
    {
        id: 5,
        name: "Smartband",
        price: 55000,
        categories: ['Smartbands & Smartwatchs', 'tecnologia wereable', 'Electrónica'],
    },
    {
        id: 6,
        name: "Celular: Motorola E68",
        price: 235000,
        categories: ['Celulares', 'Ofertas', 'Electrónica'],
    }
]

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenidos a mi API REST"
    });
});

app.use((request, response, next) => {
    response.json( {
        message: "Hola, este es mi primer API REST" 
    })
})

import notFound from './src/middlewares/not-found.js';
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});