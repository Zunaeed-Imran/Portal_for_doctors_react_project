import { FaGlobe } from 'react-icons/fa';




export default function Footer() {
  return (
    <div>
      {/* footer section. */}

      <footer className="pt-5">
        {/* <!-- it is social icon section  --> */}
        <section className="border-2	">
          {/* <!-- it is just text and company logo section  --> */}

          <div className="container flex justify-center px-5">
            <div>
              <a href="#">
                <i style={{ color: '#3039e3' }}>
                  <FaGlobe /> ITLogiko
                </i>
              </a>
              <p>Grow Your Online Business And Improve Customer Retention</p>
            </div>

            {/* <!-- it is icon section --> */}
            <div className="">
              <div className="col-auto flex-row">
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-linkedin"
                    style={{ color: '#0079fa' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-square-twitter"
                    style={{ color: '#3378e8' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-github"
                    style={{ color: '#212326' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-google-plus"
                    style={{ color: '#33e84e' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-square-instagram"
                    style={{ color: '#e833df' }}
                  ></i>
                </a>
                <a href="#">
                  <i className="fa-2x fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    className="fa-2x fa-brands fa-youtube"
                    style={{ color: '#f20707' }}
                  ></i>
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
                  <i
                    className="fa-3x fa-brands fa-react"
                    style={{ color: '#0f91f5' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-laravel"
                    style={{ color: '#f31212' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-php"
                    style={{ color: '#1262ed' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-node"
                    style={{ color: '#48e54b' }}
                  ></i>
                </a>
                <br />
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-data-base"
                    style={{ color: '#1262ed' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-css3-alt"
                    style={{ color: '#1f62ff' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-docker"
                    style={{ color: '#3b71ce' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-git"
                    style={{ color: '#ce453b' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-square-gitlab"
                    style={{ color: '#eb5e00' }}
                  ></i>
                </a>
                <br />
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-gitkraken"
                    style={{ color: '#3b6fc9' }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-3x fa-brands fa-html5"
                    style={{ color: '#dd3636' }}
                  ></i>
                </a>
                <a href="#">
                  <i className="fa-3x fa-solid fa-database"></i>
                </a>
                <a href="#"></a>
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
