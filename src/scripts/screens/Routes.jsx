import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	black,
	white,
} from '@utils/colors';

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
	<Wrapper>
		<h2>Select preferred platform</h2>
		<p>A quick example for URL Parameters.</p>
		<p>When you change a route within a&nbsp;
			<a href="https://reacttraining.com/react-router/core/api/Switch" rel="noopener noreferrer" target="_blank">
				switch element
			</a>
			, only the content within it will re-render. This makes it a little easier for the page to switch routes, and to
			keep some visualizations up while the route is changing.
		</p>
		<TabButton>
			{platforms.map(platform => (
				<NavigationButton
					to={`${match.url}/${platform.id}`}
					key={platform.id}
					activeClassName="active-platform"
				>	{platform.name}
				</NavigationButton>
			))}
		</TabButton>
		<ChildRouteContainer>
			{/* You can have a switch within a switch to make child routes, but remember to use the match prop! */}
			<Switch>
				{platforms.map(platform => (
					<Route key={platform.id} path={`${match.url}/${platform.id}`} exact>
						<div>Hei {platform.name}</div>
					</Route>
				))}
			</Switch>
		</ChildRouteContainer>
	</Wrapper>
);

Routes.propTypes = {
	match: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
`;

const TabButton = styled.div`
	display: flex;
	height: 2em;
	justify-content: space-around;
`;

const NavigationButton = styled(NavLink)`
  align-items: center;
  color: ${black};
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none !important;
  transition: color .2s;
  width: 8em;
  
  &:hover, &.active-platform {
  background: ${black};
    color: ${white};
    transition: color .2s;
    }
`;

const ChildRouteContainer = styled.div`
  border: 1em solid ${black};
  padding: 1em 3em;
`;

export default Routes;
