// this page is for Quick Appointment Booking with Pre-set Time Slots.
// 

function QuickAppointmentPreTime() {
  return (
    <div>
      <div className="card bg-stone-500	 text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Quick Appointment.</h2>
          <p>Quick Appointment Booking with Pre-set Time Slots.</p>
          <select className="select bg-lime-600	 select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Time
            </option>
            <option>9:00–9:30</option>
            <option>10:00–10:30</option>
            <option>11:00–11:30</option>
          </select>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Quick Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickAppointmentPreTime
