import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import {GlobalContext} from '../context/GlobalState'
import { useContext, useState, FormEvent, useMemo, useEffect } from 'react'
import Select from 'react-select'
import { ratingOptions, OptionType} from './ratingOption'
import {SingleValue} from 'react-select'
import { useNavigate } from "react-router-dom";
import "./Styles.css"
import { idText } from 'typescript'

type ParamType = {
    orginality?: string
    creativity?: string 
    plot?: string 
    pacing?: string 
    structure?: string 
    characters?: string 
    cinematography?: string 
    entertainment?: string 
};


export let FolioEdit = () => {

    const {folioList, updateMovie} = useContext(GlobalContext)
    const {state} = useLocation()
    const [param, setParam] = useState<ParamType>({});
    const navigate = useNavigate()

    const movie = useMemo(() => folioList.find((m) => m.id === state[0]), [folioList, state]);

    useEffect(() => {
        movie!.cinematography = "9"
    }, [])

    const handleOriginality = (selectedOriginality: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, orginality: selectedOriginality?.value}
        })
    }

    const handleCreativity = (selectedCreativity: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, creativity: selectedCreativity?.value}
        })
    }

    const handlePlot = (selectedPlot: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, plot: selectedPlot?.value}
        })
    }

    const handlePacing = (selectedPacing: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, pacing: selectedPacing?.value}
        })
    }

    const handleStructure = (selectedStructure: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, structure: selectedStructure?.value}
        })
    }

    const handleCharacters = (selectedCharacters: SingleValue<OptionType>) => {
        setParam((p) => {
            return {...p, characters: selectedCharacters?.value}
        })
    }

    const handleCinematography = (selectedCinematography: SingleValue<OptionType>) => {
        console.log(param.cinematography)
        setParam((p) => {
            return {...p, cinematography: selectedCinematography?.value}
        })
    }

    const handleEntertainment = (selectedEntertainment: SingleValue<OptionType>) => {
        console.log(param.cinematography)
        setParam((p) => {
            
            return {...p, entertainment: selectedEntertainment?.value}
        })
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()

        // param.orginality == "" ? param.orginality = "0" : phi = ""
        // param.creativity == "" ? param.creativity = "0" : phi = ""
        // param.plot == "" ? param.plot = "0" : phi = ""
        // param.pacing == "" ? param.pacing = "0" : phi = ""
        // param.structure == "" ? param.structure = "0" : phi = ""
        // param.characters == "" ? param.characters = "0" : phi = ""
        // param.cinematography == "" ? param.cinematography = "0" : phi = ""
        // param.entertainment == "" ? param.entertainment = "0" : phi = ""

        updateMovie(movie!.id, 'originality', param.orginality)
        updateMovie(movie!.id, 'creativity', param.creativity)
        updateMovie(movie!.id, 'plot', param.plot)
        updateMovie(movie!.id, 'pacing', param.pacing)
        updateMovie(movie!.id, 'structure', param.structure)
        updateMovie(movie!.id, 'characters', param.characters)
        updateMovie(movie!.id, 'cinematography', param.cinematography)
        updateMovie(movie!.id, 'entertainment', param.entertainment)
        // movie!.originality = param.orginality
        // movie!.creativity = param.creativity
        // movie!.plot = param.plot
        // movie!.pacing = param.pacing
        // movie!.structure = param.structure
        // movie!.characters = param.characters
        // movie!.cinematography = param.cinematography
        // movie!.entertainment = param.entertainment
        //error if eliminated
        navigate("/Folio")
    }

    function customTheme(theme:any) {
        return {
            ...theme, 
            colors: {
                ...theme.colors,
                primary25: "indianred", 
                primary: "indianred"
            }
        }
    }

    return(
        <div className='folioEditStyle'>
            <Header title="Reel Flow"/>
            <p className="sliderTitle">Originality</p>
            <div style={{margin: 20, width:200}}>
                
            </div> 
            <Select options={ratingOptions} closeMenuOnSelect={true}  onChange={handleOriginality} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}></Select>
            <p className="sliderTitle">Creativity</p>
            <Select options={ratingOptions} closeMenuOnSelect={true}  onChange={handleCreativity} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}/>
            <p className="sliderTitle">Plot</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handlePlot} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}/>
            <p className="sliderTitle">Pacing</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handlePacing} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}/>
            <p className="sliderTitle">Structure</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handleStructure} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}/>
            <p className="sliderTitle">Characters</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handleCharacters} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}/>
            <p className="sliderTitle">Cinematography</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handleCinematography} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}></Select>
            <p className="sliderTitle">Entertainment</p>
            <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handleEntertainment} defaultValue={ratingOptions[0]} theme={customTheme} styles={{placeholder: (baseStyles, state) => ({...baseStyles, color:"red"}), dropdownIndicator: ()=> ({color: "red"}), control: (baseStyles, state) => ({...baseStyles, borderColor: "red", backgroundColor: "white"})}}  ></Select>

            <form onSubmit={handleSubmit}>
                <button className='bottomSubmit' type="submit">Submit!</button>
            </form>
        </div>
    )
}