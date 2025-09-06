# 💬 ConvoHub - Real-Time Chat Application

A comprehensive real-time chat application built with the MERN stack, featuring Socket.io for instant messaging, JWT authentication, and a modern glassmorphism UI.

## ✨ **Features**

### 🔐 **Authentication System**

- **User Registration & Login**: Secure JWT-based authentication with bcrypt password hashing
- **Password Management**: Show/hide password toggle for enhanced UX
- **Form Validation**: Comprehensive input validation and error handling
- **Session Management**: Persistent login state with Redux Persist
- **Secure Logout**: Complete session cleanup and token invalidation
- **Toast Notifications**: Real-time user feedback for all actions

### 💬 **Real-Time Messaging**

- **Instant Messaging**: Socket.io powered real-time communication
- **Online Status**: Live user presence indicators
- **Message History**: Persistent message storage with MongoDB
- **User Selection**: Interactive sidebar for conversation management
- **Message Timestamps**: Automatic message timing and organization
- **Typing Indicators**: Real-time typing status (ready for implementation)

### 📱 **Mobile-First Design**

- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Touch-Friendly**: Enhanced mobile scrolling and touch interactions
- **Adaptive Layout**: Dynamic sizing based on screen dimensions
- **Mobile Scrolling**: Smooth scrolling with momentum on iOS/Android
- **Responsive Breakpoints**: Tailored experiences across all devices

### 🎨 **Modern UI/UX**

- **Landing Page**: Professional welcome page with hero section and feature highlights
- **About Page**: Comprehensive information page with navigation and call-to-action
- **Glassmorphism Design**: Beautiful glass-effect components with backdrop blur
- **Animated Background**: Dynamic gradient background with overlay effects
- **Smooth Animations**: Framer Motion-inspired transitions and effects
- **Professional Styling**: Clean, modern interface with Tailwind CSS + DaisyUI
- **Dark Theme**: Elegant dark mode design throughout the application
- **Loading States**: User feedback during operations and data loading

### 🏗️ **Core Application Features**

- **User Management**: Complete user profile system with avatars
- **Conversation Management**: Multiple chat conversations support
- **Message Container**: Expandable message interface for better UX
- **Sidebar Navigation**: User list with online status and selection
- **Send Message**: Rich message input with real-time sending
- **Message Display**: Organized message bubbles with sender identification

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/abedin-ansari/Conovohub-ChatApp.git
   cd ConvoHub
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the backend directory:

   ```env
   PORT=7000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret_key
   NODE_ENV=development
   ```

5. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

6. **Start the Frontend Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

7. **Open in your browser**
   Navigate to: `http://localhost:5173`

### **Build for Production**

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## 🛠️ **Tech Stack**

### **Backend (Node.js/Express)**

- **Express.js** - Fast, unopinionated web framework
- **MongoDB & Mongoose** - NoSQL database with elegant object modeling
- **Socket.io** - Real-time bidirectional event-based communication
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing and security
- **CORS** - Cross-origin resource sharing configuration
- **Cookie Parser** - HTTP cookie parsing middleware

### **Frontend (React/Vite)**

- **React 19** - Modern React with latest features and hooks
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - Efficient Redux development with modern patterns
- **Redux Persist** - State persistence across browser sessions
- **React Router DOM** - Declarative client-side routing
- **Socket.io-client** - Real-time client-side communication

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **DaisyUI** - Tailwind CSS component library
- **React Hot Toast** - Beautiful toast notifications
- **React Icons** - Popular icon library with Font Awesome support

### **Development Tools**

- **Nodemon** - Automatic server restart during development
- **ESLint** - Code quality and consistency enforcement
- **Axios** - Promise-based HTTP client for API requests

## 📁 **Project Structure**

