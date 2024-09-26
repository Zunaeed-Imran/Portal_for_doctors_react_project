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
          <a href="#">
            <FaLinkedin color="#2f88cc" />
          </a>
          <a href="#">
            <FaSquareXTwitter />
          </a>
          <a href="#">
            <ImGithub />
          </a>
          <a href="#">
            <FaGooglePlay color="#33d448" />
          </a>
          <a href="#">
            <FaInstagramSquare color="#d802eb" />
          </a>
          <a href="#">
            <FaFacebookSquare color="#3358b5" />
          </a>
          <a href="#">
            <FaYoutube color="red" />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Logo;
