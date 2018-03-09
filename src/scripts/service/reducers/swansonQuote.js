import {
	REQUEST_SWANSON_QUOTE,
	RECEIVE_SWANSON_QUOTE,
} from '../constants';

const initialState = {
	latestQuote: '',
	loading: false,
	totalQuotes: 0,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
	case REQUEST_SWANSON_QUOTE:
		// If you want to use loading indicators,
		// create a loading bool that toggle when request is initiated
		return Object.assign({}, state, {
			loading: true,
		});
	case RECEIVE_SWANSON_QUOTE:
		// If you are using an API you are not able to change,
		// you can format the responses to fit your needs here
		return Object.assign({}, state, {
			latestQuote: action.response.toString(),
			loading: false,
			totalQuotes: state.totalQuotes + 1,
		});
	default:
		return state;
	}
}
