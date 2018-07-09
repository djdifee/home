import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../../media/img/company-logo-white.png';

const Header = props => (
	<header className={`app-header ${props.theme}`}>
		<NavLink to="/about" className="header-button" activeClassName="selected">
			<span>About</span>
		</NavLink>
		<NavLink to="/routes" className="header-button" activeClassName="selected">
			<span>Routes</span>
		</NavLink>
		<NavLink to="/" exact activeClassName="selected">
			<img src={logo} className="header-logo" alt="logo" />
		</NavLink>
		<NavLink to="/shows" className="header-button" activeClassName="selected">
			<span>Shows</span>
		</NavLink>
		<NavLink to="/contact" className="header-button" activeClassName="selected">
			<span>Contact</span>
		</NavLink>
	</header>
);

Header.propTypes = {
	theme: PropTypes.string,
};

export default Header;
