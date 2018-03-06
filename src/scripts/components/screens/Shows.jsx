import React, {Component} from 'react';

class Shows extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div><a href="https://www.songkick.com/artists/9300139" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-background-color="transparent">Difee tour dates</a>
			<script src="//widget.songkick.com/9300139/widget.js"></script></div>
		);
	}
}

export default Shows;
