import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <div className="logo">Logo</div>
            </div>
            <nav className='navbar'>Navigation</nav>
            <div className="cta-container">CTA Button</div>
        </div>
        
    );
}
 
export default Navbar;