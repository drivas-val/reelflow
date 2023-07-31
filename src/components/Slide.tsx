import "./Styles.css"
import {useState, useEffect, useContext, MouseEvent} from 'react' 
import {BsFillBookmarkFill} from 'react-icons/bs'
import {GlobalContext} from '../context/GlobalState'

interface Global {
    x: number;
}

export const global = {
    x:0,
} as Global;

/*
Contains movie attributes including 
base ratings. 
*/

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
    idNum: number

    overall_personal: string | undefined
    originality: string | undefined
    creativity: string | undefined 
    plot: string | undefined
    pacing: string | undefined
    structure: string | undefined
    characters: string | undefined
    cinematography: string | undefined
    entertainment: string | undefined
    buttonBool : boolean | undefined
};


type SlideProps = {
    title: string;
    source: string;
}

/*
Creates a single verticle slide with 
values returned from the API.
Any API request that cna be mapped is valid. 
*/
export let Slide = (props:SlideProps) => {

    const {addMovie, folioList} = useContext(GlobalContext)

    const [movs, setMovs] = useState<MovieType[]>([])


    folioList.map((o) => ({ ...o, 
    overall_personal: "0", 
    originality: "0", 
    creativity: "0", 
    plot: "0", 
    pacing: "0", 
    structure: "0", 
    characters: "0", 
    cinematography: "0", 
    entertainment: "0",
    buttonBool: false
}));

    
    
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

    const handleClick = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        let currMov = movs.find(o => o.id == movId)
        currMov!.buttonBool = true
        let storedMovie = folioList.find(o => o.id == movId)
        if (!storedMovie) {
            addMovie(movs.find((m) => m.id === movId));
        }
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
                    <button onClick={(e) => handleClick(e, mov.id)} className="bookMarkButton" type="button" disabled={mov.buttonBool}><BsFillBookmarkFill/></button>
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
                            <button onClick={(e) => handleClick(e, mov.id)} className="bookMarkButton" type="button" disabled={mov.buttonBool}><BsFillBookmarkFill/></button>
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