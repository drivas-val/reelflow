import {MovieType} from "../components/Slide"


export default (state:any, action:any) => {


    switch(action.type){
        case "ADD_MOVIE":
            console.log('add movie')
            return{
                ...state, 
                folioList: [action.payload, ...state.folioList],
            };
        case "REMOVE_MOVIE":
            console.log('remove movie');
            return{
                ...state,
                folioList: state.folioList.filter((movie:MovieType) => movie.id !== action.payload.id),
            }
        default: 
            return state
    }
}