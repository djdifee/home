import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
	black,
	darkGrey,
	textGrey,
	white,
} from '@utils/colors';

// Creating small reusable components like this is a great way of ensuring that the
// branding stays correct throughout the project.
const Button = ({ disabled, onClick, text }) => (
	<MainButton type="button" disabled={disabled} onClick={onClick}>
		{text}
	</MainButton>
);

Button.defaultProps = {
	disabled: false,
	text: '',
};

Button.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string,
};

const buttonSize = {
	topBottomPadding: '.5em',
	leftRightPadding: '1em',
};

const notDisabled = css`
	cursor: pointer;
	transition: .05s;

	&:hover {
			background: ${black};
			color: ${white};
		}
		
	&:active {
		margin: 2px 2px;
		padding: calc(${buttonSize.topBottomPadding} - 2px) calc(${buttonSize.leftRightPadding} - 2px);
	}
`;

const disabledState = css`
	cursor: not-allowed;
`;

const MainButton = styled.button`
	background: ${darkGrey};
	border: 2px solid ${darkGrey};
	color: ${textGrey};
	cursor: pointer;
	outline: none;
	padding: ${buttonSize.topBottomPadding} ${buttonSize.leftRightPadding};
	
	${props => (props.disabled ? disabledState : notDisabled)}
`;

export default Button;
