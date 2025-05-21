import React from 'react'
import ReactDOM from 'react-dom/client'
import { CustomProvider } from 'rsuite'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomProvider theme='dark'>
      <App />
    </CustomProvider>
    </BrowserRouter>
  </React.StrictMode>
)
