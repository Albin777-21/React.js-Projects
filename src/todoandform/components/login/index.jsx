import React, { useState } from "react";
import CommonForm from "../common-form";
import { loginFormElements } from "../../config";


const initialFormData={
  email: "",
  password: "",
}

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function onHandleSubmit(event){
    event.preventDefault()
    console.log(loginFormData,'loginFormData');

    setLoginFormData(initialFormData)
    
  }
  return (
    <div>
      <h2>Login Page</h2>
      <CommonForm
        formControls={loginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default LoginComponent;
