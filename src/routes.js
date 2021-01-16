import express from 'express';

import UserController from './app/controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/', (req, res) => userController.store(req, res));
router.get('/', (req, res) => userController.list(req, res));

export default router;
