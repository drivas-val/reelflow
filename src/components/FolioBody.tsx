import {GlobalContext} from '../context/GlobalState'
import {useContext} from 'react'
import { arrayBuffer } from 'stream/consumers'
import "./Styles.css"

export let FolioBody = () => {
    const {addMovie, folioList} = useContext(GlobalContext)
    console.log(folioList)

    folioList.filter((value, index) => folioList.indexOf(value) === index)

    return(
        <div>
        <h3 className='sliderTitle'>Your Ratings</h3>  
        <div className='sliderStyle'>
            {folioList.map((mov) => (
                <div key={mov.title} className='overlayPos'>
                <img className='posterStyle' src={`https://image.tmdb.org/t/p/w1280${mov.poster_path}`} alt="/"/>
                    <div className='imageOverlay'>
                        <p className='overlayName'>{mov.title || mov.name}</p>
                        <p className='overlayRating'>Community Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                        <p className='overlayRating'> Overall Personal Rating: </p>
                        <p className='overlayRating'> Originality: </p>
                        <p className='overlayRating'> Creativity: </p>
                        <p className='overlayRating'> Plot: </p>
                        <p className='overlayRating'> Pacing: </p>
                        <p className='overlayRating'> Structure: </p>
                        <p className='overlayRating'> Characters: </p>
                        <p className='overlayRating'> Cinematography: </p>
                        <p className='overlayRating'> Entertainment: </p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}