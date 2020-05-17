import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<TitleContainer>You don't have an account ?</TitleContainer>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						required
						handleOnChange={this.handleOnChange}
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="Email"
						required
						handleOnChange={this.handleOnChange}
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="Password"
						required
						handleOnChange={this.handleOnChange}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm Password"
						required
						handleOnChange={this.handleOnChange}
					/>
					<div className="buttons">
						<CustomButton type="submit"> SIGN UP </CustomButton>
					</div>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
