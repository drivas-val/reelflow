
export default (state:any, action:any) => {
    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state, 
                folioList: [action.payload, ...state.folioList],
            }
        default: 
            return state
    }
}