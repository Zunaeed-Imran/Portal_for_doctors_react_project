import { FaHome, FaQuestion } from 'react-icons/fa';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FcBadDecision } from 'react-icons/fc';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Search from './layout/Search';



export default function Navbar() {
  return (
    <div
      className="flex justify-center fixed 
    w-full bg-[#7c89a1]	 p-3 px-96 gap-3 z-50"
    >
      <IconContext.Provider value={{ size: '1rem', color: '#f2f7f5' }}>
        <button>
          <Link
            to="/"
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf] hover:bg-green-500"
          >
            <FaHome />
            Home
          </Link>
        </button>

        <button>
          <Link
            to="/"
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf] hover:bg-green-500"
          >
            <FaQuestion />
            Know_why
          </Link>
        </button>

        <button>
          <Link
            to="/"
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf] hover:bg-green-500"
          >
            <TbLogin2 />
            Login
          </Link>
        </button>

        <button>
          <Link
            to="/patientDash"
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf] hover:bg-green-500"
          >
            <FcBadDecision />
            Patient_Dashboard
          </Link>
        </button>

        <Search />
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoMdNotificationsOutline size={'1.5rem'}/>
            </div>
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
}
