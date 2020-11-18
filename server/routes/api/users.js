import { Router } from 'express';
import User from '../../controllers/users';

const router = Router();

router.post('/signup', User.Signup)

router.post('/login', User.Signin)

export default router;
