

function ReviewMessage() {
  return (
    <div className="p-10">
      <p className="font-bold ">This is review message</p>
      <form action="" className="p-2 m-5">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs my-2"
        />{' '}
        <textarea
          className="textarea textarea-bordered w-80 h-32"
          placeholder="Tell us what yor experiance is!!"
        ></textarea>
        <br />
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            defaultChecked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
        <br />
        <button type="text" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewMessage
