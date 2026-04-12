# 🍔 QuickBite – Modern Food Ordering React Template

QuickBite is a fully responsive food ordering marketplace built with React and Tailwind CSS. It includes cart functionality, checkout flow, filtering, pagination, and modern UI design.

---

Tech Stack
• React
• Tailwind CSS
• React Router

---


## 🚀 Features

- Modern responsive UI
- Real cart system with localStorage persistence
- Filtering & sorting meals
- Pagination system
- Checkout form with validation
- Dynamic payment UI
- Order success page
- Mobile optimized
- Clean folder structure
- Easy customization
- Dark mode
- WhatsApp order integration

---

## 📦 Installation

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── context/
 ├── data/
 ├── assets/
```

---

## 🍽 How To Edit Meals

Go to:

```
src/data/meals.js
```

You can add, remove or edit meals here.

Each meal object follows this structure:

```js
{
  id: 1,
  name: "Burger",
  price: 4500,
  category: "Fast Food",
  image: "/images/burger.jpg"
}
```

---

## 🗂 How To Edit Categories

Edit:

```
src/data/categories.js
```

---

## 🎨 How To Change Theme Colors

Open:

```
tailwind.config.js
```

Modify the `colors` section:

```js
colors: {
  primary: "#FF6B00",
  secondary: "#222222"
}
```

---

## 🛒 Cart System

Cart is stored in localStorage under:

```
quickbite-cart
```

It persists automatically on refresh.

---

## 💳 Payment System

This template includes a demo payment UI for presentation purposes only.

To integrate real payment:

- Stripe
- Paystack
- Flutterwave

---

## 📱 Responsive Design

Optimized for:

- Mobile
- Tablet
- Desktop

---

## Backend Integration

This template is frontend-only.

You can integrate any backend of your choice such as:

- Node.js + Express
- Firebase
- Supabase
- Laravel API
- Django REST

All API connection points are clearly structured for easy integration.

---

## 📄 License

This template is for commercial resale and personal use.

---

## 🤝 Support

For support or customization requests, contact the author.