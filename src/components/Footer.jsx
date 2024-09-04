// this is footer section.




export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-3	">
        <div className="min-h-[100px]">
          <h6>TECHNOLOGY</h6>
          <a href="#">React</a>
          <a href="#">Laravel</a>
          <a href="#">PHP</a>
          <a href="#">node</a>
          <br />
          <a href="#">database</a>
          <a href="#">CSS3</a>
          <a href="#">Docker</a>
          <a href="#">git</a>
          <a href="#">gitlab</a>
          <br />
          <a href="#">gitcracken</a>
          <a href="#">html5</a>
          <a href="#">rdbms</a>
          <a href="#">mongodb</a>
        </div>

        <div className="min-h-[100px]">
          <h6 className="text-xl font-semibold">About Cleveland Clinic</h6>
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
          <p>Copyright@Anesthesiologists2024.</p>
        </div>
      </div>
    </>
  );
}
