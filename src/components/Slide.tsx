import "./Styles.css"
import {useState, useEffect, FormEvent, useContext} from 'react' 
import {BsFillBookmarkFill} from 'react-icons/bs'
import {GlobalContext} from '../context/GlobalState'

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
    total_pages: number
};


type SlideProps = {
    title: string;
    source: string;
}

export let Slide = (props:SlideProps) => {

    const {addMovie} = useContext(GlobalContext)

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

    const handleClick = (event:FormEvent) => {
        event.preventDefault()
        addMovie(movs[Number(event.currentTarget.id)])
        console.log("Was Clicked")
        console.log(event.currentTarget.id)
        console.log(movs[Number(event.currentTarget.id)])
    }

    var idNum:number = -1
    
    return(
    <div>
        <h3 className='sliderTitle'>{props.title}</h3>  
        <div className='sliderStyle'>
            {movs.map((mov) => {
                if (mov.poster_path === null){
                    idNum += 1
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
                    idNum += 1;
                    return (
                    <div key={mov.title} className='overlayPos'>
                        <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${mov.poster_path}`} alt="/"/>
                        <div className='imageOverlay'>
                            <form onSubmit={handleClick} id={idNum.toString()}>
                            <button className="bookMarkButton" type="submit"><BsFillBookmarkFill/></button>
                            </form>

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