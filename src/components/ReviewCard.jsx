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
        <Review img={manA} name={'Morgan Kosai'}/>
        <Review img={manB} name={'Caleb'}/>
        <Review img={manC} name={'Marie'}/>
        <Review img={manD} name={'Willie'}/>
        <Review img={manE} name={'Kerry'}/>
        <Review img={manF} name={'Elvis'}/>
        <Review img={manG} name={'Joan'}/>
        <Review img={manH} name={'Bertha'}/>
        <Review img={manI} name={'Valeria'}/>
        <Review img={manJ} name={'Windi Huynh'}/>
        <Review img={manK} name={'Rondy Pop'}/>
        <Review img={manL} name={'Genn'}/>
      </div>
    </Marquee>
  );
}

export default ReviewCard;
