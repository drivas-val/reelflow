import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
import {MovieType} from '../components/Slide'

type initialStateType = {
    folioList:  MovieType[];
    addMovie: (movie:any) => void;
}

const initialState: initialStateType = {
    folioList: localStorage.getItem('folioList') ? JSON.parse(localStorage.getItem('folioList') as string) : [],
    addMovie: (movie:any) => {}
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("folioList", JSON.stringify(state.folioList))
    }, [state])

    const addMovie = (movie:any) => {
        dispatch({type: "ADD_MOVIE", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{folioList: state.folioList, addMovie: addMovie}}>
            {props.children}
        </GlobalContext.Provider>
    )
}