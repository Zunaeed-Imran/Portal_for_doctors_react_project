

function DoctorDropdownList() {
  return (
    <div>
      <div className="dropdown z-30">
        <div tabIndex={0} role="button" className="btn bg-[#7c9dcf]">
          <h2 className="flex gap-2 items-center">Doctors_list</h2>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href="#">Dr.Vincent Barron</a>
          </li>
          <li>
            <a href="#">Dr.Gregg Phelps</a>
          </li>
          <li>
            <a href="#">Dr.Kristy Holt</a>
          </li>
          <li>
            <a href="#">Dr.Deandre Serrano</a>
          </li>
          <li>
            <a href="#">Dr.Bettye Cain</a>
          </li>
          <li>
            <a href="#">Dr.Chance Stein</a>
          </li>
          <li>
            <a href="#">Dr.Jordon Hess</a>
          </li>
          <li>
            <a href="#">Dr.Blair Bender</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorDropdownList
