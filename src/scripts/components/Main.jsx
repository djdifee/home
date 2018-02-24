import React, {Component} from 'react';
import Contact from "./screens/Contact";
import PageNotFound from "./PageNotFound";
import Home from "./screens/Home";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('This shit:' +
			'<Switch>\n' +
			'\t\t\t\t<Route path="/contact" component={Contact} />\n' +
			'\t\t\t\t<Route path="/" exact component={Home} />\n' +
			'\t\t\t\t<Route component={PageNotFound} />\n' +
			'\t\t\t</Switch>')
	}

	render() {
		return (
			<span>Main page</span>
		);
	}
}

export default Main;
