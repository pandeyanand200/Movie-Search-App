# 🎬 Movie Search App

A React application to search for movies using the OMDB API. Built with React, Axios, and CSS.

---

## 📸 Preview

> Search karo koi bhi movie ka naam — poster, title aur year ke saath results aayenge!

---

## 🚀 Features

- 🔍 Real-time movie search by name
- 🎥 Movie poster, title aur year dikhata hai
- ⚡ Enter key se bhi search karo
- ❌ Error handling — agar movie nahi mili ya internet nahi hai
- 📱 Responsive design — mobile aur desktop dono par kaam karta hai

---

## 🛠️ Tech Stack

| Technology | Use |
|---|---|
| React | Frontend UI library |
| Axios | API calls ke liye |
| OMDB API | Movie data ke liye |
| CSS | Styling ke liye |

---

## 📁 Project Structure

```
movie-search-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx     # Search input aur button
│   │   ├── MovieCard.jsx     # Ek movie ka card
│   │   └── MovieList.jsx     # Saari movies ki list
│   ├── App.jsx               # Main component
│   ├── App.css               # Styling
│   └── index.js              # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Step 1 — Repository clone karo ya folder banao

```bash
npx create-react-app movie-search-app
cd movie-search-app
```

### Step 2 — Axios install karo

```bash
npm install axios
```

### Step 3 — OMDB API Key lo

1. Yahan jao: [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. **FREE** plan select karo
3. Apna email dalo aur submit karo
4. Email mein aaye link par click karke key activate karo
5. Key kuch aisi dikhegi: `a1b2c3d4`

### Step 4 — API Key lagao

`src/App.jsx` mein yeh line dhundho:

```jsx
const API_KEY = 'YAHAN_APNI_KEY_LIKHO';
```

Apni real key se replace karo:

```jsx
const API_KEY = 'tumhari_api_key_yahan';
```

### Step 5 — App run karo

```bash
npm start
```

Browser mein `http://localhost:3000` khulega — app ready hai! ✅

---

## 🧩 React Concepts Used

| Concept | Kahan use hua |
|---|---|
| **Components** | SearchBar, MovieCard, MovieList |
| **Props** | movie, query, onSearch pass kiye |
| **State (useState)** | query, movies, loading, error |
| **API Call (Axios)** | OMDB API se movies laana |
| **Error Handling** | loading + error states |
| **Conditional Rendering** | loading/error/results alag alag dikhana |

---

## 📖 How It Works

```
User search karta hai
        ↓
SearchBar component query state update karta hai
        ↓
Search button click hota hai
        ↓
App.jsx mein searchMovies() function chalta hai
        ↓
Axios se OMDB API call hoti hai
        ↓
Response aata hai → movies state update hoti hai
        ↓
MovieList → MovieCard components movies dikhate hain
```

---

## 🔧 Available Scripts

```bash
# Development server start karo
npm start

# Production build banao
npm run build

# Tests chalao
npm test
```

---

## 🌐 API Reference

App **OMDB API** use karta hai:

```
GET https://www.omdbapi.com/?apikey={KEY}&s={QUERY}&type=movie
```

| Parameter | Value | Description |
|---|---|---|
| `apikey` | tumhari key | Authentication |
| `s` | search query | Movie ka naam |
| `type` | `movie` | Sirf movies (series nahi) |

**Response example:**

```json
{
  "Search": [
    {
      "Title": "Dhurandhar",
      "Year": "2024",
      "imdbID": "tt1234567",
      "Poster": "https://..."
    }
  ],
  "totalResults": "5",
  "Response": "True"
}
```

---

## ⚠️ Common Errors

| Error | Reason | Fix |
|---|---|---|
| `Kuch galat hua` | API key galat hai | App.jsx mein sahi key daalo |
| `Koi movie nahi mili` | Movie exist nahi karti | Doosra naam try karo |
| White screen | Import galat hai | Console mein error dekho (F12) |
| `useState is not defined` | Import missing | `import { useState } from 'react'` lagao |

---

## 🎯 Future Improvements

- [ ] Movie detail page — click karo toh full info dikhe
- [ ] Favourites feature — movies save karo
- [ ] Pagination — zyada results dikho
- [ ] Dark/Light mode toggle
- [ ] Search history

---

## 👨‍💻 Built With

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [OMDB API](https://www.omdbapi.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
