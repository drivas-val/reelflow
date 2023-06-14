import {MovieType} from "../components/Slide"


export default (state:any, action:any) => {


    switch(action.type){
        case "ADD_MOVIE":
            return{
                ...state, 
                folioList: [action.payload, ...state.folioList],
            };
        case "REMOVE_MOVIE":
            return{
                ...state,
                folioList: state.folioList.filter((movie:MovieType) => movie.id !== action.payload),
            }
        default: 
            return state
    }
}