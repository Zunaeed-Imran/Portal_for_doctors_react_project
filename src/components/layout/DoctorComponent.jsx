import PropTypes from 'prop-types'; // up to the file


function DoctorComponent({img, desig, title, desc}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{desig}</h2>
          <h2 className="card-side">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Make_Appointment</button>
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