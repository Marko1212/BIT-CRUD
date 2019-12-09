import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import "./Register.css";

const Register = props => {
  return (
    <div className="container">
      <div className="row">
        <Title text={"Register"} />
        <FormTitle title={"Sing up"} />
      </div>

      <div className="row">
        <Input cols={6} type={"text"} label={"First Name *"} />
        <Input cols={6} type={"text"} label={"Last Name *"} />
      </div>

      <div className="row">
        <Input cols={12} type={"email"} label={"Email Address *"} />
        <Input cols={12} type={"password"} label={"Password *"} />
      </div>
    </div>
  );
};
export default Register;
