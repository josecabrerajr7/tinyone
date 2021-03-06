import React, { Component }			from 'react';

import MediaIcons					from './media-icons.json';

import './subscribe.css';

class Subscribe extends Component {
	render() {
		return (
			<div className="container-fluid subscribe-container pb-5">
				<div className="d-flex align-content-stretch flex-wrap justify-content-center">
					<div className="d-flex flex-row">
						<h2 className="text-center subscribe-head"><b>Keep in touch with us</b></h2>
					</div>
				</div>
				<div className="d-flex align-content-stretch flex-wrap justify-content-center">
					<div className="d-flex flex-row">
						<p className="text-center subscribe-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
					</div>
				</div>
				<div className="d-flex align-content-stretch flex-wrap justify-content-center mt-2 mb-3">
					<div className="d-flex flex-row">
						<div className="d-flex justify-content-center">
							<form className="form-inline">
								<div className="form-group input-group-md">
									<input type="email" className="form-control mr-3 custom-style" placeholder="Enter your email to update" />
									<button type="submit" className="btn btn-primary btn-md">Submit</button>
								</div>
								
							</form>
						</div>
					</div>
				</div>
				<div className="d-flex align-content-stretch flex-wrap justify-content-center">
					{ MediaIcons.map(icon => (
						<div className="p-0 m-3" key={icon.id}>
							<a href={icon.link}>
								<img src={icon.iconUrl} alt={icon.alt} />
							</a>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Subscribe;