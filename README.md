# 🎨 Picturize - AI-Powered Text-to-Image Generator

A modern full-stack web application that transforms text prompts into stunning AI-generated images using the MERN stack and Clipdrop API.

🌐 **Live Demo**: [https://picturize.vercel.app/](https://picturize.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **AI Image Generation**: Convert text prompts into high-quality images using Clipdrop API
- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Credit System**: Users purchase credits to generate images with different pricing plans
- **Payment Integration**: Stripe checkout for seamless credit purchases
- **Responsive Design**: Modern UI built with Tailwind CSS and optimized for all devices
- **Real-time Updates**: Dynamic credit balance updates and user state management
- **Secure Backend**: RESTful API with middleware authentication and error handling

## 🛠️ Built With

<p align="center">
  <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-red?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
</p>

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with hooks and context
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications
- **Stripe React** - Payment processing components

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Stripe** - Payment processing
- **Clipdrop API** - AI image generation service

## 📁 Project Structure

```
Picturize/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── context/        # React Context API
│   │   ├── assets/         # Static assets and images
│   │   └── App.jsx         # Main application component
│   ├── public/
│   └── package.json
└── server/                 # Backend Node.js application
    ├── config/             # Database configuration
    ├── controllers/        # Route handlers
    ├── middlewares/        # Custom middleware
    ├── models/             # Database schemas
    ├── routes/             # API routes
    └── server.js           # Entry point
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- Stripe account for payment processing
- Clipdrop API key

### Clone the Repository
```bash
git clone https://github.com/nishantsingh1107/AI-Image-Generation-Picturize
cd picturize
```

### Backend Setup
```bash
cd server
npm install
```

### Frontend Setup
```bash
cd client
npm install
```

## 🔧 Environment Variables

### Server (.env)
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIPDROP_API=your_clipdrop_api_key
FRONTEND_URL=http://localhost:5173
```

### Client (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

## 💻 Usage

### Development Mode

1. **Start the Backend Server**
```bash
cd server
npm run dev
```

2. **Start the Frontend Development Server**
```bash
cd client
npm run dev
```

3. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

### Production Build

1. **Build the Frontend**
```bash
cd client
npm run build
```

2. **Start the Production Server**
```bash
cd server
npm start
```

## 🔗 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/credits` - Get user credits (protected)

### Image Generation
- `POST /api/image/generate-image` - Generate AI image (protected)

### Payment
- `POST /api/user/create-payment-intent` - Create Stripe checkout session (protected)

## 🎯 Key Features Explained

### Credit System
- Users start with a limited number of free credits
- Credits are consumed for each image generation
- Multiple pricing plans available (Basic, Advanced, Business)
- Real-time credit balance updates

### Security
- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes with middleware
- Secure payment processing with Stripe

### User Experience
- Responsive design for all screen sizes
- Real-time notifications with toast messages
- Loading states and error handling
- Intuitive navigation and user interface

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Clipdrop API](https://clipdrop.co/) for AI image generation
- [Stripe](https://stripe.com/) for payment processing
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database
- [Tailwind CSS](https://tailwindcss.com/) for styling


Project Link: [https://github.com/nishantsingh1107/AI-Image-Generation-Picturize](https://github.com/nishantsingh1107/AI-Image-Generation-Picturize)

---

⭐ **Star this repository if you found it helpful!** ⭐
