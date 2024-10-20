//  in this components patint can know before meet the Doctor, what he have to do before meet.

function PatientPraparationInstruction() {
  return (
    <div className="ml-10 pt-10">
      <div>
        <h1 className="font-bold text-3xl pb-2">
          Pre-Surgery Preparation Instructions
        </h1>
        <div className="">
          <div className="pb-2">
            <span className="label-text text-xl m-1">Dear Imran,</span>
          </div>
          <div className="pb-2">
            <span className="label-text text-xl">
              As your surgery date approaches on [Date], please follow these
              instructions to ensure a smooth and safe procedure:
            </span>
          </div>
        </div>
        <div className="pb-2">
          <p className="font-bold text-2xl">1. Fasting Instructions:</p>
          <p className="text-xl m-1">
            No food or drink after midnight the night before your surgery. This
            includes water, gum, and candy.
          </p>
          <p className="text-xl m-1">
            If instructed by your doctor, you may take specific medications with
            a small sip of water.
          </p>
        </div>
        <div className="pb-2">
          <p className="font-bold text-2xl m-1">2. Medication Management:</p>
          <p>
            <li className="text-xl m-1">
              Blood thinners: If you are taking blood thinners (e.g., aspirin,
              warfarin), please stop taking them [X] days before surgery, as
              instructed by your doctor.
            </li>
            <li className="text-xl m-1">
              Other Medications: Continue or stop other medications as advised
              by your surgeon. Contact us if you have any questions.
            </li>
          </p>
        </div>
        <div className="pb-2">
          <p className="font-bold text-2xl m-1">3. Hygiene:</p>
          <p>
            <li className="text-xl m-1">
              Take a shower the night before and the morning of surgery using an
              antibacterial soap.
            </li>
            <li className="text-xl m-1">
              Avoid using lotions, perfumes, or makeup on the day of surgery.
            </li>
          </p>
        </div>
        <div className="pb-2">
          <p className="font-bold text-2xl m-1">4. What to Bring:</p>
          <p>
            <li className="text-xl m-1">Insurance card and ID.</li>
            <li className="text-xl m-1">Any necessary forms or paperwork.</li>
            <li className="text-xl m-1">
              Wear comfortable, loose clothing, and leave valuables at home.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientPraparationInstruction
