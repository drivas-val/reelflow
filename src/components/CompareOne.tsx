import "./Styles.css"
import {useContext, FormEvent, useState, useEffect, MouseEvent} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Header} from '../components/Header'
import { MovieType } from '../components/Slide';
import {Slide} from '../components/Slide'
import {CompareSlide} from '../components/CompareSlide'
import { useNavigate } from 'react-router-dom';



type SearchProps = {
    input: string
}

export let CompareOne = (props:SearchProps) => {
    let [input, setInput] = useState("");
    const { addCompare, compareList, removeCompare} = useContext(GlobalContext)

    let navigate = useNavigate()

    //create a default sourceString if its not real

    let name = props.input;
    let encodedName = encodeURIComponent(name);
    let sourceString = `https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&query=${encodedName}&page=1&include_adult=false`
    let tvSourceString = `https://api.themoviedb.org/3/search/tv?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&page=1&query=${encodedName}&include_adult=false`
    console.log(sourceString)




    const HandleSubmit = (event: FormEvent) => {
        event.preventDefault()
        navigate("/ComparePageTwo", {state: input})
        window.location.reload()
    }

    const handleClickRemove = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        // const movie = compareList.find((m) => m.id == movId);
        // if (movie) {
        // removeCompare(compareList[0])  
        // navigate("/Compare")
        // window.location.reload()
        // } 

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
     
                    <form onSubmit={HandleSubmit}> 
                        <input type="text" 
                        placeholder="Search Here..."  
                        onChange={(event) => setInput(event.target.value)}
                        className="compareSearch"/>
                        <button type="submit"
                        className="compareGo">GO!</button>
                    </form>
                </div>
                <div className="restartFlex">
                    <button onClick={(e) => handleClickRemove(e, compareList[0].id)} className="restartButton" type="button">Restart</button>
                </div>
            </div>
        )

}