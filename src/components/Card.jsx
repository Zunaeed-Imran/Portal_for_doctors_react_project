import { FaLungs } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { FaBrain } from 'react-icons/fa';
import { LiaTeethOpenSolid } from 'react-icons/lia';
import { GiKidneys } from 'react-icons/gi';


function Card() {
  return (
    <div>
      <div className="flex">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <FaHeartbeat size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Health Care</h2>
            <p>
              Specialist amet consectetur adipisicing elit. Consectetur, nostrum
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <LiaTeethOpenSolid size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Fluoride Treatment consectetur adipisicing elit, nostrum we have
              speliest
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <IoEye size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Eye Specialist</h2>
            <p>
              Eye Specialist amet consectetur adipisicing elit. Consectetur,
              nostrum
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <FaBrain size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brain Specialist</h2>
            <p>
              Brain Specialist amet consectetur adipisicing elit. Consectetur,
              norowey
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <FaLungs size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lung Treatment</h2>
            <p>
              Lung Specialist amet consectetur adipisicing elit. Consectetur UK
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergency</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <GiKidneys size="6rem" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kidney Transplant</h2>
            <p>
              Kidney Transplant amet consectetur adipisicing elit. Consectetur,
              Swiden
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Emergancy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
