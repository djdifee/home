import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestSwansonQuote } from '../service/actions/index';
import { Button } from '../components';
import profilePic from '../../media/img/swanson_profile.jpg';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { requestQuote, swansonQuote } = this.props;
		return (
			<div className="content-wrapper">
				<div className="space-between">
					<div className="profile-container">
						<img src={profilePic} alt="profile pic" />
						{/* Button is a custom pure component. It expects 'text' and 'onClick' to be sent via props */}
						<Button text="Fetch quote" onClick={() => requestQuote()} />
					</div>
					<div className="half-width">
						<div className="space-around">
							<span>Total quotes fetched: {swansonQuote.totalQuotes}</span>
							<span>Loading: {swansonQuote.loading.toString()}</span>
						</div>
						<div className="message-from-ron flex-column">
							<span>Message from Ron: </span>
							<span>{swansonQuote.latestQuote}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Using PropTypes like this is a way to ensure that you get your props in the expected format
Home.propTypes = {
	swansonQuote: PropTypes.shape({
		latestQuote: PropTypes.string,
		loading: PropTypes.bool,
		totalQuotes: PropTypes.number,
	}),
	requestQuote: PropTypes.func,
};

// Access your store my using the mapStateToProps wrapper
const mapStateToProps = state => ({
	swansonQuote: state.swansonQuote,
});

// Access your actions by using the mapDispatchToProps wrapper
const mapDispatchToProps = dispatch => ({
	requestQuote: payload => dispatch(requestSwansonQuote(payload)),
});

// Connects them with Redux connect
// You can read more about this here: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
