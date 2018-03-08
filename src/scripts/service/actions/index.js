import {
	REQUEST_HELLO_WORLD,
	RECEIVE_HELLO_WORLD
} from '../constants';

// Actions can easily be written a one-liners
export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });