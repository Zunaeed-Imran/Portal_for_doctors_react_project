import Navbar from "../Navbar"
import { FcApproval } from 'react-icons/fc';
import { FcCableRelease } from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcCustomerSupport } from 'react-icons/fc';
import { FcDecision } from 'react-icons/fc';
import { FcDislike } from "react-icons/fc";


function PatientDashboard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <div className="bg-gray-300	">
          <div className="btn btn-ghost text-xl">
            <FcApproval />
            Profile
          </div>{' '}
          <br />
          <div className="btn btn-ghost text-xl">
            <FcCableRelease />
            Book Appointment
          </div>{' '}
          <br />
          <div className="btn btn-ghost text-xl">
            <FcBriefcase />
            Invoice
          </div>
          <br />
          <div className="btn btn-ghost text-xl">
            <FcCustomerSupport />
            Complain
          </div><br />
          <div className="btn btn-ghost text-xl">
            <FcDecision />
            Old Appointment
          </div><br />
          <div className="btn btn-ghost text-xl">
            <FcDislike />
            Report
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard
