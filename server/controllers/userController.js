import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';
import transactionModel from '../models/transactionModel.js'

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({
                isSucess: false,
                message: 'missing credentials'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { name, email, password: hashedPassword };

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({
            isSucess: true,
            token,
            user: { name: user.name }
        });
    } catch (error) {
        console.log("Error in user registration: ", error);
        res.json({
            isSucess: false,
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({
                isSucess: false,
                message: 'user not found!'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            return res.json({
                isSucess: true,
                token,
                user: { name: user.name }
            });
        } else {
            return res.json({
                isSucess: false,
                message: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.log("Error in user login: ", error);
        res.json({
            isSucess: false,
            message: error.message
        });
    }
};

const userCredits = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        res.json({
            isSucess: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (error) {
        console.log("Error in getting credits: ", error);
        res.json({
            isSucess: false,
            message: error.message
        });
    }
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentStripe = async (req, res) => {
    try {
        const { planId } = req.body;
        const user = await userModel.findById(req.userId);

        if (!user || !planId) {
            return res.json({
                isSucess: false,
                message: "Missing Details!"
            });
        }

        let credits, plan, amount;
        switch (planId) {
            case 'Basic':
                plan = 'Basic';
                credits = 100;
                amount = 599;
                break;
            case 'Advanced':
                plan = 'Advanced';
                credits = 500;
                amount = 1199;
                break;
            case 'Business':
                plan = 'Business';
                credits = 5000;
                amount = 1999;
                break;
            default:
                return res.json({
                    isSucess: false,
                    message: "Plan not found"
                });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: `${plan} Plan`,
                    },
                    unit_amount: amount * 100,
                },
                quantity: 1,
            }],
            success_url: `${process.env.FRONTEND_URL}/`,
            cancel_url: `${process.env.FRONTEND_URL}/buy`,
            metadata: {
                userId: req.userId,
                plan,
                credits
            }
        });

        res.json({
            isSucess: true,
            sessionId: session.id
        });

    } catch (error) {
        console.log("Stripe Checkout Error:", error);
        res.json({
            isSucess: false,
            message: error.message
        });
    }
};

export { registerUser, loginUser, userCredits, paymentStripe };