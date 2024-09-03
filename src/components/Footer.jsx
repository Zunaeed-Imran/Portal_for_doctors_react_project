import { FaGlobe } from 'react-icons/fa';




export default function Footer() {
  return (
    <div>
      {/* footer section. */}

      <footer>
        {/* <!-- it is social icon section  --> */}
        <section className="border-2">
          {/* <!-- it is just text and company logo section  --> */}

          <div className="">
            <div className="">
              <a href="#">
                <i style={{ color: '#3039e3' }}>
                  <FaGlobe /> ITLogiko
                </i>
              </a>
              <p>Grow Your Online Business And Improve Customer Retention</p>
            </div>

            {/* <!-- it is icon section --> */}
            <div className="">
              <div className="">
                <a href="#">
                  Linkedin
                </a>
                <a href="#">
                  Twitter
                </a>
                <a href="#">
                  GitHub
                </a>
                <a href="#">
                  Google
                </a>
                <a href="#">
                  instagram
                </a>
                <a href="#">
                  Facebook
                </a>
                <a href="#">
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- it is company details section  --> */}
        <section>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="columns-1">
                <h6>TECHNOLOGY</h6>
                <a href="#">
                  React
                </a>
                <a href="#">
                  Laravel
                </a>
                <a href="#">
                  PHP
                </a>
                <a href="#">
                  node
                </a>
                <br />
                <a href="#">
                  database
                </a>
                <a href="#">
                  CSS3
                </a>
                <a href="#">
                  Docker
                </a>
                <a href="#">
                  git
                </a>
                <a href="#">
                  gitlab
                </a>
                <br />
                <a href="#">
                  gitcracken
                </a>
                <a href="#">
                  html5
                </a>
                <a href="#">
                  rdbms
                </a>
                <a href="#">
                  mongodb
                </a>
              </div>

              <div className="col-span-1">
                <h6>SERVICE</h6>
                <a className="text-decoration-none text-black" href="#">
                  <p>Team Augmentation Services</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>App Development Service</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>Web Design and Development</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>Website Maintenance</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>E-Commerce Solution</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>Domain Services</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>Hosting Services</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>MVP Service</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>Offshore Ofice Expansion</p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p>End to end Development</p>
                </a>
              </div>

              {/* <!-- like i use in the contact in the same line we can add logo with text.  --> */}
              <div className="col-span-3">
                <h6>ADDRESS</h6>

                <p>itlogiko@gmail.com</p>
                <p>01312-383745</p>
                <p>
                  Level-10, Shakh Hasina Software Technology Park, Nazir
                  Sonkorpur Road, Jashore-7400, bangladesh.
                </p>
                {/* <hr /> */}
              </div>
            </div>
          </div>
        </section>

        {/* bottom footer */}
        <div className="bg-[#aac0e3]">
          <hr />
          <div className="flex justify-center p-3">
            <p>Copyright@Anesthesiologists2024.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
