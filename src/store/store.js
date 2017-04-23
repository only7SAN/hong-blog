import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
	function(){},
	applyMiddleware(thunk)
	)

export default store;