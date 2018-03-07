import {
	applyMiddleware,
	combineReducers,
	createStore,
	compose
} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';

import reducer from './service/reducers/index';
import rootSaga from './service/sagas/index';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// To enable the use of Redux DevTool in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Mount it to the store
const store = createStore(
	combineReducers(reducer),
	applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(rootSaga);
store.close = () => store.dispatch(END);

export default store;