import { MdEventAvailable } from "react-icons/md";


function DoctorAvailability() {
  return (
    <div className="btn hover:bg-sky-600 flex items-center gap-3 bg-yellow-100">
      <MdEventAvailable size={'2rem'} />
      Doctor is Available.
    </div>
  );
}

export default DoctorAvailability
