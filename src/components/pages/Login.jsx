import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="pt-20 hero">
      <div className="min-h-screen">
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="" className="text-2xl font-semibold m-5">
            User Login
          </label>

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />

          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <div className="py-5">
          <p>
            Dont have account?
            
            <Link className="link link-primary" to="/signin">
              Sign-in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login
