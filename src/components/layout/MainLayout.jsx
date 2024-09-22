import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "./Footer"


function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout
