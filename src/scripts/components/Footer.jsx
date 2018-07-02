import React, { Component } from 'react';
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

const storage = window.sessionStorage; // eslint-disable-line

// When you don't need any functions inside of the component you should render a stateless component (basically just a function)
class Footer extends Component {
	constructor(props) {
		super(props);
		this.themeClicked = this.themeClicked.bind(this);
		this.state = {};
	}

	componentDidMount() {
		console.log('props: ', this.props);
		console.log(storage);
		if (storage.selectedTheme && !this.props.selectedTheme) {
			storage.getItem('selectedTheme');
			this.props.switchTheme(storage.selectedTheme);
		} else {
			console.warn('Local storage was not available');
			this.props.switchTheme('winter');
		}
	}

	render() {
		return (
			<div className="footer-content">
				<div className="themes">
					<span className="theme-button" onClick={() => this.themeClicked('winter')}>Winter</span>
					<span className="theme-button" onClick={() => this.themeClicked('summer')}>Summer</span>
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
	}

	themeClicked(selected) {
		console.log('selected: ', selected);
		console.log('storage: ', storage);
		console.log('props: ', this.props);
		if (storage) {
			storage.setItem('selectedTheme', selected);
			this.props.switchTheme(selected);
		} else {
			this.props.switchTheme(selected);
		}
	}
}


Footer.propTypes = {
	selectedTheme: PropTypes.string,
	switchTheme: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	switchTheme: payload => dispatch(switchTheme(payload)),
});

const mapStateToProps = state => ({
	selectedTheme: state.switchTheme.selectedTheme,
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Footer);
