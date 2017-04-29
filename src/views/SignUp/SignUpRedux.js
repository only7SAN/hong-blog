const SignUp = (state = {
		isFetching:false
	},action) => {

		let newState;

		switch (action.type){
			case "SIGNOUT/BEGIN_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:true
				})
				return newState;
			case "SIGNOUT/SUCCESS_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					data:action.payload.data
				})
				return newState;
			case "SIGNOUT/FAIL_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					errorData:action.payload.data
				})
				return newState;
			default:
				return state;
		}
}

export default SignUp;