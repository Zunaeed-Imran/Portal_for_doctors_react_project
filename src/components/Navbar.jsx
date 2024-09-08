import { FaHome, FaQuestion } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import Dropdown from './Dropdown';



export default function Navbar() {
  return (
    <div
      className="flex justify-center fixed 
    w-full bg-[#7c89a1]	 p-3 px-96 gap-3 z-30"
    >
      <IconContext.Provider value={{ size: '1.5rem', color: '#f2f7f5' }}>
        <h2 className="px-6 flex btn bg-[#7c9dcf]">
          <FaHome /> <a href="#">Home</a>
        </h2>

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
