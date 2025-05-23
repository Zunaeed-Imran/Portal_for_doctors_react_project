// in the style i use 'Drawer' from  daisyUI

import { FaUserDoctor } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../PageTitle";

function AdminDashboard() {

  return (
    <>
      <PageTitle title={'Admin'}/>
      <div className="pt-16">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}

            <Outlet />
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu bg-blue-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}

              <li>
                <Link to="singleAppointment" className="btn-ghost text-xl">
                  <FcCalendar />

                  Appointment
                </Link>
              </li>

              <li>
                <Link to="DoctorP" className="btn-ghost text-xl">
                  <FaUserDoctor />
                  
                  Doctor Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard
