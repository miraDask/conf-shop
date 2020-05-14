import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemsCount}</span>
	</div>
);

const mapStageToProps = ({ cart: { cartItems } }) => ({
	itemsCount: cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStageToProps, mapDispatchToProps)(CartIcon);
