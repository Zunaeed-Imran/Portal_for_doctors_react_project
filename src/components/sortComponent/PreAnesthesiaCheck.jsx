// in this we will see the list for to take before Anesthesia.


function PreAnesthesiaCheck() {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-3xl mb-3">
          This is pre Anesthesia Check list
        </h1>
        <div className="gap-3">
          <form className="font-bold gap-3" action="">
            <div className="my-2">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-2">
              <input
                type="date"
                placeholder="Date of birth"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-2">
              <input
                type="number"
                placeholder="Medical record Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </form>
        </div>

        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p>History of allergies especially to medications, latex, or food</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p>
            Current medications include herbal supplements or over-the-counter
            drugs
          </p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p>
            History of chronic diseases e.g., asthma, diabetes, hypertension,
            heart disease
          </p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">Recent illnesses (e.g., cold, cough, fever)</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">Any past surgeries or hospitalizations</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">
            Vital signs (heart rate, blood pressure, oxygen saturation, etc.)
          </p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">
            Airway assessment (e.g., Mallampati score to predict difficulty in
            intubation)
          </p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">Respiratory and cardiovascular system examination</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">Check for any loose teeth or dental issues</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">
            Fasting status (typically no food 6-8 hours before anesthesia)
          </p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">
            Blood tests (e.g., complete blood count, coagulation profile)
          </p>
        </div>

        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">Chest X-ray (if needed)</p>
        </div>
        <div className="form-control flex flex-row gap-2 mb-2">
          <input type="checkbox" className="checkbox" />
          <p className="">
            Confirm the availability of the surgical team and anesthesiologist
          </p>
        </div>
        <div className="p-2">
          <button className="btn btn-active btn-accent">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default PreAnesthesiaCheck;
