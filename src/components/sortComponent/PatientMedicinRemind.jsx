// from this components patient can know or knowledge about medicin.


function PatientMedicinRemind() {
  return (
    <div className="pt-20">
      <div>
        <p className="font-bold text-center">Weekly Medication</p>
        <div className="text-center">
          <div className="">
            <span className="label-text">Dear Imran,</span>
          </div>
          <div className="">
            <span className="label-text">
              This is your weekly reminder to stay on top of your medication
              schedule.
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold">Important:</p>
          <p>Drink a full glass of water when taking your medication.</p>
          <p>
            If you missed any doses this week, please keep a note and let us
            know during your next follow-up
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">
            Reminder to Take Your Post-Surgery Medication
          </p>
          <p>
            As part of your recovery process, we’d like to remind you to take
            your prescribed medication:
            <li>Pain Reliever: [Medication Name], [Dosage], [Frequency]</li>
            <li>Antibiotic: [Medication Name], [Dosage], [Frequency]</li>
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">Instructions:</p>
          <p>
            <li>Take the pain reliever with food to avoid an upset stomach.</li>
            <li>
              Complete the full course of antibiotics, even if you feel better.
            </li>
            If you experience any unusual symptoms (e.g., rash, severe stomach
            pain, nausea), please contact our office immediately.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientMedicinRemind
