import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

const Details = () => {
	return (
		<ProductConsumer>
			{value => {
				const { id, company, img, price, info, title, inCart } = value.detailProduct;

				return (
					<div className="container py-5">
						<div className="row">
							<div className="col-10 mx-auto text-center text-slanted text-blue">
								<h1>{title}</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3">
								<img src={img} alt="product" className="img-fluid" />
							</div>
							<div className="col-10 mx-auto col-md-6 my-3">
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by: <span className="text-uppercase">{company}</span></h4>
								<h4 className="text-blue"><strong>${price}</strong></h4>
								<p className="text-capitalize font-weight-bold mt-3 mb-3 text-muted lead">{info}</p>
								<div>
									<Link to='/'>
										<ButtonContainer>Back to Browsing</ButtonContainer>
									</Link>
									<ButtonContainer cart disabled={inCart? true : false} onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}>
										{inCart? 'In Cart' : 'Add to Cart'}
									</ButtonContainer>
								</div>
							</div>
						</div>
					</div>
				)
			}}
		</ProductConsumer>
	)
};

export default Details;