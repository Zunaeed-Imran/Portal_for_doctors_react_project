import { FaHome, FaQuestion } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FcBadDecision } from 'react-icons/fc';
import Search from './layout/Search';
import NotifyButton from './layout/NotifyButton';
import { FcButtingIn } from 'react-icons/fc';

import { FaBars } from 'react-icons/fa6';




export default function Navbar() {
  return (
    <div className="flex justify-between items-center fixed w-full bg-blue-500	 p-3 px-4 md:px-10 lg:px-20 z-50">
      <div className="flex items-center">
        <button className="md:hidden">
          {" "}
          {/* Hamburger menu visible on mobile */}
          <FaBars />
        </button>
        <IconContext.Provider value={{ size: "1rem", color: "#f2f7f5" }}>
          <div className="hidden md:flex gap-3">
            {" "}
            {/* Hidden on mobile */}
            <Link
              to="/"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-cyan-500	 hover:bg-sky-600"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="/DoctorP"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-cyan-500	 hover:bg-sky-600"
            >
              <FaQuestion />
              Doctors
            </Link>
            <Link
              to="/appointment"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-cyan-500	 hover:bg-sky-600"
            >
              <FcButtingIn />
              Appointment
            </Link>
            <Link
              to="/patientDash"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-cyan-500	 hover:bg-sky-600"
            >
              <FcBadDecision />
              Patient_Dashboard
            </Link>
          </div>
          <Search />
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <NotifyButton />
            </div>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}
