# View (Wallhub)

A beautiful, responsive web app to discover, search, and download high-quality wallpapers from Unsplash, with favorites and trending features. Built with React, Tailwind CSS, and a secure Node.js backend proxy to keep your API key safe.

---

## ✨ Features

- **Trending, Newest, and Search**: Browse trending, latest, or search for any wallpaper topic.
- **Favorites**: Save your favorite wallpapers (stored in your browser, no login needed).
- **Download**: Download full-resolution images with a single click.
- **Responsive UI**: Works great on desktop and mobile, with a modern Pinterest-style layout.
- **Secure API**: Your Unsplash API key is never exposed to the frontend—requests go through a Node.js backend.

---

## 🏗️ Project Structure

```
View/                # Frontend (static HTML/JS/CSS)
  ├── index.html     # Main React app (edit here for UI changes)
  └── ...
wallhub-server/      # Backend Node.js proxy server
  ├── server.js      # Express server (edit here for backend logic)
  ├── .env           # Your Unsplash API key (never commit this!)
  ├── package.json   # Backend dependencies
  └── README.md      # Backend setup instructions
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/yourusername/view-wallhub.git
cd view-wallhub
```

### 2. Backend Setup (Node.js Proxy)

1. Go to the backend folder:
   ```
   cd wallhub-server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your Unsplash API key:
   ```
   UNSPLASH_KEY=your_real_unsplash_api_key_here
   ```
4. Start the backend server:
   ```
   npm start
   ```
   The server runs on [http://localhost:3001](http://localhost:3001) by default.

### 3. Frontend Setup

Just open `index.html` in your browser! No build step needed.

- The frontend will talk to your backend at `http://localhost:3001`.
- If you deploy, update the `BACKEND_URL` in `index.html` accordingly.

---

## 🔒 Security & Best Practices

- **Never commit your `.env` file** (it contains your Unsplash API key).
- The backend acts as a proxy, so your API key is never exposed to users.
- For production, use HTTPS and a secure domain for your backend.

---

## 🛠️ Customization

- **Change UI**: Edit `index.html` (React code is inside a `<script type="text/babel">` block).
- **Add more endpoints**: Edit `server.js` to add more Unsplash API features (e.g., trending, download tracking, etc).
- **Change backend port**: Edit the `PORT` in `server.js` or set `PORT=xxxx` in `.env`.

---

## 🙋 FAQ

**Q: Why do I need a backend?**  
A: Unsplash API keys must be kept secret. The backend hides your key and prevents abuse.

**Q: Can I deploy this?**  
A: Yes! Deploy the backend to any Node.js host (Render, Vercel, Heroku, etc). Serve the frontend as static files. Update `BACKEND_URL` in `index.html` to your backend's public URL.

**Q: How do favorites work?**  
A: Favorites are saved in your browser's localStorage. No account needed.

---

## 📄 License

MIT. Use, modify, and share freely. Please credit Unsplash and the original author for images.

---

## 👤 Author

- Made by [Harshit](https://itsharshitgoat.github.io/Website/)
- Inspired by the Unsplash community
