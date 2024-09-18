import { toast, ToastContainer } from "react-toastify"


function NotifyButton() {

  const notofy = () => toast("Wow new notification");

  return (
    <div>
      <button onClick={notofy}>
        <ToastContainer/>
      </button>
    </div>
  )
}

export default NotifyButton
