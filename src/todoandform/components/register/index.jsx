import React from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(initialState);

  function handleRegisterFormSubmit(event) {
    event.preventDefault();
    console.log(registerFormData);
    setRegisterFormData(initialState)
    
  }
  return (
    <div>
      <h2>Register Page</h2>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterFormSubmit}

      />
    </div>
  );
};

export default RegisterComponent;
