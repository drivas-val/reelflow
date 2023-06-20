import "./Styles.css"
import {Slide} from './Slide'
import { Header } from "./Header"

/*
Home Page containing popular titles
*/
export let Body = () => {
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <Slide title="Shows Trending Today" source="https://api.themoviedb.org/3/trending/tv/day?api_key=9d9960511c5df6b98b6e817d2577e2ab"/>
            <Slide title="Movies Trending Today" source="https://api.themoviedb.org/3/trending/movie/day?api_key=9d9960511c5df6b98b6e817d2577e2ab"/>
            <Slide title="Top Rated" source="https://api.themoviedb.org/3/movie/top_rated?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&page=1"/>
            <Slide title="Hits from Last Year" source="https://api.themoviedb.org/3/discover/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2022-01-01&primary_release_date.lte=2023-01-01&vote_count.gte=400&with_watch_monetization_types=flatrate"/>
        </div>
    )
}