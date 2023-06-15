import {GlobalContext} from '../context/GlobalState'
import {useContext, MouseEvent, useState} from 'react'
import { arrayBuffer } from 'stream/consumers'
import "./Styles.css"

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


export let FolioBody = () => {
    const {addMovie, folioList, removeMovie} = useContext(GlobalContext)

    const [movs, setMovs] = useState<MovieType[]>([])

    const handleClick = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()

        //This doesn't work!
        const movie = folioList.find((m) => m.id == movId);
        if (movie) {
            removeMovie(movie)
        }
    }

    return(
        <div>
        <h3 className='sliderTitle'>Your Ratings</h3>  
        <div className='sliderStyle'>
            {folioList.map((mov) => (
                <div key={mov.title} className='overlayPos'>
                <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${mov.poster_path}`} alt="/"/>
                    <div className='imageOverlay'>
                        <button onClick={(e) => handleClick(e, mov.id)} className="editButton" type="button"> Edit</button>
                        <p className='overlayName'>{mov.title || mov.name}</p>
                        <p className='overlayRating'>Community Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                        <p className='overlayRating'> Overall Personal Rating: {mov.overall_personal} <input></input> </p>
                        <p className='overlayRating'> Originality: {mov.orginality}</p>
                        <p className='overlayRating'> Creativity: {mov.creativity}</p>
                        <p className='overlayRating'> Plot: {mov.plot}</p>
                        <p className='overlayRating'> Pacing: {mov.pacing}</p>
                        <p className='overlayRating'> Structure: {mov.structure}</p>
                        <p className='overlayRating'> Characters: {mov.characters}</p>
                        <p className='overlayRating'> Cinematography: {mov.cinematography}</p>
                        <p className='overlayRating'> Entertainment: {mov.entertainment}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}