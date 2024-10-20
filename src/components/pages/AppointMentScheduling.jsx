// in the style i sue 'Drawer' from  daisyUI

import { FcApproval, FcCalendar } from 'react-icons/fc';
import { FaHistory } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function AppointMentScheduling() {
  return (
    <div className="">
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
                <Link to={'singleAppointment'} className="btn-ghost text-xl">
                  <FcCalendar />
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  to={'quickAppointmentPreTime'}
                  className="btn-ghost text-xl"
                >
                  <FcApproval />
                  Reschedule
                </Link>
              </li>
              <li>
                <Link to="paitentHistory" className="btn-ghost text-xl">
                  <FaHistory />
                  Patient History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointMentScheduling;
