import {Header} from '../components/Header'
import { SearchBody } from '../components/SearchBody'
import { useLocation } from 'react-router-dom'
import {Slide} from '../components/Slide'
import { SingleMovie } from './SingleMovie'




export let RMPSubmit = () => {
    const {state} = useLocation()

    let genre:string, originalLanguage:string;

    // if (state[0] = ""){
    //     genre = ""
    // }
    // else{
    //     genre = `with_genres=${state[0]}`
    // }

    // if (state[1] = ""){
    //     originalLanguage = ""
    // }
    // else{
    //     originalLanguage = `with_original_language=${state[1]}`
    // }


    genre = `with_genres=${state[0]}`
    originalLanguage = `with_original_language=${state[1]}`

    // state[0] = "" ? (genre = "") : (genre = `with_genres=${state[0]}`)
    // state[1] = "" ? (originalLanguage = "") : (originalLanguage = `with_original_language=${state[1]}`)
    
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <Slide title="Results" source={`https://api.themoviedb.org/3/discover/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&${genre}&${originalLanguage}`}/>

            
        </div>
    )
}