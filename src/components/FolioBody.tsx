import {GlobalContext} from '../context/GlobalState'
import {useContext, MouseEvent, useState} from 'react'
import { arrayBuffer } from 'stream/consumers'
import "./Styles.css"
import Select from 'react-select'
import { ratingOptions, OptionType } from './ratingOption'
import {SingleValue} from 'react-select'

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
    orginality: string | undefined
    creativity: string | undefined 
    plot: string | undefined
    pacing: string | undefined
    structure: string | undefined
    characters: string | undefined
    cinematography: string | undefined
    entertainment: string | undefined
};

/*
Folio Body => Rate or remove movies from Folio List
*/
export let FolioBody = () => {
    const {addMovie, folioList, removeMovie} = useContext(GlobalContext)

    const [movs, setMovs] = useState<MovieType[]>([])

    const customStyles = {
        container: (provided:any) => ({
          ...provided,
          display: 'inline-block',
          width: '35px',
          minHeight: '1px',
          textAlign: 'left',
          border: 'none',
        }),
        //size of container
        control: (provided:any) => ({
          ...provided,
          border: '2px solid #757575',
          borderRadius: '0',
          minHeight: '1px',
          height: '25px',
        }),
        input: (provided:any) => ({
          ...provided,
          minHeight: '1px',
        }),
        dropdownIndicator: (provided:any) => ({
          ...provided,
          minHeight: '0px',
          paddingTop: '0',
          paddingBottom: '0',
          color: 'black',
        }),
        //Line in between
        indicatorSeparator: (provided:any) => ({
          ...provided,
          minHeight: '0px',
          height: '0px',
        }),
        clearIndicator: (provided:any) => ({
          ...provided,
          minHeight: '0px',
        }),
        valueContainer: (provided:any) => ({
          ...provided,
          minHeight: '1px',
          height: '20px',
          paddingTop: '0',
          paddingBottom: '0',
        }),
        singleValue: (provided:any) => ({
          ...provided,
          minHeight: '1px',
          paddingBottom: '2px',
        }),
      };

    const handleClickRemove = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        const movie = folioList.find((m) => m.id == movId);
        if (movie) {
            removeMovie(movie)
        }
    }

    const handleClickEdit = (event:MouseEvent<HTMLButtonElement>, movID:number) => {
        
    }

    const handleChange = (selectedRating:SingleValue<OptionType>) => {        
        console.log(selectedRating?.value)
    }

    //in originality if i add a function (handleChangeRating) to the defaultValue it will break
    const handleChangeRating = (selectedRating:SingleValue<OptionType>, movID:number) => {   
        //(mov.originality != null) ? ratingOptions[ratingOptions.indexOf(mov.originality)] : ratingOptions[0]
        let movieIndex = 0;

        for (let i = 0; i < folioList.length; i++){
            if (folioList[i].id === movID){
                console.log(i)
            }
            else{
                return(ratingOptions[0])
            }
        }
        for (let j = 0; j < ratingOptions.length; j++){
            if (ratingOptions[j].value === folioList[movieIndex].originality){
                return(ratingOptions[j])
            }
            else{
                return(ratingOptions[0])
            }
        }

    }

    //If the folio is empty
    if (folioList.length == 0){
        return(
            <div>
            <p className='placeholder'>Your Folio is Empty!</p>
            </div>

        )
    }

    else{
        return(
            <div>
            <h3 className='sliderTitle'>Your Ratings</h3>  
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
                            <p className='overlayRating'>Community Rating: {Number(mov.vote_average).toPrecision(2)}</p>
                            <p className='overlayRating'> Overall Personal Rating: {mov.overall_personal}</p>
                            <p className='overlayRating'> Originality: {mov.originality} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={handleChange} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Creativity: {mov.creativity} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Plot: {mov.plot} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Pacing: {mov.pacing} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Structure: {mov.structure} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Characters: {mov.characters} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Cinematography: {mov.cinematography} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                            <p className='overlayRating'> Entertainment: {mov.entertainment} <Select options={ratingOptions} closeMenuOnSelect={true} onChange={(e) => handleChangeRating(e, mov.id)} defaultValue={ratingOptions[0]} menuShouldScrollIntoView={false} styles={customStyles} className='selectStyle'></Select></p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}