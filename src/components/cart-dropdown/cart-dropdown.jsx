import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart.item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		{cartItems.length ? (
			<div className="cart-items">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
		) : (
			<span className="empty-message">Your cart is empty</span>
		)}
		<CustomButton onClick={() => history.push('/checkout')}> GO TO CHECKOUT </CustomButton>
	</div>
);

const mapStageToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStageToProps)(CartDropdown));
