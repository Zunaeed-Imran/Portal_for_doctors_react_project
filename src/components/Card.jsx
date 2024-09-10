import PropTypes from 'prop-types'; // up to the file


function Card({img, name, desc}) {
  return (
    <div>
      <div className="flex ">
        <div className="card bg-zinc-400 w-96 shadow-xl rounded-none">
          <figure className='pt-7'>{img}</figure>
          <div className="card-body ">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
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