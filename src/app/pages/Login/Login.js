import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
// import Input from "../../components/Input/Input";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

import { login } from "../../../services/loginService";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitLogin() {
    let submitData = {
      email: this.state.email,
      password: this.state.password
    }
    login(submitData);
  }

  render() {
    let onClick = () => {
      console.log('click');
      this.submitLogin();
    }
    let cols = 12;

    return (
      <div className="container">

        <div className="row">
          <Title text={"Login"} />
          <FormTitle title={"Sign in"} />
        </div>

        <div className="row">

          <div className="col s12">
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

          <div className="col s12">
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
          <CheckBox children={"Remember me."} />
        </div>

        <div className="row">
          <Button text={"SIGN IN"} onClick={onClick} />
        </div>

        <div className="row">
          <p><Link to="/">Forgot password?</Link></p>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>

      </div>
    );
  }
}
export default Login;
