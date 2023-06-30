import {Header} from '../components/Header'
import {useState, FormEvent, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState'
import { MovieType } from '../components/Slide';
import { CompareMovie } from '../components/CompareMovie';


export let ComparePage = () => {

    const {removeCompare, addCompare, compareList} = useContext(GlobalContext)
    let [input, setInput] = useState("");
    const [movs, setMovs] = useState<MovieType[]>([])

    let navigate = useNavigate()

    const makeAPICall = () => {

        let name = input 
        console.log(`Input: ${input}`)
        let encodedName = encodeURIComponent(name);
        let sourceString = `https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&language=en-US&query=${encodedName}&page=1&include_adult=false`

        fetch(sourceString)
        .then((response) => response.json())
        .then((data) => {
            if (!data.errors){
                setMovs(data.results)
            }
            else{
                setMovs([])
            }
        })
        .catch((err) => {
            alert("Error!")
        })
        // event.preventDefault();
        // navigate("/SubmitPage", {state:input})
        //Reload to avoid blank page. (Alerts on error
        //window.location.reload()
    }

    //Use effect cant be called on an "onclick" function
    useEffect(() =>{
        //The issue is this program runs when the page is opened so it adds a null element to compare.
        //in the added if statement it never runs because addCompare is never added
        if (compareList.length > 0){
            makeAPICall();
            console.log(`movs[0]: ${movs[0]}`)
            addCompare(movs[0])
        }
    }, [])

    const HandleSubmit = (event: FormEvent) => {
        event.preventDefault()
        makeAPICall();
    }

    console.log(`compareList = ${compareList}`)

    if (compareList.length == 0){
        return(
            <div className="bodyStyle">
                <Header title="Reel Flow"/>
                <div className='compareFlex'>
                    <form onSubmit={HandleSubmit}>
                        <input type="text" 
                        placeholder="Search Here..." 
                        onChange={(event) => setInput(event.target.value)}
                        className="compareSearch"/>
                        <button type="submit"
                        className="navBarStyle">GO!</button>
                    </form>
    
                    <h1 className='vs'>vs.</h1>
    
                    <form onSubmit={HandleSubmit}>
                        <input type="text" 
                        placeholder="Search Here..." 
                        onChange={(event) => setInput(event.target.value)}
                        className="compareSearch"/>
                        <button type="submit"
                        className="navBarStyle">GO!</button>
                    </form>
                </div>
            </div>
        )
    }
    else if (compareList.length == 1){
        return(
            <div className="bodyStyle">
                <Header title="Reel Flow"/>
                <div className='compareFlex'>
                    
                    <div className='overlayPos'>
                        <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[0].poster_path}`} alt="/"/>
                        <div className='imageOverlay'>
                            <p className='overlayName'>{compareList[0].title || compareList[0].name}</p>
                            <p className='overlayDate'>Release Date: {compareList[0].release_date || compareList[0].first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(compareList[0].vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {compareList[0].overview} </p>
                        </div> 
                    </div>  
    
                    <h1 className='vs'>vs.</h1>
    
                    <form onSubmit={HandleSubmit}>
                        <input type="text" 
                        placeholder="Search Here..." 
                        onChange={(event) => setInput(event.target.value)}
                        className="compareSearch"/>
                        <button type="submit"
                        className="navBarStyle">GO!</button>
                    </form>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="bodyStyle">
                <Header title="Reel Flow"/>
                <div className='compareFlex'>

                    <div className='overlayPos'>
                            <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[0].poster_path}`} alt="/"/>
                            <div className='imageOverlay'>
                                <p className='overlayName'>{compareList[0].title || compareList[0].name}</p>
                                <p className='overlayDate'>Release Date: {compareList[0].release_date || compareList[0].first_air_date}</p>
                                <p className='overlayRating'>Rating: {Number(compareList[0].vote_average).toPrecision(2)}</p>
                                <p className='overlayDescription'> Description: {compareList[0].overview} </p>
                            </div> 
                        </div>  
    
                    <h1 className='vs'>vs.</h1>
    
                    <div className='overlayPos'>
                        <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[1].poster_path}`} alt="/"/>
                        <div className='imageOverlay'>
                            <p className='overlayName'>{compareList[1].title || compareList[1].name}</p>
                            <p className='overlayDate'>Release Date: {compareList[1].release_date || compareList[1].first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(compareList[1].vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {compareList[1].overview} </p>
                        </div> 
                    </div>  
                </div>
            </div>
        )
    }
}