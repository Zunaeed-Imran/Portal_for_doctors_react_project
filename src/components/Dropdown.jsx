



function Dropdown() {


  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-[#7c9dcf]">
          See_list
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <a>Item 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown

