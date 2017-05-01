const Home = (state = {
		isFetching:false
	},action) => {

		let newState;

		switch (action.type){
			case "HOME/BEGIN_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:true
				})
				return newState;
			case "HOME/SUCCESS_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					articles:action.payload
				})
				return newState;
			case "HOME/FAIL_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					errorData:action.payload
				})
				return newState;
			default:
				return state;
		}
}

export default Home;