import React from "react";
import {useForm} from 'react-hook-form'

const ReactHookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset()
  }
  return (
    <div>
      <h2>React hook form</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            name="email"
            type="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p>Email is required</p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            name="password"
            type="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p>Password is Required</p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p>Password should be minimum 8 charcters </p>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReactHookPage;
