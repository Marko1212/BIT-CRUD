import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import "./Register.css";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

import { register } from "../../../services/registerService";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }

  handleInputChange(event) {
    console.log('* * *');
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitRegister() {
    let submitData = {
      name: this.state.firstname,
      email: this.state.email,
      password: this.state.password
    }
    register(submitData)
      .then(response => {
        console.log('response after registration attempt...');
        console.log(response);
        // onDataFetched();
      })

  }

  render() {

    let onClick = () => {
      console.log('click');
      this.submitRegister();
    }

    return (
      <div className="container">

        <div className="row">
          <Title text={"Register"} />
          <FormTitle title={"Sign up"} />
        </div>

        <div className="row">

          <div className={"col s12"}>
            <label>
              {"First Name *"}
              <input
                type="text"
                className="validate"
                name="firstname"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className={"col s12"}>
            <label>
              {"Last Name *"}
              <input
                type="text"
                className="validate"
                name="lastname"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

        </div>

        <div className="row">

          <div className={"col s12"}>
            <label>
              {"Email Address *"}
              <input
                type="text"
                className="validate"
                name="email"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className={"col s12"}>
            <label>
              {"Password *"}
              <input
                type="password"
                className="validate"
                name="password"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

        </div>

        <div className="row">
          <CheckBox children={"I want to receive inspiration, marketing promotions and updates via email."} />
        </div>

        <div className="row">
          <Button text={"SIGN UP"} onClick={onClick} />
        </div>

        <div className="row">
          <p>Already have an account? <Link to={"/login"}>Sign in</Link></p>
        </div>

      </div>
    );
  }
}
export default Register;
