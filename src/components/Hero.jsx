
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
              Why people go to Anesthesiologists specilist?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
