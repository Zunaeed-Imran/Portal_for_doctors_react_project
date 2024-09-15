import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundpage from './components/pages/NotFoundpage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundpage />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
