import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

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
			<div className="sign-in">
				<h2 className="title">You already have an account ?</h2>
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
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignInButton={true}>
							{' '}
							Sign in with Google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
