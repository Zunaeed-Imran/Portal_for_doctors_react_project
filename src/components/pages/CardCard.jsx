import Card from "../layout/Card"
import { FaHeartbeat } from 'react-icons/fa';
import { FaLungs } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { FaBrain } from 'react-icons/fa';
import { LiaTeethOpenSolid } from 'react-icons/lia';
import { GiKidneys } from 'react-icons/gi';
import { SiKnip } from "react-icons/si";
import { RxHobbyKnife } from "react-icons/rx";


function CardCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 my-1">
      <Card
        img={<FaHeartbeat size="6rem" color="#f50031" />}
        name={'Health Care  '}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<LiaTeethOpenSolid size="6rem" />}
        name={'Fluoride Treatment'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<IoEye size="6rem" color="#2e5de8" />}
        name={'Eye Specialist'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<FaBrain size="6rem" color="	#f3b5b8" />}
        name={'Brain Specialist'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<FaLungs size="6rem" color="#d42257" />}
        name={'Lung Treatment'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<GiKidneys size="6rem" color="#9e0533" />}
        name={'Kidney Transplant'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />

      <Card
        img={<SiKnip size="6rem" color="#9e0533" />}
        name={'General Surgery'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />
      
      <Card
        img={<RxHobbyKnife size="6rem" color="#9e0533" />}
        name={'Orthopedic Surgery'}
        desc={'Specialist amet consectetur adipisicing elit. Conse'}
      />
    </div>
  );
}

export default CardCard
