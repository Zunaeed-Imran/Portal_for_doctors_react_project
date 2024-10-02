import { Link } from "react-router-dom";


function AdminLigin() {
  return (
    <div className="">
      <div className="pt-20 hero">
        <div className="min-h-screen">
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-semibold m-5">
              Admin login Page
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
              <Link to="/admindashboard" className="btn btn-primary">
                Log-in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLigin
