// in this we will see the list for to take before Anesthesia.


function PreAnesthesiaCheck() {
  return (
    <div className="ml-10">
      <div>
        <h1 className="font-bold text-3xl m-5">
          This is pre Anesthesia Check list
        </h1>
        <div>
          <form className="font-bold gap-3" action="">
            <div className="">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="">
              <input
                type="number"
                placeholder="Date of birth"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="">
              <input
                type="number"
                placeholder="Medical record Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </form>
        </div>

        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Previous anesthesia history e.g., any adverse reactions
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              History of allergies especially to medications, latex, or foods
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Current medications include herbal supplements or over-the-counter
              drugs
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              History of chronic diseases e.g., asthma, diabetes, hypertension,
              heart disease
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Recent illnesses (e.g., cold, cough, fever)
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Any past surgeries or hospitalizations
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Vital signs (heart rate, blood pressure, oxygen saturation, etc.)
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Airway assessment (e.g., Mallampati score to predict difficulty in
              intubation)
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Respiratory and cardiovascular system examination
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Check for any loose teeth or dental issues
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Fasting status (typically no food 6-8 hours before anesthesia)
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Blood tests (e.g., complete blood count, coagulation profile)
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Electrolytes and glucose levels
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Chest X-ray (if needed)</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div className="form-control items-center">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">
              Confirm the availability of the surgical team and anesthesiologist
            </span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <div>
          <button className="btn btn-active btn-accent">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default PreAnesthesiaCheck;
