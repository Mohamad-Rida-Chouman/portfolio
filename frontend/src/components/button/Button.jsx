import React from 'react';
import './button.css';

const Button = ({ className, onClick, disabled, children }) => {
	const handleClick = () => {
		if (!disabled) {
			onClick();
		}
	};
	return (
		<button className={className} onClick={handleClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
