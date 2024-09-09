import manA from "../assets/a.png";


function Review() {

  return (
    <div>
      <div className="avatar p-3">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src={manA} />
        </div>
      </div> <br />
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
          defaultChecked/>
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
      </div>
    </div>
  );
}

export default Review
