import Review from "./Review"
import manA from '../assets/a.png';
import manB from '../assets/b.png';

function ReviewCard() {
  return (
    <div>
      <Review img={ manA } />
      <Review img={manB} />
      <Review img={ manB } />
    </div>
  );
}

export default ReviewCard
