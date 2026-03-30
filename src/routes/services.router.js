import { Router } from 'express';
import {
  getAllServices,
  searchServices,
  idServices,
} from '../controllers/services.controllers.js';

const router = Router();

router.get('/services', getAllServices);
router.get('/services/search', searchServices);
router.get('/services/:id', idServices);

export default router;
