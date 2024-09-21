import Card from "../layout/Card"
import { FaHeartbeat } from 'react-icons/fa';
import { FaLungs } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { FaBrain } from 'react-icons/fa';
import { LiaTeethOpenSolid } from 'react-icons/lia';
import { GiKidneys } from 'react-icons/gi';


function CardCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 my-3">
      <Card
        img={<FaHeartbeat size="6rem" color="#f50031" />}
        name={'Health Care'}
        desc={
          'Specialist amet consectetur adipisicing elit. Consectetur, nostrum'
        }
      />
      <Card
        img={<LiaTeethOpenSolid size="6rem" />}
        name={'Fluoride Treatment'}
        desc={' Fluoride Treatment consectetur adipisicing elit, nostrum we'}
      />
      <Card
        img={<IoEye size="6rem" color="#2e5de8" />}
        name={'Eye Specialist'}
        desc={'Eye Specialist amet consectetur adipisicing elit. Consectetur'}
      />
      <Card
        img={<FaBrain size="6rem" color="	#f3b5b8" />}
        name={'Brain Specialist'}
        desc={'Brain Specialist amet consectetur adipisicing elit Consectetur'}
      />
      <Card
        img={<FaLungs size="6rem" color="#d42257" />}
        name={'Lung Treatment'}
        desc={
          'Lung Specialist amet consectetur adipisicing elit. Consectetur UK'
        }
      />
      <Card
        img={<GiKidneys size="6rem" color="#9e0533" />}
        name={'Kidney Transplant'}
        desc={'Kidney Transplant amet consectetur adipisicing elit'}
      />
    </div>
  );
}

export default CardCard
