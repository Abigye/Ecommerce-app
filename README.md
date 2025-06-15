# 🛒 E-commerce Website

A responsive, multi-page e-commerce website built with **React**, **TypeScript**, and **Tailwind CSS**.

## Requirements

This project fulfills the following functional requirements:

- View a responsive layout optimized for desktop, tablet, and mobile screen sizes.
- See hover states for all interactive elements (buttons, links, etc.).
- Shopping Cart:
  - Add products to the cart from the home and product detail pages.
  - Remove products from the cart.
  - Update product quantities directly in the cart.
- Checkout Form:
  - All fields (Name, Email, Address) are required.
  - Displays validation messages for missing or incorrectly formatted input (e.g., invalid email).
- Order Total Calculation:
  - Subtotal based on product quantities and prices.
  - Fixed shipping cost of **$50**.
  - **20% VAT** calculated on the product total (excluding shipping).
- Order Confirmation Modal:
  - Shown after successful form submission.
  - Displays a thank-you message, user’s name/email, and a breakdown of the total paid.


## 💻 Tech Stack

- **React** (with React Router)
- **TypeScript**
- **Tailwind CSS**


## 📁 Project Structure

src/
├── components/      # Reusable UI components (Navbar, Footer, etc.)
├── pages/           # Main views: Home, ProductDetail, Cart, Checkout
├── products/        # JSON file with product data
├── types/           # TypeScript interfaces and types
├── utils/           # Utility functions (e.g., image handling)
├── assets/          # Product images
└── App.tsx          # Route layout and main app structure

