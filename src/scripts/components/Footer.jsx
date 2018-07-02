import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchTheme } from '../service/actions/index';
import {
	IconFacebook,
	IconInstagram,
	IconSoundCloud,
} from '../../media/socials';

const socialMedias = [
	{
		id: 'facebook',
		link: 'https://www.facebook.com/djdifee/',
		logo: IconFacebook,
		name: 'Facebook',
	},
	{
		id: 'instagram',
		link: 'https://www.instagram.com/djdifee/',
		logo: IconInstagram,
		name: 'Instagram',
	},
	{
		id: 'soundcloud',
		link: 'https://soundcloud.com/dj-difee',
		logo: IconSoundCloud,
		name: 'SoundCloud',
	},
];

// When you don't need any functions inside of the component you should render a stateless component (basically just a function)
const Footer = props => (
	<div className="footer-content">
		<div className="themes">
			<span className="theme-button" onClick={() => props.switchTheme('winter')}>Winter</span>
			<span className="theme-button" onClick={() => props.switchTheme('summer')}>Summer</span>
		</div>
		<div className="social-medias">
			{/* You can map within the html to easier render lists */}
			{socialMedias.map(social => (
				<a key={social.id} target="_blank" rel="noopener noreferrer" href={social.link} className="social-icon">
					{social.logo}
				</a>
			))}
		</div>
	</div>
);

Footer.propTypes = {
	switchTheme: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	switchTheme: payload => dispatch(switchTheme(payload)),
});

export default connect(null, mapDispatchToProps, null)(Footer);
