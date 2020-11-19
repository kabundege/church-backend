import { Router } from 'express';
import role from '../../middleware/role';
import Books from '../../controllers/booking';
import validate from '../../middleware/validate'
import { authorizationCheck } from '../../middleware/auth';

const router = Router();

router.post('/books', authorizationCheck, role('Christian','Manager', 'Pastor'), validate.BookingValidation, Books.Book)

router.get('/books', authorizationCheck, role('Manager', 'Pastor'), Books.GetAllBooks)

export default router;
