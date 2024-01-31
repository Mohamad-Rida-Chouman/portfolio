import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
	return (
		<div className="main-container home-container">
			<Navbar />
			<div className="hero-container">
				<div className="hero-title-container">
					<div className="hero-title">
						<span className="font-large white-text">Hello, World! I'm</span>
						<br />
						<span className="font-huge white-text bold">
							Mohamad Rida Chouman
						</span>
					</div>
					<div className="hero-subtitle font-big">
						Long story short, I'm a former
						<span className="gold-text bold"> Biologist </span>
						who became a
						<span className="gold-text bold"> Full Stack Web Developer </span>
						after studying
						<span className="gold-text bold"> Bioinformatics</span>! Wanna know
						more?
					</div>
					<div className="cta-button">Book a Call</div>
				</div>
				<div className="hero-image-container">Image</div>
			</div>
		</div>
	);
};

export default Home;
