import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

//页面首页主题展示
class Header extends Component {

    render(){
        return (
            <div className="header container">
            	<div className="logo"><Link to='/'>Hong-Blog</Link></div>
            	<div className="header-search">
	            	<span className="header-search-title">Article</span>
	                <input className="header-search-input" type="text" placeholder="search articles" />
	                <button className="header-search-btn">Search</button>
                </div>
        	</div>
                        );
    }
}


export default Header;