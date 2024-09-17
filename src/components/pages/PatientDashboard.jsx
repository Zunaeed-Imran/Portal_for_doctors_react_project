import Navbar from "../Navbar"

function PatientDashboard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <div className="bg-gray-300	">
          <div className="">
            <a className="btn btn-ghost text-xl">Profile</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">Book Appointment</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">Invoice</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">Complain</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">Old Appointment</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">Report</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard
