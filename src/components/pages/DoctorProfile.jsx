import DoctorComponent from "../layout/DoctorComponent"
import doctor1 from '../../assets/avater/1.jpg';
import doctor6 from '../../assets/avater/9.jpg';
import doctor4 from "../../assets/avater/4.jpg";
import Footer from "../layout/Footer";
import Search from "../layout/Search";
import DoctorAvailability from "../layout/DoctorAvailability";
import PageTitle from "../PageTitle";

function DoctorProfile() {
  return (
    <>
      <PageTitle title='Doctors'/>
      <div className="grid grid-cols-3 gap-3 pt-20">
        <div className="col-span-2">
          <Search />
        </div>

        <DoctorAvailability />
      </div>

      <div className="flex box-content pt-24 gap-1 justify-center items-center">
        <DoctorComponent
          img={doctor1}
          desig={"Dr.Vincent Barron"}
          title={"Family Medicine / General Practitioner"}
          desc={
            "Professional Background: Dr. Jane Doe is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular diseases."
          }
        />

        <DoctorComponent
          img={doctor6}
          desig={"Dr.Jordon Hess"}
          title={"Family Medicine / General Practitioner"}
          desc={
            "Professional Background: Dr. Jane Doe is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular diseases."
          }
        />

        <DoctorComponent
          img={doctor4}
          desig={"Dr.Lily Miranda"}
          title={"Family Medicine / General Practitioner"}
          desc={
            "Professional Background: Dr. Jane Doe is a board-certified cardiologist with over 15 years of experience in diagnosing and treating cardiovascular diseases."
          }
        />
      </div>

      <div className="flex p-3 gap-3"></div>
      
      <Footer />
    </>
  );
}

export default DoctorProfile
