import { FaHome, FaQuestion } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';



export default function Navbar() {
  return (
    <div className="flex bg-[#9f95c9]	">
      <IconContext.Provider value={{ size: '5rem', color: '#47352e' }}>
        <h2 className="px-6">
          <FaHome /> Home
        </h2>
        <h2 className="px-6">
          <FaQuestion /> Know why
        </h2>
        <h2 className="px-6">
          <TbLogin2 /> Login
        </h2>
        <h2 className="px-6">
          <FcAlarmClock /> Appoint patient
        </h2>
      </IconContext.Provider>
    </div>
  );
}
