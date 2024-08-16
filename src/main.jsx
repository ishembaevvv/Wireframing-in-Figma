import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main/Main.jsx'
import SingUp from './pages/SingUp/SingUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/singup',
    element: <SingUp />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
