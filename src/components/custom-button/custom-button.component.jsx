import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignInButton, ...otherProps }) => (
  <button className={`custom-button ${isGoogleSignInButton ? 'google-sign-in' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
