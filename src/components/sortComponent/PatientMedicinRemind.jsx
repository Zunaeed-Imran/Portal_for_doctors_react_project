// from this components patient can know or knowledge about medicin.


function PatientMedicinRemind() {
  return (
    <div className="ml-10 pt-10">
      <div>
        <p className="text-3xl font-bold pb-2">Weekly Medication</p>

        <div className="">
          <div className="">
            <span className="label-text text-xl pb-3">Dear Imran,</span>
          </div>

          <div className="pb-3">
            <span className="label-text text-xl">
              This is your weekly reminder to stay on top of your medication
              schedule.
            </span>
          </div>
        </div>

        <div className="pb-2">
          <p className="font-bold text-2xl pb-2">Important:</p>

          <p className="text-xl ">
            Drink a full glass of water when taking your medication.
          </p>

          <p className="text-xl ">
            If you missed any doses this week, please keep a note and let us
            know during your next follow-up
          </p>

        </div>

        <div className="pb-3">
          <p className="font-bold text-2xl pb-2">
            Reminder to Take Your Post-Surgery Medication
          </p>

          <p className="text-xl m-1">
            As part of your recovery process, we’d like to remind you to take
            your prescribed medication:
            <li className="text-xl m-1">
              Pain Reliever: [Medication Name], [Dosage], [Frequency]
            </li>

            <li className="text-xl pb-3">
              Antibiotic: [Medication Name], [Dosage], [Frequency]
            </li>
          </p>
        </div>

        <div className="pb-2">
          <p className="font-bold text-2xl pb-2">Instructions:</p>

          <p>
            <li className="text-xl m-1">
              Take the pain reliever with food to avoid an upset stomach.
            </li>

            <li className="text-xl m-1">
              Complete the full course of antibiotics, even if you feel better.
            </li >
            
            <p className="text-xl m-1">
            If you experience any unusual symptoms (e.g., rash, severe stomach
            pain, nausea), please contact our office immediately.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientMedicinRemind
