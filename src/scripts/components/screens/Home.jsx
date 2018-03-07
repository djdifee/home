import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
	requestHelloWorld
} from "../../service/actions/index";


class Home extends Component {
	constructor(props) {
		super(props);
		this.requestHelloWorld = this.requestHelloWorld.bind(this);
		this.state = {};
	}



	render() {
		return (
			<div>
				<button onClick={() => this.requestHelloWorld()}>Run saga</button>
				<span>Message: {this.props.helloWorld.helloMessage}</span>
				<span>Done loading: {this.props.helloWorld.doneLoading.toString()}</span>
			</div>
		);
	}

	requestHelloWorld() {
		console.log('Function works, trying to trigger action via props:');
		this.props.requestMessage();
	}
}

// Using PropTypes like this is a way to ensure that you get your props in the expected format
Home.propTypes = {
	helloWorld: PropTypes.shape({
		doneLoading: PropTypes.bool,
		helloMessage: PropTypes.string,
	}),
	requestMessage: PropTypes.func,
};

const mapStateToProps = state => ({
	helloWorld: state.helloWorld
});

const mapDispatchToProps = dispatch => ({
	requestMessage: payload => dispatch(requestHelloWorld(payload))
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);
