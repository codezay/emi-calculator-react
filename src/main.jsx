import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle Js
import "bootstrap/dist/js/bootstrap.bundle.min"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
