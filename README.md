https://next-store-lemon.vercel.app/# Next Store

## Short Project Description

Next Store is a modern e-commerce platform built with Next.js 16, featuring user authentication via NextAuth, product management with MongoDB, and a responsive UI styled with Tailwind CSS and DaisyUI. It includes features like user registration, login, product listing, individual product pages, and a dashboard for managing products.

## Live Demo

Visit the live website at: [https://next-store-lemon.vercel.app/](https://next-store-lemon.vercel.app/)

## Folder Structure

```
next-store/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── public/
│   └── logo.png
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   ├── page.js
    │   ├── (Auth)/
    │   │   ├── login/
    │   │   │   ├── layout.jsx
    │   │   │   └── page.js
    │   │   └── register/
    │   │       ├── layout.jsx
    │   │       └── page.jsx
    │   ├── about-us/
    │   │   ├── layout.jsx
    │   │   └── page.jsx
    │   ├── api/
    │   │   ├── auth/
    │   │   │   └── [...nextauth]/
    │   │   │       └── route.jsx
    │   │   ├── products/
    │   │   │   └── route.jsx
    │   │   └── users/
    │   │       └── register/
    │   │           └── route.jsx
    │   ├── dashboard/
    │   │   ├── add-product/
    │   │   │   └── page.jsx
    │   │   ├── edit-product/
    │   │   │   └── [id]/
    │   │   │       └── page.jsx
    │   │   └── manage-products/
    │   │       └── page.jsx
    │   ├── features/
    │   │   ├── layout.jsx
    │   │   └── page.jsx
    │   └── products/
    │       ├── layout.jsx
    │       ├── page.jsx
    │       └── [id]/
    │           └── page.jsx
    ├── components/
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── ProtectedWrapper.jsx
    │   ├── Providers.jsx
    │   ├── home/
    │   │   ├── Banner.jsx
    │   │   ├── CallToAction.jsx
    │   │   ├── Categories.jsx
    │   │   ├── Features.jsx
    │   │   └── Testimonials.jsx
    │   └── products/
    │       └── ItemCard.jsx
    └── lib/
        └── mongodb.js
```

## Setup & Installation Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd next-store
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following variables:

   - `MONGODB_URI`: Your MongoDB connection string
   - `NEXTAUTH_SECRET`: A secret key for NextAuth
   - `NEXTAUTH_URL`: The base URL of your application (e.g., http://localhost:3000 for development)

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Route Summary

### Public Routes

- `/` : Home page with banner, features, categories, testimonials, and call-to-action sections
- `/about-us` : About us page
- `/products` : Products listing page
- `/products/[id]` : Individual product detail page
- `/features` : Features page

### Authentication Routes

- `/register` : User registration page
- `/login` : User login page

### Protected Dashboard Routes

- `/dashboard/add-product` : Add new product (requires authentication)
- `/dashboard/manage-products` : Manage existing products (requires authentication)
- `/dashboard/edit-product/[id]` : Edit a specific product (requires authentication)

### API Routes

- `/api/auth/[...nextauth]` : Handles authentication (login, logout, session management)
- `/api/products` : CRUD operations for products
- `/api/users/register` : User registration endpoint
