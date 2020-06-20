import React from 'react';
import { ProductConsumer } from '../../context';

//Components
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = props => {
	return (
		<section>
			<ProductConsumer>
				{value => (
					<div>
						{value.cart.length === 0 ? <EmptyCart /> 
						: <div>
								<Title name="Your " title="Cart"/>
								<CartColumns />
								<CartList value={value} />
								<CartTotals value={value} history={props.history} />
							</div>
						}
					</div>
				)}
			</ProductConsumer>
		</section>
	)
};

export default Cart;