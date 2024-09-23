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
      </div>
    </div>
  );
}

export default ReminderPatientFollowUp
