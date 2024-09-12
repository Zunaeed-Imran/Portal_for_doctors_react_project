
function DoctorList() {
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-[#7c9dcf]">
          <h2 className="flex gap-2 items-center">
            fffff
            See_list
          </h2>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href="#">Doctor Strength</a>
          </li>
          <li>
            <a href="#">Accepted Insurance</a>
          </li>
          <li>
            <a href="#">Events Calendar</a>
          </li>
          <li>
            <a href="#">Finalcial Assistance</a>
          </li>
          <li>
            <a href="#">Give to Cleveland Clinic</a>
          </li>
          <li>
            <a href="#">Pay Your Bill Online</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorList
