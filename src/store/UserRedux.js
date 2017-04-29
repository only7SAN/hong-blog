const User = (state = JSON.parse(sessionStorage.getItem('User')),action) =>{
	let newState;

	switch (action.type){
		case "USER_SIGN_IN":
			sessionStorage.setItem('User',JSON.stringify(action.payload));
			newState = Object.assign({},state,
				JSON.parse( sessionStorage.getItem('User')));
			return newState;
		case "USER_SIGN_OUT":
			sessionStorage.removeItem('User');
			newState = null;
			return newState;
		default:
			return state;
	}
}

export default User;