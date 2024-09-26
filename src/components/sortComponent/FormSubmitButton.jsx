import { toast } from "react-toastify";


function FormSubmitButton() {


    const submit = () => {
      toast('Your form is Submitted.');
    };  

  return (
    <div onClick={submit} className="btn btn-ghost bg-green-600">
      Submit
    </div>
  );
}

export default FormSubmitButton