```
ConvoHub/
├── backend/                   # Node.js/Express backend
│   ├── config/               # Configuration files
│   │   └── database.js       # MongoDB connection setup
│   ├── controllers/          # Request handlers
│   │   ├── messageController.js  # Message CRUD operations
│   │   └── userController.js     # User authentication & management
│   ├── middleware/           # Custom middleware
│   │   └── isAuthenticated.js    # JWT authentication middleware
│   ├── models/               # Mongoose schemas
│   │   ├── conversationModel.js  # Conversation data model
│   │   ├── messageModel.js       # Message data model
│   │   └── userModel.js          # User data model
│   ├── routes/               # API route definitions
│   │   ├── messageRoute.js       # Message-related endpoints
│   │   └── userRoute.js          # User-related endpoints
│   ├── socket/               # Socket.io configuration
│   │   └── socket.js             # Real-time event handling
│   ├── .env                  # Environment variables
│   ├── package.json          # Backend dependencies
│   └── index.js              # Server entry point
├── frontend/                 # React/Vite frontend
│   ├── public/               # Static assets
│   │   ├── ConvoHubBG.png    # Background image
│   │   └── vite.svg          # Vite logo
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── LandingPage.jsx   # Landing page with hero section
│   │   │   ├── About.jsx         # About page with features
│   │   │   ├── HomePage.jsx      # Main chat interface
│   │   │   ├── Login.jsx         # Login form component
│   │   │   ├── Register.jsx      # Registration form
│   │   │   ├── Sidebar.jsx       # User list sidebar
│   │   │   ├── MessageContainer.jsx  # Message display area
│   │   │   ├── Messages.jsx      # Message list component
│   │   │   ├── Message.jsx       # Individual message bubble
│   │   │   ├── SendMessage.jsx   # Message input component
│   │   │   └── OtherUsers.jsx    # User list item component
│   │   ├── CustomHooks/      # Custom React hooks
│   │   │   ├── useGetMessages.js     # Message fetching hook
│   │   │   ├── useGetOtherUsers.js   # User list hook
│   │   │   ├── useGetRealTimeMessage.js  # Socket message hook
│   │   │   └── useSendMessage.js     # Message sending hook
│   │   ├── utils/            # Utility functions and Redux
│   │   │   ├── store.js          # Redux store configuration
│   │   │   ├── userSlice.js      # User state management
│   │   │   ├── messageSlice.js   # Message state management
│   │   │   └── socketSlice.js    # Socket state management
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Global styles and Tailwind imports
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   └── tailwind.config.js    # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## 🔐 **Authentication Flow**

### **1. User Registration**

- User fills out registration form with full name, username, gender, and password
- Password is hashed using bcrypt before storage
- User profile is created with auto-generated avatar
- JWT token is generated and stored in HTTP-only cookies
- Automatic redirect to chat interface

### **2. User Login**

- User enters username and password
- Credentials are validated against MongoDB
- JWT token is generated and stored securely
- User state is updated in Redux store
- Real-time socket connection is established

### **3. Session Management**

- JWT tokens are validated on each protected route
- Redux Persist maintains user state across browser sessions
- Socket connections are managed per authenticated user
- Automatic logout on token expiration

## 💬 **Real-Time Communication**

### **Socket.io Implementation**

- **Connection Management**: Automatic connection on user login
- **Online Users**: Real-time tracking of connected users
- **Message Broadcasting**: Instant message delivery to recipients
- **Presence Indicators**: Live online/offline status updates
- **Room Management**: User-specific socket rooms for targeted messaging

### **Message Flow**

1. User types message in SendMessage component
2. Message is sent via Socket.io to the server
3. Server validates and stores message in MongoDB
4. Message is broadcast to the recipient's socket room
5. Recipient receives message in real-time via useGetRealTimeMessage hook
6. UI updates instantly with new message bubble

## 📱 **Mobile Responsiveness**

### **Responsive Breakpoints**

- **Mobile**: `< 640px` - Full-screen chat interface
- **Tablet**: `640px - 1024px` - Balanced sidebar and message area
- **Desktop**: `> 1024px` - Expanded message container for better UX
- **Large Desktop**: `> 1280px` - Maximum width with centered layout

### **Mobile Features**

- Touch-optimized scrolling with momentum
- Full-screen chat interface on mobile devices
- Responsive form sizing (larger on laptops, mobile-optimized on phones)
- Smooth scroll behavior for message history
- Touch-friendly buttons and interactive elements

## 🎨 **UI Components**

### **Login/Register Forms**

- Glassmorphism design with backdrop blur effects
- Responsive sizing (larger on laptop screens)
- Password visibility toggle with eye icons
- Form validation with error handling
- Smooth transitions and hover effects

### **Chat Interface**

- Expandable message container (650px+ on larger screens)
- Real-time online status indicators
- Message bubbles with sender identification
- Smooth scrolling message history
- Professional glassmorphism styling throughout

### **Sidebar Navigation**

- User list with profile photos
- Online status indicators
- User selection for conversations
- Responsive design for mobile and desktop

## 🔧 **Configuration**

### **Backend Configuration**

```javascript
// Key configurations in backend
PORT: 7000 (configurable via environment)
CORS: Enabled for frontend origin
Socket.io: Real-time communication setup
JWT: Secure token-based authentication
MongoDB: Mongoose ODM with connection pooling
```

### **Frontend Configuration**

```javascript
// Key configurations in frontend
Vite: Fast development server and building
Redux: State management with persistence
Socket.io: Real-time client connection
Tailwind: Utility-first CSS framework
```

## 🚀 **Deployment**

### **Backend Deployment**

```bash
# Production build
npm install --production
npm start

# Environment variables required:
# - MONGO_URI
# - JWT_SECRET_KEY
# - NODE_ENV=production
```

### **Frontend Deployment**

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to platforms like Vercel, Netlify, or custom server
```

### **Deployment Platforms**

- **Backend**: Railway, Render, Heroku, DigitalOcean
- **Frontend**: Vercel, GitHub Pages
- **Database**: MongoDB Atlas (recommended for production)

## 📋 **Available Scripts**

### **Backend Scripts**

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run backend tests (if configured)

### **Frontend Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🧪 **Testing**

The application has been thoroughly tested for:

- ✅ User authentication and authorization
- ✅ Real-time message sending and receiving
- ✅ Mobile responsiveness across devices
- ✅ Socket.io connection management
- ✅ Redux state management and persistence
- ✅ Error handling and user feedback
- ✅ Cross-browser compatibility

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🆘 **Support**

For support or questions:

- Create an issue in the repository
- Check the documentation and code examples
- Review the project structure and implementation

## 🎯 **Project Status**

**Current Status**: **PRODUCTION-READY** ✅

- **Authentication**: Complete and secure with JWT
- **Real-Time Messaging**: Fully functional with Socket.io
- **Mobile Experience**: Responsive and touch-optimized
- **Code Quality**: Professional-grade implementation
- **Features**: All core functionality implemented
- **Documentation**: Comprehensive and up-to-date

## 🔮 **Future Enhancements**

- **File Sharing**: Image and document sharing capabilities
- **Group Chats**: Multi-user conversation support
- **Message Reactions**: Emoji reactions to messages
- **Typing Indicators**: Real-time typing status
- **Message Search**: Search through conversation history
- **Push Notifications**: Browser and mobile notifications
- **Voice Messages**: Audio message support
- **Video Calls**: WebRTC integration for video communication

---

**Built with ❤️ By Jainul Abedin using the MERN Stack, Socket.io, and modern web technologies**
