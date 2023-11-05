import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/Auth/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
