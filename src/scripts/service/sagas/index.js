import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
	REQUEST_HELLO_WORLD,
} from '../constants';
import {
	receiveHelloWorld
} from '../actions';

// Worker saga will be fired on REQUEST_HELLO_WORLD action
function* helloWorld(action) {
	console.log('Action in saga: ', action);
	try {
		// do api call
		yield put(receiveHelloWorld('Hello world from redux saga!'));
	} catch (e) {
		yield put(receiveHelloWorld('Oh no, it failed!'));
	}
}

/*
  Use saga helpers to decide how to react to an action
  Read more about this here: https://redux-saga.js.org/docs/api/
*/
export default function* rootSaga() {
	yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}