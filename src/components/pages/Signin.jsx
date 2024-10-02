import { Link } from "react-router-dom";


function Signin() {
  return (
    <div className="">
      <div className="pt-20 hero">
        <div className="min-h-screen">
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-semibold m-5">
              Sing Up with new Account
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Set A Password"
              className="input input-bordered w-full max-w-xs"
            />
            <div>
              <button className="btn btn-primary">Sign-in</button>
            </div>
          </form>
          <div className="py-5">
            <p>
              Already have an account?
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin
