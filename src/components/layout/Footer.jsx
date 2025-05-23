// this is footer section.
import { FaUserDoctor } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { GiLifeSupport } from 'react-icons/gi';
import EmergencyContact from './EmergencyContact';
import Logo from './Logo';
// import ScrollToTopButton from '../services/ScrollToTopButton';
import ScrollToTopButton2 from '../services/ScrollToTopButton2';
import { Link } from 'react-router-dom';




export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-100">
        <div className="min-h-[100px] pl-20 p-6">
          <a className="flex items-center gap-1 font-semibold">
            <FaUserDoctor size="2.5rem" color="#c74332" /> AnestheSure
          </a>

          <p>
            An anesthesiologist is a medical doctor who specializes in <br />
            administering anesthesia, the medical treatment that keeps <br />
            you from feeling pain during procedures or surgery. <br />
            Anesthesiologists take care of you before, during <br />
            and after your surgery.
          </p>
        </div>

        <div className="pl-20 pt-5 ">
          <EmergencyContact />
          <Logo />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-9 px-20 bg-blue-200">
        <div className="min-h-[100px] flex flex-col gap-1">
          <h6 className="text-xl font-semibold">Actions</h6>

          <Link className="text-decoration-none text-black" to="/adminlogin">
            <p>Admin-Log-in</p>
          </Link>

          <Link className="text-decoration-none text-black" to="/login">
            <p>Log-in</p>
          </Link>

          <a className="text-decoration-none text-black">
            <p>Events Calendar</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Finalcial Assistance</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Appointment & Access</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Pay Your Bill Online</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Refar a Patient</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Phone Directory</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Virtual Second Opinions</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Virtual Visits</p>
          </a>
        </div>

        <div className="min-h-[100px] flex flex-col gap-1">
          <h6 className="text-xl font-semibold">About AnestheSure</h6>

          <Link className="text-decoration-none text-black" to="/aboutus">
            <p>About Us</p>
          </Link>

          <a className="text-decoration-none text-black">
            <p>Loactions</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Quality & Patient Safety.</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Office of Diversity & Inclusion</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Patient Experience</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Research & Innovations</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Community & Commitment</p>
          </a>

          <a className="text-decoration-none text-black">
            <p>Careers</p>
          </a>

          <Link className="text-decoration-none text-black" to="/employee">
            <p>Employees</p>
          </Link>

          <a className="text-decoration-none text-black">
            <p>Resources for Medical Professionals</p>
          </a>
        </div>

        <div className="min-h-[100px] flex flex-col gap-1">
          <h6 className="text-xl font-semibold">ADDRESS</h6>

          <p className="flex items-center gap-2">
            <MdAttachEmail color="#1d54de" /> contact@itlogiko.com
          </p>

          <p className="flex items-center gap-2">
            <FaPhone color="#36de2a" /> 01804468806
          </p>

          <p className="flex items-center gap-2">
            <GiLifeSupport color="#ff0019" /> 5695+5R6, Nowapara Rd, Jashore.
          </p>

          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29344.36436409143!2d89.19177384882387!3d23.168537741670416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1061d2b7ed9d%3A0x453e406a9156cdc4!2sJashore%20Sadar%20General%20Hospital!5e0!3m2!1sen!2sbd!4v1725425667801!5m2!1sen!2sbd"
              width="250"
              height="140"
              loading="lazy"
            ></iframe>
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white">
        <hr />

        <div className="flex justify-center p-3">
          <ScrollToTopButton2 />
          
          <p>Copyright@AnestheSure2024.</p>
        </div>
      </div>
    </>
  );
}
