import "./Styles.css"
import {useState, useEffect, FormEvent, useContext, MouseEvent} from 'react' 
import {BsFillBookmarkFill} from 'react-icons/bs'
import {GlobalContext} from '../context/GlobalState'

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
    idNum: number

    overall_personal: string
    orginality: string
    creativity: string
    plot: string
    pacing: string
    structure: string
    characters: string
    cinematography: string
    entertainment: string
};


type SlideProps = {
    title: string;
    source: string;
}

export let Slide = (props:SlideProps) => {

    const {addMovie, folioList} = useContext(GlobalContext)

    const [movs, setMovs] = useState<MovieType[]>([])

    var folioListDisabled = false;

    
    
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

    const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let storedMovie = folioList.find(o => o.id === movs[Number(event.currentTarget.id)].id)
        folioListDisabled = storedMovie ? true : false
        console.log(folioListDisabled)
        addMovie(movs[Number(event.currentTarget.id)])
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
                    <button onClick={handleClick} id={idNum.toString()} className="bookMarkButton" type="button" disabled={folioListDisabled}><BsFillBookmarkFill/></button>
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
                            <button onClick={handleClick} id={idNum.toString()} className="bookMarkButton" type="button" disabled={folioListDisabled}><BsFillBookmarkFill/></button>
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