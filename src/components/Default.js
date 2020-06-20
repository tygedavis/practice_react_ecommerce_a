import React from 'react';

const Default = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
					<h1 className="display-3">404</h1>
					<h1>Error</h1>
					<h2>Page Not Found</h2>
					<h3>Requested URL <span className="text-danger">{props.location.pathname}</span> does not exist</h3>
				</div>
			</div>
		</div>
	)
};

export default Default;