import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundpage from './components/pages/NotFoundpage.jsx'
import DoctorProfile from './components/pages/DoctorProfile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundpage />,
  },
  {
    path: '/DoctorP',
    element: <DoctorProfile />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
