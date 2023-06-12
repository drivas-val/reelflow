import "./Styles.css"
import {useState, useEffect} from 'react' //j
import { randomBytes } from "crypto";

interface Global {
    x: number;
}

export const global = {
    x:0,
} as Global;

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


type SlideProps = {
    title: string;
    source: string;
}

export let SingleMovie = (props:SlideProps) => {
    var randSlide = Math.floor(0 + Math.random()*(20 - 0 + 1))

    const [movs, setMovs] = useState<MovieType[]>([])
    
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

    if (movs.length === 0) {
        return null;
    }
    
    return(
    <div>
        <h3 className='sliderTitle'>{props.title}</h3>  
        <div className='overlayPos'>
            <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${movs[randSlide].poster_path}`} alt="/"/>
            <div className='imageOverlay'>
                <p className='overlayName'>{movs[randSlide].title || movs[randSlide].name}</p>
                <p className='overlayDate'>Release Date: {movs[randSlide].release_date || movs[randSlide].first_air_date}</p>
                <p className='overlayRating'>Rating: {Number(movs[randSlide].vote_average).toPrecision(2)}</p>
                <p className='overlayDescription'> Description: {movs[0].overview} </p>
            </div> 
        </div>             
    </div>
    )
}