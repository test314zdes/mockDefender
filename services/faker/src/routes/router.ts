import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/fool-me', controller.foolMe);

export { router };
