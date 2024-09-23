//  in this components patint can know before meet the Doctor, what he have to do before meet.

function PatientPraparationInstruction() {
  return (
    <div className="pt-20">
      <div>
        <p className="font-bold text-center">
          Pre-Surgery Preparation Instructions
        </p>
        <div className="text-center">
          <div className="">
            <span className="label-text">Dear Imran,</span>
          </div>
          <div className="">
            <span className="label-text">
              As your surgery date approaches on [Date], please follow these
              instructions to ensure a smooth and safe procedure:
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold">1. Fasting Instructions:</p>
          <p>
            No food or drink after midnight the night before your surgery. This
            includes water, gum, and candy.
          </p>
          <p>
            If instructed by your doctor, you may take specific medications with
            a small sip of water.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">2. Medication Management:</p>
          <p>
            <li>
              Blood thinners: If you are taking blood thinners (e.g., aspirin,
              warfarin), please stop taking them [X] days before surgery, as
              instructed by your doctor.
            </li>
            <li>
              Other Medications: Continue or stop other medications as advised
              by your surgeon. Contact us if you have any questions.
            </li>
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">3. Hygiene:</p>
          <p>
            <li>
              Take a shower the night before and the morning of surgery using an
              antibacterial soap.
            </li>
            <li>
              Avoid using lotions, perfumes, or makeup on the day of surgery.
            </li>
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">4. What to Bring:</p>
          <p>
            <li>Insurance card and ID.</li>
            <li>Any necessary forms or paperwork.</li>
            <li>
              Wear comfortable, loose clothing, and leave valuables at home.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientPraparationInstruction
