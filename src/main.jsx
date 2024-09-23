import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundpage from './components/pages/NotFoundpage.jsx'
import DoctorProfile from './components/pages/DoctorProfile.jsx'
import AppointMentScheduling from './components/pages/AppointMentScheduling.jsx'
import PatientDashboard from './components/pages/PatientDashboard.jsx'
import DoctorCalendar from './components/layout/DoctorCalendar.jsx'
import MainLayout from './components/layout/MainLayout.jsx'
import PatientHistory from './components/layout/PatientHistory.jsx'
import QuickAppointmentPreTime from './components/layout/QuickAppointmentPreTime.jsx'
import Appointment from './components/layout/Appointment.jsx'
import ReminderPatientFollowUp from './components/sortComponent/ReminderPatientFollowUp.jsx'
import PreAnesthesiaCheck from './components/sortComponent/PreAnesthesiaCheck.jsx'
import PatientMedicinRemind from './components/sortComponent/PatientMedicinRemind.jsx'
import PatientPraparationInstruction from './components/sortComponent/PatientPraparationInstruction.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
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
      {
        path: '/doctorCalender',
        element: <DoctorCalendar />,
      },
      {
        path: '/paitentHistory',
        element: <PatientHistory />,
      },
      {
        path: '/quickAppointmentPreTime',
        element: <QuickAppointmentPreTime />,
      },
      {
        path: '/singleAppointment',
        element: <Appointment/>
      },
      {
        path: '/remainderpatient',
        element: <ReminderPatientFollowUp/>
      },
      {
        path: '/preAnesthesiaCheck',
        element: <PreAnesthesiaCheck/>
      },
      {
        path: '/patientMedicinReminder',
        element: <PatientMedicinRemind/>
      },
      {
        path: '/patientPreparationInstruction',
        element: <PatientPraparationInstruction/>
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
