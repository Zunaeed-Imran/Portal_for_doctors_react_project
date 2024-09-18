

function ReviewMessage() {
  return (
    <div className="p-10">
      <p className="font-bold">This is review message</p>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />{' '}
        <br />
        <textarea
          className="textarea textarea-bordered"
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
        </div><br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ReviewMessage
