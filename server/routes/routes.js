import 'dotenv/config'
import { Router } from 'express';
import users from './api/users';

const router = Router();

const { Base_url } = process.env;

router.use(Base_url,users)

export default router;
