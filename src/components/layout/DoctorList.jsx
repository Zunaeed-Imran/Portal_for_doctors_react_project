
function DoctorList() {
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-[#7c9dcf]">
          <h2 className="flex gap-2 items-center">fffff See_list</h2>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href="#">Dr.Rolland Macias</a>
          </li>
          <li>
            <a href="#">Dr.Nick Mcdowell</a>
          </li>
          <li>
            <a href="#">Dr.Deloris James</a>
          </li>
          <li>
            <a href="#">Dr.Lino Becker</a>
          </li>
          <li>
            <a href="#">Dr.Ed Good</a>
          </li>
          <li>
            <a href="#">Dr.Luella Hester</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorList
