import React from 'react';

const reactResources = [
	{ name: 'React Hooks (from v16.8)', link: 'https://reactjs.org/blog/2019/02/06/react-v16.8.0.html' },
	{ name: 'Redux connect explained', link: 'https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/' },
]

const middleware = [
	{ name: 'Official redux-saga tutorial', link: 'https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html' },
]

const listLinks = items => (
	items.map(item => <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">{item.name}<br /></a>)
)

const Resources = () => (
	<div>
		<span>React<br /></span>
		{listLinks(reactResources)}
		<span>Middleware<br /></span>
		{listLinks(middleware)}
	</div>
);

export default Resources;
