import { FaAnkh } from 'react-icons/fa';
import { FcApproval, FcBiohazard } from 'react-icons/fc';
import { FcCableRelease } from 'react-icons/fc';
import { MdOutlineRememberMe } from 'react-icons/md';
import { PiPillDuotone } from 'react-icons/pi';
import { Link, Outlet } from 'react-router-dom';


function PatientDashboard() {
  return (
    <div>
      <div className="pt-20">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <p className="font-bold">There will be patient profile page.</p>
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
                <div className="btn-ghost text-xl">
                  <FcApproval />
                  Profile
                </div>
              </li>
              <li>
                <Link to={'/singleAppointment'} className="btn-ghost text-xl">
                  <FcCableRelease />
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to={'/preAnesthesiaCheck'} className="btn-ghost text-xl">
                  <FcBiohazard />
                  Pre-Anesthesia Checklist
                </Link>
              </li>
              <li>
                <Link to={'/remainderpatient'} className="btn-ghost text-xl">
                  <MdOutlineRememberMe />
                  Follow-up Reminder
                </Link>
              </li>
              <li>
                <Link
                  to={'/patientMedicinReminder'}
                  className="btn-ghost text-xl"
                >
                  <PiPillDuotone />
                  Medication Reminder.
                </Link>
              </li>
              <li>
                <Link
                  to={'/patientPreparationInstruction'}
                  className="btn-ghost text-xl"
                >
                  <FaAnkh />
                  Preparation Instructions.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard
