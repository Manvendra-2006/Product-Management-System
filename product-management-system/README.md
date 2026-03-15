# 🛒 Product Management System

A full-featured **Product Management System** built with **React + Vite** and **JSON Server** as mock REST API.

---

## 🚀 Features

- 🔐 Role-based Auth — Admin & User login
- 🛠️ Admin Dashboard — Products, Users, Orders management
- 👤 User Dashboard — Browse, Order, History
- 📦 Full CRUD — Add, Edit, Delete products
- 🔔 Toast Notifications via `react-toastify`

---

## 🧰 Tech Stack

| Tech | Use |
|---|---|
| React + Vite | Frontend |
| JSON Server | Mock REST API |
| React Router | Routing |
| React Toastify | Notifications |
| Context API | Auth State |

---

## ⚙️ Setup

```bash
# 1. Clone the repository
git clone https://github.com/Manvendra-2006/product-management-system.git
cd product-management-system
 
# 2. Install dependencies
npm install
 
# 3. Start JSON Server (port 3000)
npx json-server --watch src/Data/db.json --port 3000
 
# 4. Start React App
npm run dev
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET/POST | `/products` | All products / Add |
| PUT/DELETE | `/products/:id` | Update / Delete |
| GET/POST | `/users` | All users / Register |
| GET/POST | `/orders` | All orders / Place |
| GET | `/admins` | Admin credentials |

---

## 🗄️ Database Structure (`db.json`)

### 👤 Users (9 total)
```json
{
  "id": "99f4",
  "name": "User 1",
  "email": "user1@test.com",
  "password": "pass1"
}
```

### 🔴 Admin
```json
{
  "id": "1",
  "name": "Admin One",
  "email": "admin@test.com",
  "password": "admin123"
}
```

### 📦 Products (2 active)
```json
{ "productId": "115", "name": "Nike Shoes",    "price": "900",  "stock": 7  },
{ "productId": "113", "name": "Jacky ke jute", "price": "1600", "stock": 11 }
```

### 🛍️ Orders (10 total)
```json
{
  "id": "ord001",
  "orderId": 5001,
  "userId": "99f4",
  "date": "2026-03-01",
  "total": 4700,
  "items": [
    { "productId": 101, "name": "Nike Shoes",     "price": 3500, "quantity": 1 },
    { "productId": 102, "name": "Adidas T-shirt", "price": 1200, "quantity": 1 }
  ]
}
```

---

## 👥 Roles

| Role | Access |
|---|---|
| **Admin** | Full CRUD on products, view all users & orders |
| **User** | Browse products, place & view own orders |

---

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
```

---

## 🗂️ Folder Structure

```
src/
├── Auth/          # Login, SignUp
├── AuthProvider/  # Context API
├── DashBoard/     # Admin & User dashboards
├── Data/          # db.json (mock database)
└── Others/        # Products, Orders, User components
```

---

> ⭐ Pasand aaya toh **Star** zaroor dena!
