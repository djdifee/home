import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { switchTheme } from '@service/actions/index';
import {
	lightBlue,
	orange,
	pink,
	purple,
	white,
} from '@utils/colors';
import { shadowUp } from '@utils/mixins';
import {
	IconFacebook,
	IconInstagram,
	IconSoundCloud,
} from '@media/socials';

const socialMedias = [
	{
		id: 'facebook',
		link: 'https://www.facebook.com/',
		logo: IconFacebook,
		name: 'Facebook',
	},
	{
		id: 'instagram',
		link: 'https://www.instagram.com/',
		logo: IconInstagram,
		name: 'Instagram',
	},
	{
		id: 'soundcloud',
		link: 'https://soundcloud.com/',
		logo: IconSoundCloud,
		name: 'SoundCloud',
	},
];


// Session storage to hold the selected theme variable
const storage = window.sessionStorage; // eslint-disable-line

const Footer = ({ selectedTheme, toggleTheme }) => {
	/*
	* useEffect is one of the new lifecycle methods that was introduced in React 16.8.
	* This replaces both componentDidMount and componentDidUpdate.
	* Familiar yourself with this concept: https://reactjs.org/docs/hooks-effect.html
	*/
	useEffect(() => {
		if (storage) {
			if (storage.selectedTheme && !selectedTheme) {
				storage.getItem('selectedTheme');
				toggleTheme(storage.selectedTheme);
			} else if (!storage.selectedOptions && !selectedTheme) {
				toggleTheme('winter');
			}
		} else {
			console.warn('Session storage was not available, setting default theme');
			toggleTheme('winter');
		}
	});

	const themeClicked = (selected) => {
		// In case a session storage is not available in the used browser,
		// we still want to store the state
		if (storage) {
			storage.setItem('selectedTheme', selected);
			toggleTheme(selected);
		} else {
			toggleTheme(selected);
		}
	};

	return (
		<Wrapper theme={selectedTheme} className="footer-content">
			<FlexBox>
				<ThemeButton
					type="button"
					className="theme-button"
					id="theme-winter"
					onClick={() => themeClicked('winter')}
				>Winter
				</ThemeButton>
				<ThemeButton
					type="button"
					className="theme-button"
					id="theme-summer"
					onClick={() => themeClicked('summer')}
				>Summer
				</ThemeButton>
			</FlexBox>
			<FlexBox>
				{/* You can map within the html to easier render lists */}
				{socialMedias.map(social => (
					<SocialMediaButton
						key={social.id}
						aria-label={social.name}
						target="_blank"
						rel="noopener noreferrer"
						href={social.link}
						className="social-icon"
					>{social.logo}
					</SocialMediaButton>
				))}
			</FlexBox>
		</Wrapper>
	);
};

Footer.propTypes = {
	selectedTheme: PropTypes.string,
	toggleTheme: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	toggleTheme: payload => dispatch(switchTheme(payload)),
});

const mapStateToProps = state => ({
	selectedTheme: state.switchTheme.selectedTheme,
});

const Wrapper = styled.footer`
	align-items: center;
	background: ${props => (props.theme === 'summer' && `linear-gradient(to top right, ${pink}, ${orange})`)
		|| (props.theme === 'winter' && `linear-gradient(to top right, ${purple}, ${lightBlue})`)};
	color: ${white};
  display: flex;
  flex-direction: row;
  height: 3em;
  justify-content: space-between;
  padding: 0 1em;
  
  ${shadowUp(false)};
`;

const ThemeButton = styled.button`
	background: transparent;
	color: ${white};
	cursor: pointer;
	margin-right: 1em;
	text-decoration: none;
`;

const FlexBox = styled.div`
	display: flex;
`;

const SocialMediaButton = styled.a`
	color: ${white};
	cursor: pointer;
	display: flex;
	fill: ${white};
	margin-left: 1em
`;

export default connect(mapStateToProps, mapDispatchToProps, null)(Footer);
