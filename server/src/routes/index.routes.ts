import { Router } from 'express';
import { indexWelcome } from '../controllers/index.controller';

const router = Router();

router.get('/', indexWelcome); // /google/oauth

export default router;