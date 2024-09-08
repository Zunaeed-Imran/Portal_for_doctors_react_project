
import heroimg from "../assets/engin-akyurt-_HN4ZNgXH5w-unsplash.jpg";

function Hero() {

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroimg}
            alt="image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome To Anesthesiologists Specilist
            </h1>
            <p className="py-6">
              Why people go to Anesthesiologists specilist?
            </p>
            <button className="btn btn-primary">Get Started</button>
            <p className="py-6">
              <b>Surgery: </b> Anesthesiologists play a crucial role in ensuring
              patients are comfortable and pain-free during surgical procedures.
              They administer anesthesia and monitor the patients vital signs
              throughout the surgery.
            </p>
            <p className="py-6">
              <b>Pain Management:</b> Anesthesiologists are involved in managing
              pain in various medical situations, such as chronic pain
              conditions or postoperative pain. They use different techniques
              and medications to help patients manage pain effectively.
            </p>
            <p className="py-6">
              <b>Labor and Delivery: </b> Anesthesiologists are often involved
              in providing pain relief during childbirth. They may administer
              epidurals or other forms of anesthesia to make the process more
              comfortable for the mothe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
