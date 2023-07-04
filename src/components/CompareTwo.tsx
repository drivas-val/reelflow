import "./Styles.css"
import {useContext, FormEvent, useState, useEffect, MouseEvent} from 'react'
import {CompareSlide} from '../components/CompareSlide'
import { useNavigate } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState'


type SearchProps = {
    input: string
}

export let CompareTwo = (props:SearchProps) => {
    let [input, setInput] = useState("");

    const { addCompare, compareList, removeCompare} = useContext(GlobalContext)

    let navigate = useNavigate()


    let name = props.input;
    let encodedName = encodeURIComponent(name);
    let sourceString = `https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&query=${encodedName}&page=1&include_adult=false`
    let tvSourceString = `https://api.themoviedb.org/3/search/tv?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&page=1&query=${encodedName}&include_adult=false`
    console.log(sourceString)


    const handleClickRemove = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        for (let i = 0; i < compareList.length; i++) {
            removeCompare(compareList[i]) 
            navigate("/Compare")
            window.location.reload()
        }
    }


    return(
            <div className="bodyStyle">
                <div className='compareFlex'>

                    <CompareSlide source={sourceString}></CompareSlide>
    
                    <h1 className='vs'>vs.</h1>
     
                    <div key={compareList[0].title} className='overlayPos'>
                    <img className='comparePoster' src={`https://image.tmdb.org/t/p/w1280${compareList[0].poster_path}`} alt="/"/>
                    <div className='imageOverlay'>
                            <p className='overlayName'>{compareList[0].title || compareList[0].name}</p>
                            <p className='overlayDate'>Release Date: {compareList[0].release_date || compareList[0].first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(compareList[0].vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {compareList[0].overview} </p>
                    </div>
                    </div>
                </div>
                <div className="restartFlex">
                    <button onClick={(e) => handleClickRemove(e, compareList[0].id)} className="restartButton" type="button">Restart</button>
                </div>
            </div>
        )


}