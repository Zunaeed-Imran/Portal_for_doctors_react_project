import { Outlet } from "react-router-dom"
import AppointMentScheduling from "../pages/AppointMentScheduling"


function AppoinementOutlet() {
  return (
    <>
      <AppointMentScheduling />
      
      <Outlet/>
    </>
  )
}

export default AppoinementOutlet
