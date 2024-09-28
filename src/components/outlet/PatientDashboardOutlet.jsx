import { Outlet } from "react-router-dom"
import PatientDashboard from "../pages/PatientDashboard"



function PatientDashboardOutlet() {
  return (
    <div>
      <PatientDashboard/>
      <Outlet/>
    </div>
  )
}

export default PatientDashboardOutlet
