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
            className="flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-[#7c9dcf]"
          >
            <FaHome />
            Home
          </Link>
        </button>

        <h2 className="px-6 flex btn bg-[#7c9dcf]">
          <FaQuestion />
          <a href="#">Know why</a>
        </h2>

        <h2 className="px-6 flex btn bg-[#7c9dcf]">
          <TbLogin2 /> <a href="#">Login</a>
        </h2>

        <h2 className="px-6 flex btn bg-[#7c9dcf]">
          <FcAlarmClock /> <a href="#">Appoint patient</a>
        </h2>
        <Dropdown />
      </IconContext.Provider>
    </div>
  );
}
