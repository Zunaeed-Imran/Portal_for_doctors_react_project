import { FaHome, FaQuestion } from 'react-icons/fa';
import { TbLogin2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FcBadDecision } from 'react-icons/fc';
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
}
