import {useState, useEffect, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

type SlideProps = {
    source: string;
}

export type MovieType = {
    title: string
    poster_path: string
    name: string
    release_date: string
    first_air_date: string
    vote_average:string
    overview: string
    total_pages: number
    id: number
};

export let CompareMovie = (props:SlideProps) => {
    const [movs, setMovs] = useState<MovieType[]>([])
    const {removeCompare, addCompare, compareList} = useContext(GlobalContext)
    useEffect(() =>{
        fetch(props.source)
        .then((response) => response.json())
        .then((data) => {
            if (!data.errors){
                setMovs(data.results)
            }
            else{
                setMovs([])
            }
        })
        .catch((err) => {
            alert("Error!")
        })
    }, [])

    addCompare(movs[0])
    console.log(movs[0])

    return(
        <div>
            <>
            {console.log(movs[0])}
            </>
        </div>
    )

}