![MERN](https://img.shields.io/badge/Stack-MERN-green)
![Status](https://img.shields.io/badge/Status-Production--Ready-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Made By](https://img.shields.io/badge/Made%20By-Aditya%20Sharma-orange)

# 💼 # 🚀 HireFlow — Modern MERN Job Platform

A **production-style hiring platform named HireFlow** built with the MERN stack that simulates real-world hiring workflows including recruiter dashboards, live search, personalized job saving, and polished UX interactions.

Designed as a **portfolio-grade full-stack system** showcasing scalable backend architecture, secure authentication, and modern frontend UX patterns.

---

## 🚀 Live Capabilities

### 👤 Authentication & Roles

- JWT-based authentication
- Role-based access control (Applicant / Recruiter)
- Protected routes & API guards

### 🧑‍💼 Recruiter System

- Post jobs with structured metadata
- Recruiter dashboard with job management
- Delete jobs with real-time UI updates
- Candidate shortlisting system

### 🔍 Smart Job Discovery

- Live keyword search (debounced)
- Backend-powered filtering system
- Saved jobs bookmarking
- Personalized job feeds

### ⭐ Personalization Features

- Save / unsave jobs
- Recruiter shortlists with notes
- Public user profiles
- Profile enrichment (skills, links, bio)

### ✨ Premium UX Features

- Skeleton loaders for smooth loading states
- Toast notifications (react-hot-toast)
- Micro-interactions & hover animations
- Empty-state UI polish

---

## 🧠 Architecture Highlights

- Modular Express architecture (controllers, services, middleware)
- RESTful API design
- JWT auth with middleware guards
- MongoDB relational modeling (Users ↔ Jobs ↔ Applications)
- Compatibility layer for scalable API evolution
- Clean separation of frontend & backend concerns

---

## 🛠 Tech Stack

### 🎨 Frontend

- React (Vite)
- React Router DOM
- Axios
- Context API (Auth state)
- Skeleton loaders + Toast UX

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Role-based Middleware
- Modular Service Layer

### ☁️ Database

- MongoDB Atlas (Cloud-ready)

---

## 📂 Project Structure

HireFlow
├── .gitignore
├── .vscode
│ └── settings.json
├── backend
│ ├── .env
│ ├── .gitignore
│ ├── config
│ │ └── db.js
│ ├── constants
│ │ └── roles.js
│ ├── controllers
│ │ ├── applicationController.js
│ │ ├── authController.js
│ │ ├── jobController.js
│ │ └── userController.js
│ ├── docs
│ │ └── api.md
│ ├── middleware
│ │ ├── authMiddleware.js
│ │ ├── errorMiddleware.js
│ │ ├── notFoundMiddleware.js
│ │ └── roleMiddleware.js
│ ├── models
│ │ ├── Application.js
│ │ ├── Job.js
│ │ └── User.js
│ ├── package-lock.json
│ ├── package.json
│ ├── routes
│ │ ├── applicationRoutes.js
│ │ ├── authRoutes.js
│ │ ├── jobRoutes.js
│ │ └── userRoutes.js
│ ├── server.js
│ ├── services
│ │ ├── applicationService.js
│ │ ├── authService.js
│ │ ├── jobService.js
│ │ └── userService.js
│ └── utils
│ ├── generateToken.js
│ └── validators.js
├── frontend
│ ├── .env
│ ├── .gitignore
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── postcss.config.js
│ ├── public
│ │ └── logo.svg
│ ├── src
│ │ ├── App.jsx
│ │ ├── assets
│ │ │ ├── api
│ │ │ │ └── axios.js
│ │ │ ├── components
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── JobCard.jsx
│ │ │ │ ├── Navbar.jsx
│ │ │ │ ├── ProtectedRoute.jsx
│ │ │ │ └── SkeletonCard.jsx
│ │ │ ├── context
│ │ │ │ └── AuthContext.jsx
│ │ │ ├── layouts
│ │ │ │ └── MainLayout.jsx
│ │ │ ├── pages
│ │ │ │ ├── Applications.jsx
│ │ │ │ ├── Dashboard.jsx
│ │ │ │ ├── Home.jsx
│ │ │ │ ├── JobDetails.jsx
│ │ │ │ ├── Login.jsx
│ │ │ │ ├── PostJob.jsx
│ │ │ │ ├── Profile.jsx
│ │ │ │ ├── Recruiters.jsx
│ │ │ │ ├── Register.jsx
│ │ │ │ ├── Saved.jsx
│ │ │ │ ├── Shortlist.jsx
│ │ │ │ └── UserProfile.jsx
│ │ │ ├── routes
│ │ │ │ └── AppRoutes.jsx
│ │ │ ├── styles
│ │ │ │ └── global.css
│ │ │ └── utils
│ │ │ └── helpers.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── tailwind.config.js
│ └── vite.config.js
├── open-browser.js
├── package-lock.json
├── package.json
├── README.md
└── scripts
├── dev-runner.js
└── doctor.js

---

## 🎯 Key Engineering Highlights

- Built with **scalable folder architecture**
- Designed with **real hiring platform workflows**
- Implements **production-grade UX polish**
- Demonstrates **full-stack ownership**
- Portfolio-focused **clean codebase**

---

## 📸 Screenshots

> Add screenshots here:

- Home with skeleton loading
- Recruiter dashboard
- Saved jobs page
- Profile page

---

## ⚙️ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/aadi-droid1126/job-portal.git
cd job-portal

👨‍💻 Author

Aditya Sharma

GitHub: https://github.com/aadi-droid1126

LinkedIn: https://linkedin.com/in/aaditya-sharma-/
💼 Resume Bullet

Full-stack MERN HireFlow

Built HireFlow—a production-style job platform with recruiter dashboards, live search, skeleton loaders, and personalized workflows using the MERN stack, implementing JWT authentication and modular backend architecture.

---

# 🏆 What this README just did

This transforms your repo into:
- Recruiter-friendly
- Professional
- Authority-building

It now signals:
> “This dev understands full-stack systems”

---

# 🚀 Next (Step 2 of Bucket G)

Now we optimize **GitHub positioning**:
- Repo name
- Description
- Tags
- Pin strategy

This massively boosts profile impact.

Say:
**optimize repo** 🚀
```
