//  this components is for to take note doctors.

function DoctorNote() {
  return (
    <>
      <textarea
        className="textarea textarea-success"
        placeholder="Procedure Notes Section."
      ></textarea>

      <br />

      <button className="btn glass">Save changes</button>
    </>
  );
}

export default DoctorNote
