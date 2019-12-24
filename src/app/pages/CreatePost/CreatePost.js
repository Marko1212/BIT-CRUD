import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
// import Input from "../../components/Input/Input";
import Checkbox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { Link, Redirect } from 'react-router-dom';

import { postCreate } from "../../../services/postsService";


class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitCreate = this.submitCreate.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitCreate() {
    let submitData = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.imageUrl,
      text: this.state.text,
      isPublic: true
    }
    postCreate(submitData);
  }

  render() {

    let onClick = () => {
      console.log('click');
      this.submitCreate();
    }

    return (
      <div className="container">

        <div className="row">
          <Title text={"Create post"} />
        </div>

        <div className="row">

          <div className="col s12">
            <label>
              {"Title"}
              <input
                type="text"
                className="validate"
                name="title"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="col s12">
            <label>
              {"Subtitle"}
              <input
                type="text"
                className="validate"
                name="subtitle"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="col s12">
            <label>
              {"image URL"}
              <input
                type="text"
                className="validate"
                name="imageUrl"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="col s12">
            <label>
              {"Body"}
              <input
                type="text"
                className="validate"
                name="text"
                onChange={this.handleInputChange}
              />
            </label>
          </div>

        </div>
        <div className="row">
        </div>
        <div className="row">
          <Button text={"SAVE"} onClick={onClick} />
        </div>
        <div className="row">
        </div>

      </div>
    );
  }
}

export default CreatePost;
