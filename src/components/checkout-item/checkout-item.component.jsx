import React from 'react';
import { connect } from 'react-redux';

import { removeItem, clearItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, price, quantity, imageUrl } = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img className="img" src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
	clearItem: (item) => dispatch(clearItem(item)),
	addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
