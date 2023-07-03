import {Header} from '../components/Header'
import {useState, FormEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import "../components/Styles.css"


export let ComparePage = () => {

    let [input, setInput] = useState("");

    let navigate = useNavigate()

    const HandleSubmit = (event: FormEvent) => {
        event.preventDefault()
        navigate("/ComparePageOne", {state: input})
        window.location.reload()
    }

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





//     else if (compareList.length == 1){
//         return(
//             <div className="bodyStyle">
//                 <Header title="Reel Flow"/>
//                 <div className='compareFlex'>
                    
//                     <div className='overlayPos'>
//                         <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[0].poster_path}`} alt="/"/>
//                         <div className='imageOverlay'>
//                             <p className='overlayName'>{compareList[0].title || compareList[0].name}</p>
//                             <p className='overlayDate'>Release Date: {compareList[0].release_date || compareList[0].first_air_date}</p>
//                             <p className='overlayRating'>Rating: {Number(compareList[0].vote_average).toPrecision(2)}</p>
//                             <p className='overlayDescription'> Description: {compareList[0].overview} </p>
//                         </div> 
//                     </div>  
    
//                     <h1 className='vs'>vs.</h1>
    
//                     <form onSubmit={HandleSubmit}>
//                         <input type="text" 
//                         placeholder="Search Here..." 
//                         onChange={(event) => setInput(event.target.value)}
//                         className="compareSearch"/>
//                         <button type="submit"
//                         className="navBarStyle">GO!</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div className="bodyStyle">
//                 <Header title="Reel Flow"/>
//                 <div className='compareFlex'>

//                     <div className='overlayPos'>
//                             <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[0].poster_path}`} alt="/"/>
//                             <div className='imageOverlay'>
//                                 <p className='overlayName'>{compareList[0].title || compareList[0].name}</p>
//                                 <p className='overlayDate'>Release Date: {compareList[0].release_date || compareList[0].first_air_date}</p>
//                                 <p className='overlayRating'>Rating: {Number(compareList[0].vote_average).toPrecision(2)}</p>
//                                 <p className='overlayDescription'> Description: {compareList[0].overview} </p>
//                             </div> 
//                         </div>  
    
//                     <h1 className='vs'>vs.</h1>
    
//                     <div className='overlayPos'>
//                         <img className='posterStyleSingle' src={`https://image.tmdb.org/t/p/w1280${compareList[1].poster_path}`} alt="/"/>
//                         <div className='imageOverlay'>
//                             <p className='overlayName'>{compareList[1].title || compareList[1].name}</p>
//                             <p className='overlayDate'>Release Date: {compareList[1].release_date || compareList[1].first_air_date}</p>
//                             <p className='overlayRating'>Rating: {Number(compareList[1].vote_average).toPrecision(2)}</p>
//                             <p className='overlayDescription'> Description: {compareList[1].overview} </p>
//                         </div> 
//                     </div>  
//                 </div>
//             </div>
//         )
//     }