import { toast } from "react-toastify";


function FormSubmitButton() {


    const submit = () => {
      toast('Your form is Submitted.');
    };  

  return (
    <div>
      <button
        onClick={submit}
        className="btn btn-ghost bg-green-600">
        Submit
      </button>
    </div>
  )
}

export default FormSubmitButton
