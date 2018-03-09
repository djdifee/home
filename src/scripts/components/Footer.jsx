import React from 'react';
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
	}
];

const Footer = () => {
	return (
		<div className="footer-content">
			<div className="social-medias">
				{/* You can map within the html to easier render lists */}
				{socialMedias.map(social => (
					<a key={social.id} target="_blank" href={social.link} className="social-icon">
						{social.logo}
					</a>
				))}
			</div>
		</div>
	);
};

export default Footer;
