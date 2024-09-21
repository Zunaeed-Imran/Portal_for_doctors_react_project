import PropTypes from 'prop-types'; // up to the file
import { Link } from 'react-router-dom';


function Card({img, name, desc}) {
  return (
    <div>
      <div className="flex ">
        <div className="card bg-stone-400 w-screen shadow-xl rounded">
          <figure className="pt-7">{img}</figure>
          <div className="card-body ">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <Link to="/DoctorP">
                <button className="btn btn-accent">Doctor List</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


Card.propTypes = {
  // this code will be down to the file
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
};