import React from 'react';

const reactResources = [
	{ name: 'Official intro to React', link: 'https://reactjs.org/tutorial/tutorial.html' },
	{ name: 'React Hooks (from v16.8)', link: 'https://reactjs.org/blog/2019/02/06/react-v16.8.0.html' },
]

const middleware = [
	{ name: 'Official redux-saga tutorial', link: 'https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html' },
	{ name: 'Redux connect explained', link: 'https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/' },
]

const thirdParty = [
	{ name: 'Typechecking with PropTypes (by React)', link: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
	{ name: 'Webpack official "getting started"', link: 'https://webpack.js.org/guides/getting-started/' },
]

const listLinks = items => (
	items.map(item => <p className="margin-top" key={item.link}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></p>)
)

const Resources = () => (
	<div className="resource-grid grid-three-columns">
		<div>
			<h4>React<br /></h4>
			{listLinks(reactResources)}
		</div>
		<div>
			<h4>Middleware<br /></h4>
			{listLinks(middleware)}
		</div>
		<div>
			<h4>Third party<br /></h4>
			{listLinks(thirdParty)}
		</div>
	</div>
);

export default Resources;
