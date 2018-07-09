import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const platforms = [
	{
		id: 'first',
		name: 'Alternative 1',
	},
	{
		id: 'second',
		name: 'Alternative 2',
	},
	{
		id: 'third',
		name: 'Alternative 3',
	},
];

// match is an inherited property from the router
const Routes = ({ match }) => (
	<div>
		<h2>Select preferred platform</h2>
		<p>A quick expample for URL Parameters.</p>
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

Routes.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Routes;
