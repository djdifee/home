import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
	requestHelloWorld,
	requestSwansonQuote,
} from "../../service/actions/index";


class Home extends Component {
	constructor(props) {
		super(props);
		this.requestHelloWorld = this.requestHelloWorld.bind(this);
		this.state = {};
	}

	render() {
		return (
			<div className="content-wrapper">
				{/* Traditional functions has to be binded in the constructor */}
				<button onClick={() => this.requestHelloWorld()}>Run saga</button>
				<span>Message: {this.props.helloWorld.helloMessage}</span>
				<span>Done loading: {this.props.helloWorld.doneLoading.toString()}</span>

				{/* If function is being passed down, you can access the directly via props */}
				<button onClick={() => this.props.requestQuote()}>Request a quote from Ron Swanson</button>
				<span>Total quotes fetched: {this.props.swansonQuote.totalQuotes}</span>
				<span>Loading: {this.props.swansonQuote.loading.toString()}</span>
				<span>Message from Ron: <br/>{this.props.swansonQuote.latestQuote}</span>
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
	swansonQuote: PropTypes.shape({
		latestQuote: PropTypes.string,
		loading: PropTypes.bool,
		totalQuotes: PropTypes.number,
	}),
	requestMessage: PropTypes.func,
	requestQuote: PropTypes.func,
};

const mapStateToProps = state => ({
	helloWorld: state.helloWorld,
	swansonQuote: state.swansonQuote,
});

const mapDispatchToProps = dispatch => ({
	requestMessage: payload => dispatch(requestHelloWorld(payload)),
	requestQuote: payload => dispatch(requestSwansonQuote(payload))
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);
