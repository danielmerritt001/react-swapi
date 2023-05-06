import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav/Nav.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
)
