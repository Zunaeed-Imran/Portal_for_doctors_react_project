import patientHistory from '../../assets/report/report_1.png';


function PatientHistory() {
  return (
    <div className="pt-20 pl-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={patientHistory} alt="Snapshot" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">Patient</div>
          </h2>

          <p>Patient History Snapshot</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">Take in single look</div>
            
            <div className="badge badge-outline">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientHistory
