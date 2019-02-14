import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../../media/img/company-logo-white.png';

const Header = ({ theme }) => (
	<header className={`app-header ${theme}`}>
		<NavLink to="/routes" className="header-button" activeClassName="selected">
			<span>Routes</span>
		</NavLink>
		<NavLink to="/" exact activeClassName="selected">
			<img src={logo} className="header-logo" alt="logo" />
		</NavLink>
		<NavLink to="/resources" className="header-button" activeClassName="selected">
			<span>Resources</span>
		</NavLink>
	</header>
);

Header.propTypes = {
	theme: PropTypes.string,
};

export default Header;
