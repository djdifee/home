import {
	REQUEST_HELLO_WORLD,
	RECEIVE_HELLO_WORLD,
	REQUEST_SWANSON_QUOTE,
	RECEIVE_SWANSON_QUOTE
} from '../constants';

// Actions can easily be written a one-liners
export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });

export const requestSwansonQuote = () => ({ type: REQUEST_SWANSON_QUOTE });
export const receiveSwansonQuote = response => ({ type: REQUEST_SWANSON_QUOTE, response });