import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineNotificationImportant } from 'react-icons/md';


function NotifyButton() {

  const notofy = () => {
    toast("Wow new notification");
  }  

  return (
    <div>
      <button onClick={notofy}>
        <MdOutlineNotificationImportant size={"1.5rem"}/>
      </button>
      <ToastContainer />
    </div>
  );
}

export default NotifyButton
