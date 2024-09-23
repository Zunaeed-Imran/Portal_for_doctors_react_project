
function Appointment() {
  return (
    <div>
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <form action="">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Reason for Visit"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <input
            type="text"
            placeholder="Existing Conditions"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <button className="btn btn-outline btn-success" type="submit">
            Make Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment
