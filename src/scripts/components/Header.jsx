import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { shadowDown } from '@utils/mixins';
import {
	lightBlue,
	orange,
	pink,
	purple,
	white,
} from '@utils/colors';

import logo from '@media/img/company-logo-white.png';

const Header = ({ theme }) => (
	<Wrapper theme={theme}>
		<HeaderButton to="/routes" theme={theme} activeClassName="selected">
			Routes
		</HeaderButton>
		<NavLink to="/" exact activeClassName="selected">
			<HeaderLogo src={logo} alt="logo" />
		</NavLink>
		<HeaderButton to="/resources" theme={theme} activeClassName="selected">
			Resources
		</HeaderButton>
	</Wrapper>
);

Header.propTypes = {
	theme: PropTypes.string,
};

const winterTheme = css`
	background: linear-gradient(to bottom right, ${purple}, ${lightBlue});
`;

const summerTheme = css`
	background: linear-gradient(to bottom right, ${pink}, ${orange});
`;

const Wrapper = styled.header`
	align-items: center;
  display: flex;
  height: 100px;
  justify-content: space-around;
  
  ${props => props.theme === 'winter' && winterTheme}
  ${props => props.theme === 'summer' && summerTheme}
  
  ${shadowDown(false)};
`;

const HeaderButton = styled(NavLink)`
	align-items: center;
	background: transparent;
	color: ${white};
	display: flex;
	height: 50%;
	justify-content: center;
	transition: background, color .2s;
	width: 6em;
	
	&.selected {
		outline: 2px solid ${white};
	}
	
	a {
    text-decoration: none;
  }
	
	&:hover {
		background: ${white};
		${props => props.theme === 'winter' && `color: ${purple}`};
		${props => props.theme === 'summer' && `color: ${orange}`};
		transition: background .2s;
	}
`;

const HeaderLogo = styled.img`
	height: 60px;
`;

export default Header;
