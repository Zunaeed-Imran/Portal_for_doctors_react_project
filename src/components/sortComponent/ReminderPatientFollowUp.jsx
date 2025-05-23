// in this components patient can know or track what i have to do or test before go to doctor.

function ReminderPatientFollowUp() {
  return (
    <div className="ml-10 pt-10">
      <div>
        <h1 className="text-3xl font-bold pb-2">Follow-up Reminder System Page.</h1>

        <div className="">
          <div className="">
            <span className="label-text text-xl pb-3">Dear [Patients Imran],</span>
          </div>

          <div className="pb-3">
            <span className="label-text text-xl">
              This is a friendly reminder for your upcoming 2nd follow-up visit
              with Doctor Younus 22/12/2021 at 6:17 PM.
            </span>
          </div>
        </div>

        <div className="pb-2">
          <p className="font-bold text-2xl pb-2">What to Bring:</p>

          <p className="text-xl ">
            Please bring any lab results, imaging (X-ray, MRI, CT scan), or
            other reports from tests that were done after your last visit.
          </p>
        </div>

        <div className="pb-3">
          <p className="font-bold text-2xl pb-2">Medication List</p>

          <p className="text-xl">
            Bring an updated list of all medications you are currently taking,
            including dosage and frequency. Include any over-the-counter drugs
            and supplements.
          </p>
        </div>

        <div className="pb-2">
          <p className="font-bold text-2xl pb-2">Pain or Symptom Journal</p>

          <p className="text-xl pb-3">
            If you’ve been keeping a journal of your symptoms (such as pain
            levels, swelling, etc.), please bring it with you for review.
          </p>
        </div>

        <div className=" pb-2">
          <p className="font-bold text-2xl pb-2">Insurance Information</p>

          <p className="text-xl pb-3">
            Bring your updated insurance card, especially if there has been a
            change in your insurance provider since your last visit.
          </p>
        </div>
        
        <div className="">
          <p className="font-bold text-2xl">Questions or Concerns</p>

          <p className="text-xl">
            If you have any questions or concerns about your recovery,
            medications, or symptoms, write them down and bring them with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReminderPatientFollowUp
