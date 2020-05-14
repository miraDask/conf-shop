import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignInButton, inverted, ...otherProps }) => (
	<button
		className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignInButton ? 'google-sign-in' : ''}`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
