import { toast } from "react-toastify"


function RescheduleButton() {

  const reschedule = () => {
    toast('Your form have been reschedule');
  };

  return (
    <div>
      <button onClick={reschedule} className="btn btn-primary">Reschedule</button>
    </div>
  );
}

export default RescheduleButton
