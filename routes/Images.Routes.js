import express from 'express';
import { single, uploadUserImage} from '../controllers/NubeController.js';

const router = express.Router();

router.post('/users/:id', single, uploadUserImage);

export default router;