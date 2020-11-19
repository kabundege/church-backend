import { Router } from 'express';
import User from '../../controllers/users';
import Validate from '../../middleware/validate';

const router = Router();

router.post('/signup', Validate.SignUpValidation, User.Signup)

router.post('/signin', Validate.SignInValidation, User.Signin)

export default router;
