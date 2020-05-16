import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	// stripe wants price in cents:
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_A9Ae4HvuWPdzPWb5A7GtsOh1002zvvlyrD';
	const onToken = (token) => {
		console.log(token);
		alert('Payment is successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Your Confidence Shop"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
