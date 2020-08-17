const initialState ={
    topStories: [],
    bestStories: [],
    newStories: [],
    itemDetails: []
}

 const myReducer = (state = initialState ,action) => {
    switch(action.type){

        case "UPDATE_TOPSTORIES":
        return {
           ...state,
           topStories: action.topStories
        }

        case "UPDATE_BESTSTORIES":
        return {
            ...state,
           bestStories: action.bestStories
        }

        case "UPDATE_NEWTOPSTORIES":
        return {
            ...state,
            newStories: action.newStories
        }    

        case "UPDATE_ITEMDETAILS":
         return{
                ...state,
                itemDetails: [...state.itemDetails,action.itemDetails]
        }
        
        default:
         return state;
           
            
    }

}
    
export default myReducer;