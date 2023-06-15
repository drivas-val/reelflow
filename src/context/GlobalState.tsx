import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
import {MovieType} from '../components/Slide'

type initialStateType = {
    folioList:  MovieType[];
    ratedList: MovieType[];
    addMovie: (movie:any) => void;
    removeMovie: (movie:any) => void;
}

const initialState: initialStateType = {
    folioList: localStorage.getItem('folioList') ? JSON.parse(localStorage.getItem('folioList') as string) : [],
    ratedList: localStorage.getItem('ratedList') ? JSON.parse(localStorage.getItem('ratedList') as string) : [],
    addMovie: (movie:any) => {},
    removeMovie: (movie:any) => {}
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("folioList", JSON.stringify(state.folioList))
        // localStorage.setItem("ratedList", JSON.stringify(state.ratedList))
    }, [state])

    const addMovie = (movie:any) => {
        dispatch({type: "ADD_MOVIE", payload: movie})
    }

    const removeMovie = (movie:any) => {
        dispatch({type: "REMOVE_MOVIE", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{
            folioList: state.folioList,
            ratedList: state.ratedList,
            addMovie,
            removeMovie,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}