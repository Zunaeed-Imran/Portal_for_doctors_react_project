import PropTypes from 'prop-types'; // up to the file

function Review({ img, name}) {

  return (
    <div className='flex pb-1 px-1'>
        <div className="card bg-base-100 w-56 shadow-xl p-3">
          <div className="avatar p-3 justify-center">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={img} />
            </div>
          </div>{' '}
          <br />
        <h2 className="card-title justify-center">{name}</h2>
          <p className="text-center">
            I had a wonderful visit to AnestheSure for my back. The care I
            received from Doctor younus was exceptional
          </p>
          <div className="rating justify-center">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
    </div>
  );
}

export default Review;


Review.propTypes = {
  // this code will be down to the file
  img: PropTypes.string,
  name: PropTypes.string
};