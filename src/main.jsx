import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'
import Feedback from './Components/Feedback.jsx'
import Head from './Components/Head.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Head/>} />
          <Route path='experience' element={<Experience />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Feedback />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
