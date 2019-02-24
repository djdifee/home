import React from 'react';
import uuid from 'uuid/v4';

const reactResources = [
	{ name: 'Official intro to React', link: 'https://reactjs.org/tutorial/tutorial.html' },
	{ name: 'Introducing JSX', link: 'https://reactjs.org/docs/introducing-jsx.html' },
	{ name: 'React Hooks (from v16.8)', link: 'https://reactjs.org/blog/2019/02/06/react-v16.8.0.html' },
	{ name: 'Understanding Virtual DOM', link: 'https://bitsofco.de/understanding-the-virtual-dom/' },
];

const middleware = [
	{ name: 'Official redux-saga tutorial', link: 'https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html' },
	{ name: 'Redux connect explained', link: 'https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/' },
	{},
];

const thirdParty = [
	{ name: 'Redux DevTools plugin', link: 'https://github.com/zalmoxisus/redux-devtools-extension' },
	{ name: 'Typechecking with PropTypes (by React)', link: 'https://reactjs.org/docs/typechecking-with-proptypes.html' },
	{ name: 'Webpack official "getting started"', link: 'https://webpack.js.org/guides/getting-started/' },
];

const testing = [
	{ name: 'Getting started with Jest (official)', link: 'https://jestjs.io/docs/en/getting-started.html' },
	{ name: 'Using Enzyme with Jest', link: 'https://airbnb.io/enzyme/docs/guides/jest.html' },
	{ name: 'Introduction to Enzyme', link: 'https://airbnb.io/enzyme/' },
];

const styling = [
	{ name: 'The complete guide to SCSS/SASS', link: 'https://medium.com/@js_tut/the-complete-guide-to-scss-sass-49ac053fcde5' },
	{ name: 'A complete guide to Flexbox', link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
	{ name: 'A complete guide to grid', link: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
];

const listLinks = items => items.map(item => <p key={uuid()}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></p>);

const Resources = () => (
	<div className="content-wrapper">
		<div className="grid-two-columns margin-bottom">
			<div>
				<h4>React<br /></h4>
				{listLinks(reactResources)}
			</div>
			<div>
				<h4>Middleware<br /></h4>
				{listLinks(middleware)}
			</div>
		</div>

		<div className="grid-two-columns margin-bottom">
			<div>
				<h4>Third party<br /></h4>
				{listLinks(thirdParty)}
			</div>
			<div>
				<h4>Testing<br /></h4>
				{listLinks(testing)}
			</div>
		</div>

		<div className="grid-two-columns margin-bottom">
			<div>
				<h4>Styling<br /></h4>
				{listLinks(styling)}
			</div>
			<div />
		</div>
	</div>
);

export default Resources;
