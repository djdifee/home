import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { requestSwansonQuote } from '@service/actions/index';
import profilePic from '@media/img/swanson_profile.jpg';
import reduxSagaLifecycle from '@media/img/redux_saga_lifecycle.jpg';
import { Button } from '@components';

const Home = ({ requestQuote, swansonQuote }) => (
	<Wrapper>
		<div>
			<h2>Redux Saga lifecycle</h2>
			<p>This is Ron Swanson. He has some funny quotes.</p>
			<p>
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
			<Button text="Fetch quote" onClick={() => requestQuote()} />
			{swansonQuote.totalQuotes ? (
				<div>
					<p>When the server responds, the loading variable toggles back, and the reducer ads the response to the store</p>
					<LifeCycle src={reduxSagaLifecycle} alt="lifecycle" />
				</div>
			) : null}
		</div>
		<div>
			<ProfilePic src={profilePic} alt="profile pic" />
			<span>Total quotes fetched: {swansonQuote.totalQuotes}</span>
			<br />
			<span>Loading: {swansonQuote.loading.toString()}</span>
			<MessageContainer>
				<span>Message from Ron: </span>
				<span>{swansonQuote.latestQuote}</span>
			</MessageContainer>
		</div>
	</Wrapper>
);

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

// Add styles with styled-components
const Wrapper = styled.div`
	display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: column;
  max-width: 960px;
  width: 100%;
`;

const ProfilePic = styled.img`
	margin: 1em;
	width: 100%;
`;

const LifeCycle = styled.img`
	width: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
	margin-top: 1em;
	padding: 0 1em;
`;

// Connect your component with the states and dispatchers
// You can read more about this here: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
