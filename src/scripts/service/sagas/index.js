import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
	RECEIVE_HELLO_WORLD,
	RECEIVE_SWANSON_QUOTE,
	REQUEST_HELLO_WORLD,
	REQUEST_SWANSON_QUOTE
} from '../constants';
import {
	receiveHelloWorld,
	receiveSwansonQuote,
} from '../actions';

/** *********************************************************** */
/** ********************** Callers *************************** */
/** *********************************************************** */

function callSwansonQuote() {
	return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
		.then(res => res.json())
		.then(data => (data))
		.catch(ex => {
			console.warn('Parsing failed: ', ex);
			return ({ex});
		});
}

/** *********************************************************** */
/** ********************** FETCHERS *************************** */
/** *********************************************************** */

// Worker saga will be fired on REQUEST_HELLO_WORLD action
function* fetchHelloWorld(action) {
	try {
		// do api call
		yield put({type: RECEIVE_HELLO_WORLD, text: 'Hello world from redux saga!'});
	} catch (e) {
		yield put(receiveHelloWorld('Oh no, it failed!'));
	}
}

function* fetchSwansonQuote(action) {
	try {
		const response = yield call(callSwansonQuote);
		if (response) {
			yield put({type: RECEIVE_SWANSON_QUOTE, response});
		}
	} catch(err) {
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
function* watchHelloWorld() {
	yield takeLatest(REQUEST_HELLO_WORLD, fetchHelloWorld);
}
function* watchSwansonQuote() {
	yield takeLatest(REQUEST_SWANSON_QUOTE, fetchSwansonQuote);
}


export default function* rootSaga() {
	yield all([
		fork(watchHelloWorld),
		fork(watchSwansonQuote),
	])
}