import "./Styles.css"
import {useState, useEffect} from 'react' //j

interface Global {
    x: number;
}

export const global = {
    x:0,
} as Global;

type MovieType = {
    title: string
    poster_path: string
    name: string
    release_date: string
    first_air_date: string
    vote_average:string
    overview: string
};


type SlideProps = {
    title: string;
    source: string;
}

export let SingleMovie = (props:SlideProps) => {

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
        <div className='sliderStyle'>
            <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${movs[0].poster_path}`} alt="/"/>
            <div className='imageOverlay'>
                <p className='overlayName'>{movs[0].title || movs[0].name}</p>
                <p className='overlayDate'>Release Date: {movs[0].release_date || movs[0].first_air_date}</p>
                <p className='overlayRating'>Rating: {Number(movs[0].vote_average).toPrecision(2)}</p>
                <p className='overlayDescription'> Description: {movs[0].overview} </p>
            </div> 
        </div>             
    </div>
    )
}