import "./Styles.css"
import {Slide} from './Slide'
import {useState, useEffect} from 'react'

type MovieType = {
    title: string
    poster_path: string
    name: string
    release_date: string
    first_air_date: string
    vote_average:string
    overview: string
};

type SearchProps = {
    input: string
}

export let SearchBody = (props:SearchProps) => {
    // const [movs, setMovs] = useState<MovieType[]>([])
    
    // useEffect(() =>{
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&query=La%20La%20Land&page=1&include_adult=false`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if (!data.errors){
    //             setMovs(data.results)
    //         }
    //         else{
    //             setMovs([])
    //         }
    //     })
    //     .catch((err) => {
    //         alert("Error!")
    //     })
    // }, [])

    // console.log(movs)

    let name = props.input;
    let encodedName = encodeURIComponent(name);
    let sourceString = `https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&query=${encodedName}&page=1&include_adult=false`
    let tvSourceString = `https://api.themoviedb.org/3/search/tv?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&page=1&query=${encodedName}&include_adult=false`
    console.log(sourceString)

    return(
        <div className="bodyStyle">
            <Slide title="Movie Results" source={sourceString}/>
            <Slide title="TV Show Results" source={tvSourceString}/>
        </div>
    )
}