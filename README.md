# 🛍️ Product Management System

A frontend-only **Product Management System** built with **React.js** and **JSON Server** as a mock REST API. It supports role-based access (Admin & User), product CRUD operations, order placement, and user management — all without a traditional backend.

---

## 🔗 Repository

```bash
git clone https://github.com/Manvendra-2006/product-management-system.git
cd product-management-system
```

---

## 📁 Project Structure

```
product-management-system/
├── public/
├── src/
│   ├── Auth/
│   │   ├── Login.jsx               # Login page
│   │   └── SignUp.jsx              # Sign up page
│   ├── AuthProvider/
│   │   └── AuthProvider.jsx        # Global auth context (React Context API)
│   ├── DashBoard/
│   │   ├── AdminDashBoard.jsx      # Admin dashboard view
│   │   └── UserDashBoard.jsx       # User dashboard view
│   ├── Data/
│   │   └── db.json                 # JSON Server mock database
│   ├── Others/
│   │   ├── AddProduct.jsx          # Add new product form
│   │   ├── EditProduct.jsx         # Edit existing product form
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Header.jsx              # Header / Navbar component
│   │   ├── OrderPlaced.jsx         # Order confirmation page
│   │   ├── ProductCards.jsx        # Individual product card component
│   │   ├── ProductList.jsx         # List of all products
│   │   ├── TotalNoOrder.jsx        # Total orders count display
│   │   ├── UserInfo.jsx            # User information display
│   │   ├── UserList.jsx            # List of all users (Admin only)
│   │   ├── UserProfile.jsx         # User profile page
│   │   ├── userDetail.jsx          # Detailed view of a single user
│   │   └── userOrder.jsx           # Orders placed by a user
│   ├── assets/                     # Images and static assets
│   ├── App.css
│   ├── App.jsx                     # Main app component with routing
│   ├── index.css
│   └── main.jsx                    # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Frontend       | React.js (Vite)                   |
| Routing        | React Router DOM                  |
| State / Auth   | React Context API                 |
| Mock API       | JSON Server (`db.json`)           |
| Styling        | CSS                               |
| Build Tool     | Vite                              |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) >= 18.x
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/Manvendra-2006/product-management-system.git
cd product-management-system
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start JSON Server (Mock API)

JSON Server reads from `src/Data/db.json` and serves it as a REST API on port **3000**.

```bash
npx json-server --watch src/Data/db.json --port 3000
```

The mock API will be available at: `http://localhost:3000`

---

### 4. Start the React App

Open a **new terminal** and run:

```bash
npm run dev
```

The frontend will run at: `http://localhost:5173`

---

## 🗃️ Mock Database — `db.json`

The `src/Data/db.json` file acts as the database for JSON Server. It contains collections for users, products, and orders.

```json
{
  "users": [
    {
      "id": 1,
      "name": "Manvendra",
      "email": "admin@example.com",
      "password": "admin123",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "user123",
      "role": "user"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "price": 499,
      "category": "Electronics",
      "stock": 20,
      "image": "https://via.placeholder.com/150"
    }
  ],
  "orders": [
    {
      "id": 1,
      "userId": 2,
      "productId": 1,
      "quantity": 1,
      "status": "Confirmed"
    }
  ]
}
```

---

## 📡 JSON Server API Endpoints

JSON Server automatically generates REST endpoints from `db.json`.

