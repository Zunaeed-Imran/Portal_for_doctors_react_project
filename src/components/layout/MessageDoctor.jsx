

function MessageDoctor() {
  return (
    <div className="p-10">
      <p className="font-bold">You can message a Doctor</p>
      <div className="p-2 m-5">
        <form action="" className="">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs my-2"
          />{' '}
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered w-full max-w-xs my-2"
          />{' '}
          <input
            type="email"
            placeholder="@email"
            className="input input-bordered w-full max-w-xs my-2"
          />{' '}
          <textarea
            className="textarea textarea-bordered w-80 h-32"
            placeholder="Tell us what you want us to do better"
          ></textarea><br />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default MessageDoctor
