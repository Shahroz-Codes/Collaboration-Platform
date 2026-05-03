# Project & Task Manager (MVP)

A full‑stack project built with **Node.js, Express, MongoDB, JWT authentication (httpOnly cookies)** on the backend, and **React, Zustand, Tailwind CSS** on the frontend.  
This MVP demonstrates secure authentication, project management, and task tracking with a minimal UI.

---

## 🚀 Features
- **Authentication**
  - Signup, login, logout
  - JWT stored in httpOnly cookies
  - Protected routes middleware

- **Projects**
  - Create, list, and delete projects
  - Projects scoped to authenticated user

- **Tasks**
  - Create, update, and delete tasks
  - Tasks linked to projects
  - Ownership checks for security

- **Frontend**
  - React Router with protected routes
  - Zustand store for global auth state
  - Axios instance with `withCredentials: true`
  - Navbar + Homepage
  - Login & Register pages
  - Projects & Tasks pages
  - Logout integrated in Navbar


## 🛠 Tech Stack
**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (httpOnly cookies)
- Bcryptjs

**Frontend**
- React
- Zustand
- React Router
- Axios
- Tailwind CSS

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/signup | Register new user |
| POST | /api/auth/login | Login user |
| POST | /api/auth/logout | Logout user |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | Get all projects |
| POST | /api/projects | Create project |
| DELETE | /api/projects/:id | Delete project |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks/:projectId | Get tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## 📦 Requirements

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (for local instance)
- **Git** (for cloning the repository)

## ⚙️ Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev
```
### Configure .env with:

- MONGO_URI
- JWT_SECRET
- PORT
- Or just rename `env.sample` to `.env`

### Frontend

```bash
cd frontend
npm install
npm run dev
```
🎯 MVP Status
- ✅ Backend APIs complete
- ✅ Frontend integration done
- ✅ Auth + Projects + Tasks functional
- ✅ UI polish & responsive design
- ⬜ Dashboard (next milestone)

## 📸 Project Screenshots 
- Homepage
![Homepage Screenshot](./screenshots/homepage.png)

- Projects Page
![ Projects Page Screenshot](./screenshots/projectspage.png)

- Tasks Page
![ Projects Page Screenshot](./screenshots/taskspage.png)

- Signup Page
![ Projects Page Screenshot](./screenshots/signup.png)

## 👤 Author

Shahroz Shafqat  
Full‑stack Developer | MERN 

## 📄 License
MIT