import { FcApproval, FcBriefcase, FcCustomerSupport, FcDecision, FcDislike } from "react-icons/fc";
// import PatientHistory from "../layout/PatientHistory";
// import QuickAppointmentPreTime from "../layout/QuickAppointmentPreTime";
import { FaHistory } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

function AppointMentScheduling() {
  return (
    <div className="bg-slate-300">
      {/* <div className="pt-20">
        <PatientHistory />
      </div> */}
      {/* <div className="p-3">
        <QuickAppointmentPreTime />
      </div> */}
      {/* <div className="pt-20 flex items-center justify-center min-h-screen">
        <form action="">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Reason for Visit"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <input
            type="text"
            placeholder="Existing Conditions"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <button className="btn btn-outline btn-success" type="submit">
            Make Appointment
          </button>
        </form>
      </div> */}
      <div className="pt-20">
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
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <Link to="" className="btn-ghost text-xl">
                  <FcApproval />
                  Quick Appointment
                </Link>
              </li>
              <li>
                <Link to='/paitentHistory' className="btn-ghost text-xl">
                  <FaHistory />
                  Patient History
                </Link>
              </li>
              <li>
                <Link className="btn-ghost text-xl">
                  <FcBriefcase />
                  Invoice
                </Link>
              </li>
              <li>
                <Link className="btn-ghost text-xl">
                  <FcCustomerSupport />
                  Complain
                </Link>
              </li>
              <li>
                <Link className="btn-ghost text-xl">
                  <FcDecision />
                  Old Appointment
                </Link>
              </li>
              <li>
                <Link className="btn-ghost text-xl">
                  <FcDislike />
                  Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointMentScheduling
