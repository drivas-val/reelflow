import "./Styles.css"
import {Slide} from '../components/Slide'
import {genres, OptionType} from '../components/genres'
import {languages} from '../components/languages'
import Select from 'react-select'
import {SingleValue} from 'react-select'
import {useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { PassThrough } from "stream"
import Switch from "./Switch"
  
type ParamType = {
    genre?: string;
    language? : string;
    releaseYear?: string;
};



export let RMPBody = () => {
    const [param, setParam] = useState<ParamType>({});
    let [input, setInput] = useState("");
    const [isToggled, setIsToggled] = useState(false)

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
        param.releaseYear = input
        if (param.releaseYear === "Any" || param.releaseYear === ""){
            var paramList:any[] = []
            paramList.push(param.genre)
            paramList.push(param.language)
            paramList.push(param.releaseYear)
            paramList.push(isToggled)
            navigate("/RMPSubmit", {state:paramList})
            window.location.reload()
        }
        else if (!isNaN(parseInt(param.releaseYear)) == false || Number(param.releaseYear) > 2023 || Number(param.releaseYear) < 1922) {
            console.log(param.releaseYear)
            window.location.reload()
            alert("Release Year must be a number less than or equal to current year and greater than 1922")
            navigate("/RMPPage")
        }
        else{
            var paramList:any[] = []
            paramList.push(param.genre)
            paramList.push(param.language)
            paramList.push(param.releaseYear)
            paramList.push(isToggled)
            navigate("/RMPSubmit", {state:paramList})
            window.location.reload()
        }
    }


    return(
        <div className="bodyStyle">
                <h1 className="sliderTitle">Genre</h1>
                <Select options={genres} closeMenuOnSelect={true} onChange={handleChangeGenre} defaultValue={genres[0]}></Select>
                <h1 className="sliderTitle">Original Language</h1>
                <Select options={languages} closeMenuOnSelect={true} onChange={handleChangeLanguage} defaultValue={languages[0]}></Select>
                <h1 className="sliderTitle">Release Year</h1>
                <input type="text" 
                placeholder="Search Here..." 
                onChange={(event) => setInput(event.target.value)}
                className="RMPSearchStyle"
                defaultValue={"Any"}/>
                <h1 className="sliderTitle">Single Result?</h1>
                <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>

            <form onSubmit={handleSubmit}>
                <button type="submit">GO!</button>
            </form>
            
        </div>
    )
}