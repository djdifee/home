import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const script = document.createElement('script');

		script.src = "http://widget.songkick.com/9300139/widget.js"

		document.body.appendChild(script);
	}

	render() {
		return (
			<div>
				<a
					href="https://www.songkick.com/artists/9300139"
					className="songkick-widget"
					data-theme="light"
					data-font-color="#000000"
					data-background-color="transparent"
				>Difee show dates</a>
			</div>
		);
	}
}

Home.propTypes = {};

export default Home;
