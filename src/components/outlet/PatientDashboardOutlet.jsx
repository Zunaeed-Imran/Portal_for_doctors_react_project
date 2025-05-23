import { Outlet } from "react-router-dom"
import PatientDashboard from "../pages/PatientDashboard"



function PatientDashboardOutlet() {
  return (
    <>
      <PatientDashboard />
      
      <Outlet/>
    </>
  )
}

export default PatientDashboardOutlet
