import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // or your frontend URL
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Other Middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb', extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes Import
import userRoute from './routes/user.routes.js';
import noteRoute from './routes/note.routes.js';

// Routes Declaration
app.use('/api/v1/users', userRoute);
app.use('/api/v1/notes', noteRoute);

export { app };
