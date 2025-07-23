# 📝 Notes App - Full Stack MERN Application

## Demo Video:

https://github.com/user-attachments/assets/62022e40-1096-46f2-b3a3-89f230318aae

## Description:

A modern, responsive notes management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Create, edit, view, and delete your notes with a clean and intuitive interface.

## 🌟 Features

- **User Authentication**: Secure JWT-based authentication with login/signup
- **CRUD Operations**: Create, Read, Update, and Delete notes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Notes update instantly across the application
- **Search & Filter**: Find your notes quickly
- **Secure**: Protected routes and user-specific data access
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React.js** - User interface library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icons
- **React Hot Toast** - Elegant notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-Origin Resource Sharing

## 📸 Screenshots

![Image](https://github.com/user-attachments/assets/2b66ffca-fe4b-4fce-98ca-c3e0c8bb4844)
![Image](https://github.com/user-attachments/assets/f507268c-a690-4cd8-90c3-362b0aab383e)
![Image](https://github.com/user-attachments/assets/ebd90d71-fbda-4634-8964-b5fe846dcccb)
![Image](https://github.com/user-attachments/assets/4f777fa1-7dfe-4cea-96c6-836a89bfcc71)
<img width="1200" height="900" alt="Image" src="https://github.com/user-attachments/assets/871ef152-0772-4265-b78e-248883d5409f" />
![Image](https://github.com/user-attachments/assets/c39aa1f3-c8b0-4e22-812a-c6dbca44d784)
![Image](https://github.com/user-attachments/assets/6b5d20f7-ee5f-4246-b949-350071ee311d)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mani-420/Notes_app.git
   cd Notes_app
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the backend directory:

   ```env
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/notesapp
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=10d
   CORS_ORIGIN=http://localhost:5173
   ```

5. **Start the Application**

   Backend (Terminal 1):

   ```bash
   cd backend
   npm run dev
   ```

   Frontend (Terminal 2):

   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8080

## 📁 Project Structure

```
Notes_app/
├── backend/
│   ├── controllers/
│   │   ├── note.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── index.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── note.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── note.routes.js
│   │   └── user.routes.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── errorHandler.js
│   ├── app.js
│   ├── constants.js
│   └── index.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cards/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProfileInfo/
│   │   │   └── SearchBar/
│   │   ├── pages/
│   │   │   ├── AddNotes/
│   │   │   ├── EditNotes/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── NotFound/
│   │   │   ├── Signup/
│   │   │   └── ViewNote/
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── noteSlice/
│   │   │   └── userSlice/
│   │   ├── utils/
│   │   │   └── helper.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout

### Notes

- `GET /api/notes/` - Get all user notes
- `POST /api/notes/create-note` - Create a new note
- `GET /api/notes/:id` - Get a specific note
- `PUT /api/notes/edit/:id` - Update a note
- `DELETE /api/notes/delete/:id` - Delete a note

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Protected Routes**: Frontend and backend route protection
- **CORS Configuration**: Proper cross-origin resource sharing
- **Input Validation**: Server-side input validation
- **Error Handling**: Comprehensive error handling

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Modern dark interface
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback
- **Intuitive Navigation**: Easy-to-use interface

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Mani Ahmad**

- GitHub: [@Mani-420](https://github.com/Mani-420)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

⭐ Don't forget to give this project a star if you found it helpful!
