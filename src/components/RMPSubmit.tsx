import {Header} from '../components/Header'
import { SearchBody } from '../components/SearchBody'
import { useLocation } from 'react-router-dom'
import {Slide} from '../components/Slide'
import { SingleMovie } from './SingleMovie'




export let RMPSubmit = () => {
    const {state} = useLocation()

    let genre:string|null, originalLanguage:string|null, releaseYear:string|null, total_pages;

    (state[0] === "101" || state[0] === undefined) ? (genre = "") : (genre = `&with_genres=${state[0]}`);
    (state[1] === "101" || state[1] === undefined) ? (originalLanguage = "") : (originalLanguage = `&with_original_language=${state[1]}`);
    (state[2] === "Any" || state[2] === undefined) ? (releaseYear = "") : (releaseYear=`&primary_release_year=${state[2]}`);
    
    if (state[3] == true){
        return (
        <div className="bodyStyle">
        <Header title="Reel Flow"/>
        <SingleMovie title="Results" source={`https://api.themoviedb.org/3/discover/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&include_adult=false&include_video=false&language=en-US&page=${total_pages}&sort_by=vote_count.desc${genre}${originalLanguage}${releaseYear}`}/>
        </div>
        )
    }
    else {
        return(
            <div className="bodyStyle">
                <Header title="Reel Flow"/>
                <Slide title="Results" source={`https://api.themoviedb.org/3/discover/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&include_adult=false&include_video=false&language=en-US&page=${total_pages}&sort_by=vote_count.desc${genre}${originalLanguage}${releaseYear}`}/> 
            </div>
        )
    }
}