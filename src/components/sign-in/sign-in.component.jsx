import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			alert('you are not registered user. Sign up first!');
		}
		this.setState({ email: '', password: '' });
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<SignInContainer>
				<TitleContainer>You already have an account ?</TitleContainer>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
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
					<ButtonsContainer>
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
							{' '}
							Sign in with Google{' '}
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
