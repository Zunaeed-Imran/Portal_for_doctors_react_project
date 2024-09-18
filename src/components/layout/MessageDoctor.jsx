

function MessageDoctor() {
  return (
    <div>
      <div className="p-2 m-5">
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <input
            type="email"
            placeholder="@email"
            className="input input-bordered w-full max-w-xs"
          />{' '}
          <br />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Tell us what want us to do better"
          ></textarea><br />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default MessageDoctor
