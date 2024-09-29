import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { IoIosNotifications } from "react-icons/io";


function NotifyButton() {

  const notofy = () => {
    toast("Wow new notification");
  }  

  return (
    <div>
      <button onClick={notofy}>
        <IoIosNotifications size={"1.5rem"}/>
      </button>
      <ToastContainer />
    </div>
  );
}

export default NotifyButton
