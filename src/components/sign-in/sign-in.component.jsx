import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>You already have an account ?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            label="email"
            required
            handleOnChange={this.handleOnChange}
          />
          <FormInput
            name="password"
            value={this.state.password}
            label="password"
            required
            handleOnChange={this.handleOnChange}
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
