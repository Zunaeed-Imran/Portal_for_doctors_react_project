import PropTypes from 'prop-types'; // up to the file
import { Link } from 'react-router-dom';


function DoctorComponent({img, desig, title, desc}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-teal-200 duration-300">
        <figure className="px-10 pt-10">
          <img src={img} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{desig}</h2>
          <h2 className="card-side">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <Link to="/appointment">
              <button className="btn btn-primary">Make Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorComponent


DoctorComponent.propTypes = {
  // this code will be down to the file
  img: PropTypes.string,
  desig: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
};