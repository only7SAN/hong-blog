const ArtDetail = (state = {
		isFetching:false
	},action) => {

		let newState;

		switch (action.type){
			case "ARTDETAIL/BEGIN_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:true
				})
				return newState;
			case "ARTDETAIL/SUCCESS_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					data:action.payload
				})
				return newState;
			case "ARTDETAIL/FAIL_FETCH_DATA":
				newState = Object.assign({},state,{
					isFetching:false,
					errorData:action.payload
				})
				return newState;
			default:
				return state;
		}
}

export default ArtDetail;