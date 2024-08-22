import React from "react";
import CommonInput from "../common-input";
const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({ formControls = [], formData, setFormData ,buttonText,onHandleSubmit}) => {
  function renderFromElements(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) => setFormData({
              ...formData,
              [event.target.name]: event.target.value
            })}
          />
        );

        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) => setFormData({
              ...formData,
              [event.target.name]: event.target.value
            })}
          />
        );
        break;
    }
    return content;
  }
  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElement) =>
            renderFromElements(singleFormElement)
          )
        : null}
        <div style={{marginTop:'10px'}}>
          <button type="submit">{buttonText ||'Submit'}</button>
        </div>
    </form>
  );
};

export default CommonForm;
