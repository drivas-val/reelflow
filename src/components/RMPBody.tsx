import "./Styles.css"
import {Slide} from '../components/Slide'
import {genres, OptionType} from '../components/genres'
import {languages} from '../components/languages'
import Select from 'react-select'
import {SingleValue} from 'react-select'
import {useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
  
type ParamType = {
    genre?: string;
    language? : string;
};


export let RMPBody = () => {
    const [param, setParam] = useState<ParamType>({});
    let [input] = useState("");

    const navigate =  useNavigate()

    const handleChangeGenre = (selectedGenre:SingleValue<OptionType>) => {        
        console.log(selectedGenre?.value)
        setParam((p) => {
            return {...p, genre: selectedGenre?.value}
        })
        // paramList[0] = (selectedGenre?.value)
    }

    const handleChangeLanguage = (selectedLanguage:SingleValue<OptionType>) => {        
        console.log(selectedLanguage?.value)
        setParam((p) => {
            return {...p, language: selectedLanguage?.value}
        })
        // paramList[0] = (selectedGenre?.value)
    }

    const handleSubmit = (event:FormEvent) =>{
        var paramList:any[] = []
        paramList.push(param.genre)
        paramList.push(param.language)
        console.log(param.genre)
        event.preventDefault();
        navigate("/RMPSubmit", {state:paramList})
        window.location.reload()
    }


    return(
        <div className="bodyStyle">
            <form onSubmit={handleSubmit}>
                <h1>Genre</h1>
                <Select options={genres} closeMenuOnSelect={true} onChange={handleChangeGenre} defaultValue={genres[0]}></Select>
                <Select options={languages} closeMenuOnSelect={true} onChange={handleChangeLanguage} defaultValue={languages[0]}></Select>
                <button type="submit">GO!</button>
            </form>
        </div>
    )
}