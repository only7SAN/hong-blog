import React,{ Component }from 'react';
import ReactDOM,{ render }from 'react-dom';
import { Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

import Root from './layouts/root';



var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

render(
	<Provider store={store} >
		<Router history = {history}>
			<Route path='/' component = {Root}>
				<IndexRoute component = {ArticlesList} />
				<Route path="article/create" component = {ArticleNew} />
				<Route path="article/:id" component = {ArticleDetail} />
				<Route path="user/list" component = {UserList} />
				<Route path="signin" component = {SignIn} />
				<Route path="signup" component = {SignUp} />
				<Route path="signout" component = {SignOut} />
			</Route>
		</Router>
	</Provider>
	,document.getElementById('app'));