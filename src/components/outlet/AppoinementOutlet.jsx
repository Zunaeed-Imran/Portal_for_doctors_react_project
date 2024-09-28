import { Outlet } from "react-router-dom"
import AppointMentScheduling from "../pages/AppointMentScheduling"


function AppoinementOutlet() {
  return (
    <div>
      <AppointMentScheduling/>
      <Outlet/>
    </div>
  )
}

export default AppoinementOutlet