### 👤 Users — `http://localhost:3000/users`

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/users`       | Get all users            |
| GET    | `/users/:id`   | Get a specific user      |
| POST   | `/users`       | Register a new user      |
| PUT    | `/users/:id`   | Update user details      |
| DELETE | `/users/:id`   | Delete a user            |

---

### 📦 Products — `http://localhost:3000/products`

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/products`       | Get all products         |
| GET    | `/products/:id`   | Get a specific product   |
| POST   | `/products`       | Add a new product        |
| PUT    | `/products/:id`   | Update a product         |
| DELETE | `/products/:id`   | Delete a product         |

---

### 🧾 Orders — `http://localhost:3000/orders`

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/orders`       | Get all orders           |
| GET    | `/orders/:id`   | Get a specific order     |
| POST   | `/orders`       | Place a new order        |
| DELETE | `/orders/:id`   | Cancel an order          |

---

## 🔐 Authentication

Authentication is handled entirely on the **frontend** using **React Context API** (`AuthProvider.jsx`).

### How it works

1. On **Sign Up**, user data is `POST`ed to `http://localhost:3000/users` via JSON Server.
2. On **Login**, the email and password are matched against users fetched from JSON Server.
3. On successful login, the user object is stored in **React Context** (global state).
4. Role-based routing then redirects the user to either the **Admin Dashboard** or **User Dashboard**.
5. On **Logout**, the context is cleared and the user is redirected to the Login page.

### AuthProvider — Global State

```jsx
// AuthProvider/AuthProvider.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

---

## 👥 Role-Based Access

| Feature                  | Admin | User |
|--------------------------|-------|------|
| View all products        | ✅    | ✅   |
| Add a product            | ✅    | ❌   |
| Edit a product           | ✅    | ❌   |
| Delete a product         | ✅    | ❌   |
| Place an order           | ❌    | ✅   |
| View own orders          | ❌    | ✅   |
| View all users           | ✅    | ❌   |
| View user details        | ✅    | ❌   |
| View total orders count  | ✅    | ❌   |
| View own profile         | ✅    | ✅   |

---

## 🧩 Components Overview

| Component           | Description                                          |
|---------------------|------------------------------------------------------|
| `Login.jsx`         | Login form — validates credentials against db.json   |
| `SignUp.jsx`        | Registration form — adds new user to db.json         |
| `AuthProvider.jsx`  | Provides global auth state via React Context         |
| `AdminDashBoard.jsx`| Main view for admin with all management options      |
| `UserDashBoard.jsx` | Main view for regular users                          |
| `ProductList.jsx`   | Displays all products in a list/grid                 |
| `ProductCards.jsx`  | Individual card UI for a single product              |
| `AddProduct.jsx`    | Form to add a new product (Admin only)               |
| `EditProduct.jsx`   | Form to edit an existing product (Admin only)        |
| `OrderPlaced.jsx`   | Confirmation screen after order is placed            |
| `userOrder.jsx`     | Shows all orders placed by the logged-in user        |
| `TotalNoOrder.jsx`  | Displays total number of orders (Admin view)         |
| `UserList.jsx`      | Shows all registered users (Admin only)              |
| `UserInfo.jsx`      | Displays basic info of a user                        |
| `userDetail.jsx`    | Detailed view of a specific user (Admin only)        |
| `UserProfile.jsx`   | Profile page for the logged-in user                  |
| `Header.jsx`        | Top navigation bar with role-aware links             |
| `Footer.jsx`        | Footer displayed across all pages                    |

---

## 📦 Dependencies

```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "react-router-dom": "^6.x.x"
}
```

### Dev Dependencies

```json
{
  "vite": "^5.x.x",
  "@vitejs/plugin-react": "^4.x.x",
  "eslint": "^8.x.x",
  "json-server": "^0.17.x"
}
```

---

## 📝 Available Scripts

| Script              | Description                              |
|---------------------|------------------------------------------|
| `npm run dev`       | Start the React development server       |
| `npm run build`     | Build the project for production         |
| `npm run preview`   | Preview the production build locally     |
| `npx json-server --watch src/Data/db.json --port 3000` | Start the mock API server |

---

## 📌 Future Enhancements

- [ ] Persistent login using `localStorage`
- [ ] Search and filter products
- [ ] Pagination for product and user lists
- [ ] Real backend integration (Node.js + MongoDB)
- [ ] JWT-based authentication
- [ ] Product image upload support
- [ ] Export orders as PDF / CSV

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request on GitHub

---

## 👤 Author

**Manvendra**
- GitHub: [@Manvendra-2006](https://github.com/Manvendra-2006)
- Repository: [product-management-system](https://github.com/Manvendra-2006/product-management-system)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

> Built with ❤️ using React.js + JSON Server
