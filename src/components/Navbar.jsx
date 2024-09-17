import { FaHome, FaQuestion } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import Dropdown from './layout/Dropdown';
import { Link } from 'react-router-dom';



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
            to="/"
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf] hover:bg-green-500"
          >
            <FcAlarmClock />
            Appoint_patient
          </Link>
        </button>

        <Dropdown />
      </IconContext.Provider>
    </div>
  );
}
