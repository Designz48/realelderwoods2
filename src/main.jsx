// src/main.jsx
import './index.css'   // 1️⃣ Tailwind’s generated utilities
import './App.css'     // 2️⃣ Your custom clay‑morphic helpers + globals

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
