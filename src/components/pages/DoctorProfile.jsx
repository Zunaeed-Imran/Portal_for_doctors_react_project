import DoctorComponent from "../layout/DoctorComponent"
import doctor1 from '../../assets/avater/1.png';

function DoctorProfile() {
  return (
    <div>
      <DoctorComponent
        img={doctor1}
        desig={'Dr.Vincent Barron'}
        title={'Family Medicine / General Practitioner'}
        desc={'Professional Background: Dr. Jane Doe is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular diseases.'} />
    </div>
  )
}

export default DoctorProfile
