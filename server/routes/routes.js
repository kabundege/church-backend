import 'dotenv/config'
import users from './api/users';
import { Router } from 'express';
import books from './api/bookings';

const router = Router();

const { Base_url } = process.env;

router.use(Base_url,users)
router.use(Base_url,books)

export default router;
