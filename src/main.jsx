import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundpage from './components/pages/NotFoundpage.jsx'
import DoctorProfile from './components/pages/DoctorProfile.jsx'
import AppointMentScheduling from './components/pages/AppointMentScheduling.jsx'
import PatientDashboard from './components/pages/PatientDashboard.jsx'


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
  {
    path: '/appointment',
    element: <AppointMentScheduling />,
  },
  {
    path: '/patientDash',
    element: <PatientDashboard />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
