import React,{ Component }from 'react';
import ReactDOM,{ render }from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Root from './layouts/root';

import './views/common.scss';

import Home from './views/Home/Home';
import ArtDetail from './views/ArtDetail/ArtDetail';
import ArtNew from './views/ArtNew/ArtNew';
import SignIn from './views/SignIn/SignIn';
import SignOut from './views/SignOut/SignOut';
import SignUp from './views/SignUp/SignUp';

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
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/art/new" component={ArtNew} />
        <Route path="/art/detail/:id" component={ArtDetail} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
