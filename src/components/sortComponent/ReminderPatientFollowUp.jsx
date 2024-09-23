// in this components patient can know or track what i have to do or test before go to doctor.

function ReminderPatientFollowUp() {
  return (
    <div className="pt-20">
      <div>
        <p className="font-bold text-center">Follow-up Reminder System Page.</p>
        <div className="text-center">
          <div className="">
            <span className="label-text">Dear [Patients Imran],</span>
          </div>
          <div className="">
            <span className="label-text">
              This is a friendly reminder for your upcoming 2nd follow-up visit
              with Doctor Younus 22/12/2021 at 6:17 PM.
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold">What to Bring:</p>
          <p>
            Please bring any lab results, imaging (X-ray, MRI, CT scan), or
            other reports from tests that were done after your last visit.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">Medication List</p>
          <p>
            Bring an updated list of all medications you are currently taking,
            including dosage and frequency. Include any over-the-counter drugs
            and supplements.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">Pain or Symptom Journal</p>
          <p>
            If you’ve been keeping a journal of your symptoms (such as pain
            levels, swelling, etc.), please bring it with you for review.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">Insurance Information</p>
          <p>
            Bring your updated insurance card, especially if there has been a
            change in your insurance provider since your last visit.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold">Questions or Concerns</p>
          <p>
            If you have any questions or concerns about your recovery,
            medications, or symptoms, write them down and bring them with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReminderPatientFollowUp
