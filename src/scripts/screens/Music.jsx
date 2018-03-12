import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const platforms = [
	{
		id: 'spotify',
		name: 'Spotify',
	},
	{
		id: 'soundcloud',
		name: 'SoundCloud',
	},
	{
		id: 'mixcloud',
		name: 'MixCloud',
	},
];

// match is an inherited property from the router
const Music = ({ match }) => {
	console.log('Match: ', match);
	return (
		<div>
			<h2>Select preferred platform</h2>
			<div className="tab-buttons space-around">
				{platforms.map(platform => (
					<NavLink
						to={`${match.url}/${platform.id}`}
						key={platform.id}
						activeClassName="active-platform"
						className="music-platform-alternative"
					>	{platform.name}
						<div className="animated-background" />
					</NavLink>
				))}
			</div>
			<div className="music-container">
				{/* You can have a switch within a switch to make child routes, but remember to use the match prop! */}
				<Switch>
					{platforms.map(platform => (
						<Route key={platform.id} path={`${match.url}/${platform.id}`} exact>
							<div>Hei {platform.name}</div>
						</Route>
					))}
				</Switch>
			</div>
		</div>
	);
};

Music.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Music;
