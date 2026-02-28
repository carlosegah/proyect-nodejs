import {Router} from "express";
const router = Router();
export default router;

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


const filtrarProductos = category => category ? products.filter(item => item.categories.includes(category)) : products; 

router.get('/products', (request, response) => {
    response.json(filtrarProductos(request.query.category));
})

function busqueda(name) {
    if(!name) { 
        return { 
            error: "El nombre es requerido.",
            status: 400
        };
    }

    const busquedaFiltrada = products.filter(((item) => item.name.toLowerCase().includes(name.toLowerCase())));

    if(busquedaFiltrada.length == 0) {
        return {
            error: "No se encontró el producto requerido.",
            status: 404
        };
    }

    return {
        data: busquedaFiltrada,
        status: 200
    };
}

router.get('/products/search', (request, response) => {
    const {name} = request.query;
    const aux = busqueda(name);
    (aux.status != 200 && aux.error) ? response.status(aux.status).json({ error: aux.error }) : response.json(aux.data);
}) 


router.get('/products/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const producto = products.find((item) => item.id === id);
    !producto ? response.status(404).json( {
        error: "No existe el producto"
    }) : response.json(producto);
});