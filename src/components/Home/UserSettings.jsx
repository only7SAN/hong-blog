import React, { Component, PropTypes } from 'react';

//用户设置页面
class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state={pannelClass:""}

		this.mouseover = () => {
			this.setState({pannelClass:"pannel"})
		}
		this.mouseout = () => {
			this.setState({pannelClass:""})
		}
		this.signOut = () => {
			this.props.signOut();
		}
	}

    render(){
        return (
            <div className="user-settings" onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
            	<div className="user-settings-icon" />
            	<ul className={"user-settings-pannel "+ this.state.pannelClass }  >
            		<li className="user-pannel-signout" onClick={this.signOut}>退出</li>
            	</ul>
            </div>
                        );
    }
}


export default UserSettings;