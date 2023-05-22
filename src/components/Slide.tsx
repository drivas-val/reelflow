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

export let Slide = (props:SlideProps) => {

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
            {movs.map((mov) => {
                if (mov.poster_path === null){
                    return (
                    <div key={mov.title} className='overlayPos'>
                    <img className='posterStyle' src={`https://www.theprytania.com/template_1/img/default-movie-portrait.jpg`} alt="/"/>
                    <div className='imageOverlay'>
                            <p className='overlayName'>{mov.title || mov.name}</p>
                            <p className='overlayDate'>Release Date: {mov.release_date || mov.first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {mov.overview} </p>

                        </div>
                    </div>
                    )
                }
                else{
                    return (
                    <div key={mov.title} className='overlayPos'>
                        <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${mov.poster_path}`} alt="/"/>
                        <div className='imageOverlay'>
                            <p className='overlayName'>{mov.title || mov.name}</p>
                            <p className='overlayDate'>Release Date: {mov.release_date || mov.first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {mov.overview} </p>

                        </div>
                    </div>
                    )
                }
            })}
        </div>             
    </div>
    )
}