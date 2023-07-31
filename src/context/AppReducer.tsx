import {MovieType} from "../components/Slide"

/*
Global Action by case
*/
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
            };
        case "UPDATE_MOVIE":
            console.log('update movie');
            const { id, key, value } = action.payload;
            const movie = state.folioList.find((m:any) => m.id === id);
            movie![key] = value;
            return{
                ...state,
                folioList: [...state.folioList],
            };
        case "ADD_COMPARE":
            console.log('add compare');
            return {
                ...state,
                compareList: [action.payload, ...state.compareList],
            };
        case "REMOVE_COMPARE":
            console.log('remove compare');
            return{
                ...state,
                compareList: state.compareList.filter((movie:MovieType) => movie.id !== action.payload.id)
            };
        default: 
            return state
    }
}