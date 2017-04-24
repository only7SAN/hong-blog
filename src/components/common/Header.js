import React, { Component, PropTypes } from 'react';

//页面首页主题展示
class Header extends Component {

    render(){
        return (
            <div className="header container">
            	<div className="logo">Hong-Blog</div>
                <input className="header-search" type="text" placeholder="search articles" />
                <button>Search</button>
        	</div>
                        );
    }
}


export default Header;