import { SWITCH_THEME } from '../constants';

const initialState = {
	selectedTheme: '',
};

// This shows that you can dispatch actions and use the store without going through the Saga

export default function reducer(state = initialState, action) {
	switch (action.type) {
	case SWITCH_THEME:
		return Object.assign({}, state, {
			selectedTheme: action.theme,
		});
	default:
		return state;
	}
}
