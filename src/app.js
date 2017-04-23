import React,{ Component }from 'react';
import ReactDOM,{ render }from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Root from './layouts/root';

import ArtList from './views/ArtList';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ArtList}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
