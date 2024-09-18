import MessageDoctor from "../layout/MessageDoctor"
import ReviewMessage from "../layout/ReviewMessage"


function MessageReviewMessage() {
  return (
    <div className="p-3 pl-20 flex">
      <div className="">
        <MessageDoctor/>
      </div>
      <div className="">
        <ReviewMessage/>
      </div>
    </div>
  )
}

export default MessageReviewMessage
