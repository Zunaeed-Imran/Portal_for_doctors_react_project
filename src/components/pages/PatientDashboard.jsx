import { FcApproval } from 'react-icons/fc';
import { FcCableRelease } from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcCustomerSupport } from 'react-icons/fc';
import { FcDecision } from 'react-icons/fc';
import { FcDislike } from "react-icons/fc";


function PatientDashboard() {
  return (
    <div>
      <div className="pt-20">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <p className="font-bold">There will be patient profile page.</p>
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
                <div className="btn-ghost text-xl">
                  <FcApproval />
                  Profile
                </div>
              </li>
              <li>
                <div className="btn-ghost text-xl">
                  <FcCableRelease />
                  Book Appointment
                </div>
              </li>
              <li>
                <div className="btn-ghost text-xl">
                  <FcBriefcase />
                  Invoice
                </div>
              </li>
              <li>
                <div className="btn-ghost text-xl">
                  <FcCustomerSupport />
                  Complain
                </div>
              </li>
              <li>
                <div className="btn-ghost text-xl">
                  <FcDecision />
                  Old Appointment
                </div>
              </li>
              <li>
                <div className="btn-ghost text-xl">
                  <FcDislike />
                  Report
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard
