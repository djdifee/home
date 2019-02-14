import {
	all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import {
	RECEIVE_SWANSON_QUOTE,
	REQUEST_SWANSON_QUOTE,
} from '../constants';

/** *********************************************************** */
/** *********************** Callers *************************** */
/** *********************************************************** */

// Callers are used to to do the actual fetching against some API
function callSwansonQuote() {
	return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
		.then(res => res.json())
		.then(data => (data))
		.catch((ex) => {
			console.warn('Parsing failed: ', ex);
			return ({ ex });
		});
}

/** *********************************************************** */
/** ********************** FETCHERS *************************** */
/** *********************************************************** */

// The watcher will fire this function when the REQUEST_SWANSON_QUOTE action has been dispatched

function* fetchSwansonQuote() {
	try {
		const response = yield call(callSwansonQuote);
		if (response) {
			yield put({
				type: RECEIVE_SWANSON_QUOTE,
				response,
			});
		}
	} catch (err) {
		console.warn('Saga failed with response: ', err);
	}
}

/** *********************************************************** */
/** ********************** WATCHERS *************************** */
/** *********************************************************** */
/*
  Use saga helpers to decide how to react to an action, like 'takeLatest' or 'takeAll'
  Read more about this here: https://redux-saga.js.org/docs/api/
*/
function* watchSwansonQuote() {
	yield takeLatest(REQUEST_SWANSON_QUOTE, fetchSwansonQuote);
}

export default function* rootSaga() {
	yield all([
		fork(watchSwansonQuote),
	]);
}
