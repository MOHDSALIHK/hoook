

import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form  onSubmit={handleSubmit(handleRegistration)}>
      <div >
        <label>Name</label>
        <input style={{width:'120px',height:'30px'}} name="name" {...register('name')} />
      </div>
      <div>
        <label>number</label>
        <input style={{width:'120px',height:'30px'}} type="number" name="number" {...register('email')} />
      </div>
      <div>
        <label>email</label>
        <input style={{width:'120px',height:'30px'}} type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>education</label>
        <input style={{width:'120px',height:'30px'}} type="text" name="education" {...register('email')} />
      </div>
      <div>
        <label>place</label>
        <input style={{width:'120px',height:'30px'}} type="text" name="place" {...register('email')} />
      </div>
      <div>
        <label>address</label>
        <input style={{width:'120px',height:'30px'}} type="text" name="address" {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;

