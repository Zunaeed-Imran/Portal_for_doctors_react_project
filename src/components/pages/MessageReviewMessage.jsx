import MessageDoctor from "../layout/MessageDoctor"
import ReviewMessage from "../layout/ReviewMessage"


function MessageReviewMessage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-3 pl-20 ">
      <div className="">
        <MessageDoctor />
      </div>
      <div className="">
        <ReviewMessage />
      </div>
    </div>
  );
}

export default MessageReviewMessage
