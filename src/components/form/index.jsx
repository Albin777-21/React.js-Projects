import React, { useState } from "react";

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    console.log(event);
    const { value } = event.target;
    setNameValue(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameValue, emailValue);
  }

  function handleEmail(event) {
    const { value } = event.target;
    setEmailValue(value);
  }
//This is for dynamic fields
  function handleOnChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={handleOnChange}
          value={formData.name}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
