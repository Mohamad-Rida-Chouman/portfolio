import React from 'react';
import './navbar.css';
import '../../base.css';

const Navbar = () => {
	return (
		<div className="main-container">
			<div className="navbar-container">
				<div className="logo-container">
					<div className="logo font-big">
						<span className="gold-text bolder">&#47;&#47;M</span>ohamad &nbsp;
						<span className="gold-text bolder">R</span>ida
					</div>
				</div>
				<nav className="navbar">Navigation</nav>
				<div className="cta-container">CTA Button</div>
			</div>
		</div>
	);
};

export default Navbar;
