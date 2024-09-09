import Review from './Review';
import manA from '../assets/a.png';
import manB from '../assets/b.png';
import manC from '../assets/c.png';
import manD from '../assets/d.png';
import manE from '../assets/e.png';
import manF from '../assets/f.png';
import manG from '../assets/g.png';
import manH from '../assets/h.png';
import manI from '../assets/i.png';
import manJ from '../assets/j.png';
import manK from '../assets/k.png';
import manL from '../assets/l.png';
import Marquee from 'react-fast-marquee';

function ReviewCard() {
  return (
    <Marquee pauseOnHover={true} gradient={true}>
      <div className="flex justify-center gap-5 items-center">
        <Review img={manA} />
        <Review img={manB} />
        <Review img={manC} />
        <Review img={manD} />
        <Review img={manE} />
        <Review img={manF} />
        <Review img={manG} />
        <Review img={manH} />
        <Review img={manI} />
        <Review img={manJ} />
        <Review img={manK} />
        <Review img={manL} />
      </div>
    </Marquee>
  );
}

export default ReviewCard;
