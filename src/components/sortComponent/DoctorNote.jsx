

function DoctorNote() {
  return (
    <div>
      <textarea
        className="textarea textarea-success"
        placeholder="Procedure Notes Section."
      ></textarea>
      <br />
      <button className="btn glass">Save changes</button>
    </div>
  );
}

export default DoctorNote
