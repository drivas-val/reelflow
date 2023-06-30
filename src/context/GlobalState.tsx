import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
import {MovieType} from '../components/Slide'

type initialStateType = {
    folioList:  MovieType[];
    ratedList: MovieType[];
    compareList: MovieType[];
    addMovie: (movie:any) => void;
    removeMovie: (movie:any) => void;
    addCompare: (movie:any) => void;
    removeCompare: (movie:any) => void;
}

const initialState: initialStateType = {
    folioList: localStorage.getItem('folioList') ? JSON.parse(localStorage.getItem('folioList') as string) : [],
    ratedList: localStorage.getItem('ratedList') ? JSON.parse(localStorage.getItem('ratedList') as string) : [],
    compareList: localStorage.getItem('compareList') ? JSON.parse(localStorage.getItem('compareList') as string) : [],
    addMovie: (movie:any) => {},
    removeMovie: (movie:any) => {},
    addCompare: (movie:any) => {},
    removeCompare: (movie:any) => {},
}


export const GlobalContext = createContext(initialState)

/*
Global Provider Wrapped in main App (App.tsx)
*/
export const GlobalProvider = (props:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("folioList", JSON.stringify(state.folioList))
        localStorage.setItem("ratedList", JSON.stringify(state.ratedList))
        localStorage.setItem("compareList", JSON.stringify(state.compareList))
    }, [state])

    const addMovie = (movie:any) => {
        dispatch({type: "ADD_MOVIE", payload: movie})
    }

    const removeMovie = (movie:any) => {
        dispatch({type: "REMOVE_MOVIE", payload: movie})
    }

    const addCompare = (movie:any) => {
        dispatch({type: "ADD_COMPARE", payload: movie})
    }

    const removeCompare = (movie:any) => {
        dispatch({type: "REMOVE_COMPARE", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{
            folioList: state.folioList,
            ratedList: state.ratedList,
            compareList: state.compareList,
            addMovie,
            removeMovie,
            addCompare,
            removeCompare,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}