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
				<div className="grid-two-columns">
					<div className="profile-container">
						<img src={profilePic} alt="profile pic" />
						<p>
								This is Ron Swanson. He has some funny quotes.<br />
							When you click the button, the action REQUEST_SWANSON_QUOTE will be dispatched, which will be picked up
							by the saga. It will <i>also</i> be picked up by the reducer, which only task for this action is to
							toggle its loading variable. <br />
							You should download the<span>&nbsp;</span>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/zalmoxisus/redux-devtools-extension"
							>Redux DevTools
							</a> plugin to trace the process off dispatching actions.
						</p>
						{/* Button is a custom pure component. It expects 'text' and 'onClick' to be sent via props */}
						<Button className="margin-bottom" text="Fetch quote" onClick={() => requestQuote()} />
						<p>When the server responds, the loading variable toggles back, and the reducer ads the response to the store</p>
					</div>
					<div>
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

// Connect your component with the states and dispatchers
// You can read more about this here: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
