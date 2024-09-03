import { FaHome, FaQuestion } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';



export default function Navbar() {
  return (
    <div className="flex justify-around fixed w-full bg-[#9f95c9] p-3 px-96">
      <IconContext.Provider value={{ size: '1.5rem', color: '#47352e' }}>
        <h2 className="px-6">
          <FaHome /> <a href="#">Home</a>
        </h2>

        <h2 className="px-6">
          <FaQuestion />
          <a href="#">Know why</a>
        </h2>

        <h2 className="px-6">
          <TbLogin2 /> <a href="#">Login</a>
        </h2>

        <h2 className="px-6">
          <FcAlarmClock /> <a href="#">Appoint patient</a>
        </h2>
      </IconContext.Provider>
    </div>
  );
}
