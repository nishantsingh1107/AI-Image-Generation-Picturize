import express from 'express'
import { loginUser, paymentStripe, registerUser, userCredits } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/credits', userAuth, userCredits);
userRouter.post('/create-payment-intent', userAuth, paymentStripe);

export default userRouter

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login