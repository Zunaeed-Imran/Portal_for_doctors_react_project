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
import AboutUs from './components/pages/AboutUs.jsx'
import Employee from './components/pages/Employee.jsx'
import Login from './components/pages/Login.jsx'
import Signin from './components/pages/Signin.jsx'
import AdminLigin from './components/pages/AdminLigin.jsx'
import AdminDashboard from './components/pages/AdminDashboard.jsx'


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
        path: '/appointment',
        element: <AppointMentScheduling />,
        children: [
          {
            path: 'singleAppointment',
            element: <Appointment />,
          },
          {
            path: 'quickAppointmentPreTime',
            element: <QuickAppointmentPreTime />,
          },
          {
            path: 'paitentHistory',
            element: <PatientHistory />,
          },
        ],
      },
      {
        path: '/patientDash',
        element: <PatientDashboard />,
        children: [
          {
            path: 'singleAppointment',
            element: <Appointment />,
          },
          {
            path: 'preAnesthesiaCheck',
            element: <PreAnesthesiaCheck />,
          },
          {
            path: 'remainderpatient',
            element: <ReminderPatientFollowUp />,
          },
          {
            path: 'patientMedicinReminder',
            element: <PatientMedicinRemind />,
          },
          {
            path: 'patientPreparationInstruction',
            element: <PatientPraparationInstruction />,
          },
        ],
      },
      {
        path: '/admindashboard',
        element: <AdminDashboard />,
        children: [
          {
            path: 'singleAppointment',
            element: <Appointment />,
          },
          {
            path: 'DoctorP',
            element: <DoctorProfile />,
          },
        ],
      },
      {
        path: '/DoctorP',
        element: <DoctorProfile />,
      },
      {
        path: '/doctorCalender',
        element: <DoctorCalendar />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/employee',
        element: <Employee />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/adminlogin',
        element: <AdminLigin />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
