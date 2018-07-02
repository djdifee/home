import { SWITCH_THEME } from '../constants';

const initialState = {
	selectedTheme: 'winter',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
	case SWITCH_THEME:
		console.log('Sent string: ', action);
		return Object.assign({}, state, {
			selectedTheme: action.theme,
		});
	default:
		return state;
	}
}
