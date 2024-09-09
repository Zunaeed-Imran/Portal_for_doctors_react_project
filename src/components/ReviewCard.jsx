import Review from './Review';
import manA from '../assets/a.png';
import manB from '../assets/b.png';
import Marquee from 'react-fast-marquee';

function ReviewCard() {
  return (
    <Marquee pauseOnHover={true} gradient={true}>
      <div className="flex justify-center gap-5 items-center">
        <Review img={manA} />
        <Review img={manB} />
        <Review img={manB} />
      </div>
    </Marquee>
  );
}

export default ReviewCard;
