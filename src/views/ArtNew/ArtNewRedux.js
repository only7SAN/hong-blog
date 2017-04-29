const ArtNew = (state = {
		isFetching:false
	},action) => {

		let newState;

		switch (action.type){
			case "ARTNEW/BEGIN_POST_DATA":
				newState = Object.assign({},state,{
					isFetching:true
				})
				return newState;
			case "ARTNEW/SUCCESS_POST_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					data:action.payload
				})
				return newState;
			case "ARTNEW/FAIL_POST_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					errorData:action.payload
				})
				return newState;
			default:
				return state;
		}
}

export default ArtNew;