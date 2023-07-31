import {GlobalContext} from '../context/GlobalState'
import {useContext, MouseEvent, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { arrayBuffer } from 'stream/consumers'
import "./Styles.css"
import Select from 'react-select'
import { ratingOptions, OptionType } from './ratingOption'
import {SingleValue} from 'react-select'
import { Footer } from './Footer';

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
};

type ParamType = {
    idType?: number 
}

/*
Folio Body => Rate or remove movies from Folio List
*/
export let FolioBody = () => {
    const {addMovie, folioList, removeMovie} = useContext(GlobalContext)

    const [param, setParam] = useState<ParamType>({});

    const [movs, setMovs] = useState<MovieType[]>([])

    const navigate =  useNavigate()

    
    const handleClickRemove = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        const movie = folioList.find((m) => m.id == movId);
        if (movie) {
            removeMovie(movie)
        }
    }

    const handleClickEdit = (event:MouseEvent<HTMLButtonElement>, movID:number) => {
        var idList:any[] = []
        idList.push(movID)
        console.log(idList[0])
        navigate("/FolioEdit", {state:idList})
        window.location.reload()
    }

    
    type RatingType = {
        title: string
        key: keyof MovieType
    }

    const ratings: RatingType[] = [
        { title: 'Originality', key: 'originality' },
        { title: 'Creativity', key: 'creativity'},
        { title: 'Plot', key: 'plot'},
        { title: 'Pacing', key: 'pacing'},
        { title: 'Structure', key: 'structure'},
        { title: 'Characters', key: 'characters'},
        { title: 'Cinematography', key: 'cinematography'},
        { title: 'Entertainmnet', key: 'entertainment'}
    ];

    if (folioList.length == 0){
        return(
            <div>
            <p className='placeholder'>Your Folio is Empty!</p>
            </div>

        )
    } else {
        return(
            <div>
            <h3 className='sliderTitle'>Your Folio</h3>  
            <div className='sliderStyle'>
                {folioList.map((mov) => (
                    <div key={mov.title} className='overlayPos'>
                    <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${mov.poster_path}`} alt="/"/>
                        <div className='imageOverlay'>
                            <div className='generalFlex'>
                            <button onClick={(e) => handleClickRemove(e, mov.id)} className="removeButton" type="button">X</button>
                            <button onClick={(e) => handleClickEdit(e, mov.id)} className="editButton" type="button"> Edit</button>
                            </div>
                            <p className='overlayName'>{mov.title || mov.name}</p>
                            <p className='overlayRating'> Community Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                            <p className='overlayRating'> Overall Personal Rating: {
                            ((Number(mov.originality!=undefined  ? mov.originality : 0) 
                            + Number(mov.creativity!=undefined  ? mov.creativity : 0) 
                            + Number(mov.originality!=undefined  ? mov.originality : 0) 
                            + Number(mov.plot!=undefined  ? mov.plot : 0)
                            + Number(mov.pacing!=undefined  ? mov.pacing : 0)
                            + Number(mov.structure!=undefined  ? mov.structure : 0)
                            + Number(mov.characters!=undefined  ? mov.characters : 0)
                            + Number(mov.cinematography!=undefined  ? mov.cinematography : 0)
                            + Number(mov.entertainment!=undefined  ? mov.entertainment : 0)) / 9).toPrecision(2)}</p>
                            {ratings.map((rating, i) => (
                                <p key={`${rating.key}-${i}`} className='overlayRating'>{rating.title}: {mov[rating.key]}</p>
                            ))}
                            </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}