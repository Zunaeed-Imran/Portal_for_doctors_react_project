
import heroimg from "../assets/engin-akyurt-_HN4ZNgXH5w-unsplash.jpg";
import heroBackimg from "../assets/arseny-togulev_blour.jpg";

function Hero() {

  return (
    <div>
      <div className="hero min-h-screen pt-32 xl:pt-1">
        <img src={heroBackimg} alt="" className="" />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroimg}
            alt="image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-white">
            <h1 className="text-5xl font-bold">Welcome To AnestheSure</h1>
            <p className="py-3 font-bold">
              Why people go to Anesthesiologists specilist?
            </p>
            <button className="btn bg-cyan-500 hover:bg-sky-600">
              Get Started
            </button>
            <p className="py-1">
              <b>Surgery: </b> Anesthesiologists play a crucial role in ensuring
              patients are comfortable and pain-free during surgical procedures.
              They administer anesthesia and monitor the patients vital signs
              throughout the surgery.
            </p>
            <p className="py-1">
              <b>Pain Management:</b> Anesthesiologists are involved in managing
              pain in various medical situations, such as chronic pain
              conditions or postoperative pain. They use different techniques
              and medications to help patients manage pain effectively.
            </p>
            <p className="py-1">
              <b>Labor and Delivery: </b> Anesthesiologists are often involved
              in providing pain relief during childbirth. They may administer
              epidurals or other forms of anesthesia to make the process more
              comfortable for the mothe
            </p>
            <p className="py-1">
              <b>And many more</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
