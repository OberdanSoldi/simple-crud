import express from 'express';
const router = express.Router();

import { create, read, deleteRoute, patch } from './controllers/crudController.js';

router.get('/', read);
router.post('/', create);
router.delete('/:id', deleteRoute);
router.patch('/:id', patch);

export default router;