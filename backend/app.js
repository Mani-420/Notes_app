import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// CORS Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, // Access-Control-Allow-Credentials: true
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Other Middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb', extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes Import
import userRoute from './routes/user.routes.js';

// Routes Declaration
app.use('/api/v1/users', userRoute);

export { app };
