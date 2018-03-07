import {
	RECEIVE_HELLO_WORLD, REQUEST_HELLO_WORLD
} from '../constants';

const initialState = {
	doneLoading: false,
	helloMessage: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_HELLO_WORLD:
			console.log('Starting request');
			return initialState;
		case RECEIVE_HELLO_WORLD:
			console.log('Triggered with correct constant: ', action);
			return Object.assign({}, state, {
				doneLoading: true,
				helloMessage: action.text,
			});
		default:
			return state;
	}
};