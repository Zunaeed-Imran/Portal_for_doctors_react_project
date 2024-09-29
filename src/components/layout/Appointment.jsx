import FormSubmitButton from "../sortComponent/FormSubmitButton";

function Appointment() {
  return (
    <div className="">
      <div className="min-h-screen">
        <form action="" className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-2xl font-semibold m-5"
          >MAKE APPOINTMENT</label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Reason for Visit"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Existing Conditions"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="date" className="input input-bordered w-full max-w-xs" />
          <textarea
            placeholder="Note for Doctor to see."
            className="input input-bordered w-full max-w-xs"
          ></textarea>
          <div>
            <FormSubmitButton/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment
