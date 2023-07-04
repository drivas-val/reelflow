import "./Styles.css"
import {useState, useEffect, FormEvent, useContext, MouseEvent, useRef, memo} from 'react' 
import {BsFillBookmarkFill} from 'react-icons/bs'
import {GlobalContext} from '../context/GlobalState'
import { useNavigate } from 'react-router-dom';



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
    originality: string | undefined
    creativity: string | undefined 
    plot: string | undefined
    pacing: string | undefined
    structure: string | undefined
    characters: string | undefined
    cinematography: string | undefined
    entertainment: string | undefined
};

type SlideProps = {
    source: string;
}

export let CompareSlide = (props:SlideProps) => {

    const [movs, setMovs] = useState<MovieType[]>([])

    const { addCompare, compareList, removeCompare} = useContext(GlobalContext)

    let navigate = useNavigate()


    useEffect(() =>{
        fetch(props.source)
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
    }, [])

    if (movs.length === 0) {
        return null;
    }

    if (compareList.length == 0){
        addCompare(movs[0])
    }


    const handleClickRemove = (event:MouseEvent<HTMLButtonElement>, movId: number) => {
        event.preventDefault()
        const movie = compareList.find((m) => m.id == movId);
        if (movie) {
        removeCompare(compareList[0])  
        navigate("/Compare")
        window.location.reload()
        } 
    }
    
    
    return(
        <div>
            <div key={movs[0].title} className='overlayPos'>
                    <img className='comparePoster' src={`https://image.tmdb.org/t/p/w1280${movs[0].poster_path}`} alt="/"/>
                    <div className='imageOverlay'>
                            <p className='overlayName'>{movs[0].title || movs[0].name}</p>
                            <p className='overlayDate'>Release Date: {movs[0].release_date || movs[0].first_air_date}</p>
                            <p className='overlayRating'>Rating: {Number(movs[0].vote_average).toPrecision(2)}</p>
                            <p className='overlayDescription'> Description: {movs[0].overview} </p>

                        </div>
                    </div>
        </div>
    )

}