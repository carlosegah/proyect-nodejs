import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const petitAnimalsId = `petitAnimals: ${uuidv4()}`;

const services = [
  {
    id: petitAnimalsId,
    name: 'Pequeños animales',
  },
  {
    id: uuidv4(),
    _id: 1,
    name: 'Peluquería',
    price: 40,
    categories: ['servicios', 'caninos', 'felinos'],
    categoriesId: petitAnimalsId,
  },
  {
    id: uuidv4(),
    _id: 2,
    name: 'Consulta veterinaria',
    price: 15,
    categories: ['servicios', 'general'],
    categoriesId: petitAnimalsId,
  },
  {
    id: uuidv4(),
    _id: 3,
    name: 'Vacunación y desparacitación',
    price: 35,
    categories: ['servicios', 'vacunación', 'desparacitación'],
    categoriesId: petitAnimalsId,
  },
  {
    id: uuidv4(),
    _id: 4,
    name: 'Laboratorio',
    price: 20,
    categories: ['servicios', 'laboratorio'],
    categoriesId: petitAnimalsId,
  },
  {
    id: uuidv4(),
    _id: 5,
    name: 'Profilaxis dental',
    price: 38,
    categories: ['servicios', 'general'],
    categoriesId: petitAnimalsId,
  },
];

router.get('/services', (request, response) => {
  const { category } = request.query;
  const servicesFiltered = services.filter((item) => {
    return item.categories?.includes(category);
  });

  return category ? response.json(servicesFiltered) : response.json(services);
});

router.get('/services/search', (request, response) => {
  const { name } = request.query;

  if (!name) {
    return response.status(400).json({
      error: 'El nombre es requerido',
    });
  }

  const servicesFiltered = services.filter((item) =>
    item.name.toLowerCase().includes(name.toLocaleLowerCase())
  );

  if (servicesFiltered.length === 0) {
    return response.status(404).json({
      error: 'No se encontró dicho servicio.',
    });
  }

  return response.json(servicesFiltered);
});

router.get('/services/:id', (request, response) => {
  const serviceId = parseInt(request.params.id);
  const service = services.find((item) => item._id == serviceId);

  if (!service) {
    response.status(404).json({
      error: 'No existe el servicio',
    });
  }
  response.json(service);
});

export default router;
