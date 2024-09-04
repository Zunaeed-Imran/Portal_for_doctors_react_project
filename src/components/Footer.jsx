// this is footer section.
import { FaUserDoctor } from 'react-icons/fa6';




export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="min-h-[100px]">
          <a href="#" className='flex items-center gap-1'>
              <FaUserDoctor size='2rem' /> AnestheSure
          </a>
          <p>
            An anesthesiologist is a medical doctor who specializes in <br />
            administering anesthesia, the medical treatment that keeps you from <br />
            feeling pain during procedures or surgery. Anesthesiologists take <br />
            care of you before, during and after your surgery.
          </p>
        </div>
        <div className="min-h-[100px]">
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">Google</a>
          <a href="#">instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
        </div>
      </div>

      <div className="grid grid-cols-3 p-9 px-36">
        <div className="min-h-[100px]">
          <h6 className="text-xl font-semibold">Actions</h6>
          <a className="text-decoration-none text-black" href="#">
            <p>Appointment & Access</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Accepted Insurance</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Events Calendar</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Finalcial Assistance</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Give to Cleveland Clinic</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Pay Your Bill Online</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Refar a Patient</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Phone Directory</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Virtual Second Opinions</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Virtual Visits</p>
          </a>
        </div>

        <div className="min-h-[100px]">
          <h6 className="text-xl font-semibold">About AnestheSure</h6>
          <a className="text-decoration-none text-black" href="#">
            <p>About Us</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Loactions</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Quality & Patient Safety.</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Office of Diversity & Inclusion</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Patient Experience</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Research & Innovations</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Community & Commitment</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Careers</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>For Employees</p>
          </a>
          <a className="text-decoration-none text-black" href="#">
            <p>Resources for Medical Professionals</p>
          </a>
        </div>

        <div className="min-h-[100px]">
          <h6 className="text-xl font-semibold">ADDRESS</h6>

          <p>yourmail@gmail.com</p>
          <p>01777-888899</p>
          <p>5695+5R6, Nowapara Rd, Jashore.</p>
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

      <div className="bg-[#aac0e3]">
        <hr />
        <div className="flex justify-center p-3">
          <p>Copyright@AnestheSure2024.</p>
        </div>
      </div>
    </>
  );
}
