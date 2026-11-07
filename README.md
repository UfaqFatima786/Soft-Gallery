# 🌿 Soft Frames – React Image Gallery

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  A beautiful and responsive image gallery built with React, featuring dynamically fetched photographs, elegant hover effects, and interactive pagination.
</p>

<p align="center">
  🌐 **Live Demo:** https://soft-gallery-five.vercel.app/
</p>

---

## ✨ About The Project

**Soft Frames** is a modern and visually appealing image gallery application developed using React. It allows users to explore a collection of beautiful photographs fetched dynamically from the Picsum Photos API.

The application features a soft aesthetic design with elegant colors, smooth hover animations, interactive image cards, and simple pagination for browsing different collections of photographs.

It demonstrates practical implementation of React Hooks, API integration, dynamic rendering, and responsive UI development.

## 🚀 Features

- 🖼️ **Dynamic Image Gallery:** Fetches photographs dynamically using the Picsum Photos API.
- 🎨 **Elegant UI Design:** Soft colors, clean layouts, and visually appealing image cards.
- ✨ **Hover Animations:** Smooth image zoom, transitions, and interactive card effects.
- 📸 **Photographer Details:** Displays photographer names when hovering over image cards.
- 📄 **Pagination:** Navigate between different pages of image collections.
- 🔄 **API Integration:** Retrieves image data using Axios.
- 📱 **Responsive Layout:** Flexible image grid designed to adapt to different screen sizes.
- 🔗 **Image Preview:** Open original image links in a new browser tab.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js 19 | Building interactive UI components |
| Vite | Development server and build tool |
| Tailwind CSS 4 | Styling and responsive layouts |
| JavaScript (ES6+) | Application functionality |
| Axios | Fetching API data |
| Picsum Photos API | Dynamic image source |
| Git & GitHub | Version control |
| Vercel | Deployment and hosting |

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/UfaqFatima786/Soft-Gallery.git
```

**2. Navigate to the project directory**

```bash
cd Soft-Gallery
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open in your browser**

```text
http://localhost:5173
```

## 🌐 API Integration

This project uses the **Picsum Photos API** to retrieve a collection of random photographs.

API Endpoint:

```text
https://picsum.photos/v2/list?page=1&limit=20
```

The API provides image information such as:

- Image ID
- Photographer name
- Original image URL
- Download image URL

Axios is used to make HTTP GET requests, while React's `useEffect` and `useState` manage API data and page updates.

## 📂 Project Structure

```text
Soft-Gallery/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🎯 Learning Outcomes

Through this project, I practiced:

- Working with React functional components.
- Managing application state with `useState`.
- Handling side effects with `useEffect`.
- Fetching external API data using Axios.
- Rendering dynamic content using JavaScript's `map()`.
- Implementing pagination functionality.
- Creating interactive hover animations with Tailwind CSS.
- Deploying a React application using Vercel.

## 🚀 Live Deployment

Explore the live application:

**[🌿 Visit Soft Frames](https://soft-gallery-five.vercel.app/)**

## 👩‍💻 Developer

**Ufaq Fatima**

Frontend Web Developer | React.js Developer | UI Enthusiast

- **GitHub:** [@UfaqFatima786](https://github.com/UfaqFatima786)
---

<p align="center">
  💚 Designed & Developed with passion using React.js.
</p>

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>
