// in this we will see the list for to take before Anesthesia.


function PreAnesthesiaCheck() {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-3xl mb-3 font2">
          This is pre Anesthesia Check list
        </h1>
        <div className="gap-3">
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

        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Previous anesthesia history e.g., any adverse reactions
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              History of allergies especially to medications, latex, or foods
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Current medications include herbal supplements or over-the-counter
              drugs
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              History of chronic diseases e.g., asthma, diabetes, hypertension,
              heart disease
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Recent illnesses (e.g., cold, cough, fever)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Any past surgeries or hospitalizations
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Vital signs (heart rate, blood pressure, oxygen saturation, etc.)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Airway assessment (e.g., Mallampati score to predict difficulty in
              intubation)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Respiratory and cardiovascular system examination
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Check for any loose teeth or dental issues
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Fasting status (typically no food 6-8 hours before anesthesia)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Blood tests (e.g., complete blood count, coagulation profile)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Electrolytes and glucose levels
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">Chest X-ray (if needed)</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text mr-2">
              Confirm the availability of the surgical team and anesthesiologist
            </span>
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
