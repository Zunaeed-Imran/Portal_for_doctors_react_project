import FormSubmitButton from "../sortComponent/FormSubmitButton";


function MessageDoctor() {
  return (
    <div className="md:p-10">
      <p className="font-bold justify-center">You can message a Doctor</p>
      <div className="p-2 m-5">
        <form action="" className="">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs my-1"
          />{' '}
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered w-full max-w-xs my-1"
          />{' '}
          <input
            type="email"
            placeholder="@email"
            className="input input-bordered w-full max-w-xs my-1"
          />{' '}
          <textarea
            className="textarea textarea-bordered w-full max-w-xs my-1"
            placeholder="Tell us what you want us to do better"
          ></textarea>
          <br />
          <div>
            <FormSubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageDoctor
