import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ImGithub } from 'react-icons/im';
import { FaGooglePlay } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Logo() {
  return (
    <div>
      <div className="min-h-[100px] flex items-center gap-1">
        <IconContext.Provider value={{ size: '2.5rem' }}>
          <a >
            <FaLinkedin color="#2f88cc" />
          </a>
          <a >
            <FaSquareXTwitter />
          </a>
          <a >
            <ImGithub />
          </a>
          <a >
            <FaGooglePlay color="#33d448" />
          </a>
          <a >
            <FaInstagramSquare color="#d802eb" />
          </a>
          <a >
            <FaFacebookSquare color="#3358b5" />
          </a>
          <a >
            <FaYoutube color="red" />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Logo;
