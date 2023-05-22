
import {useState, useEffect} from 'react'

type MovieType = {
    original_title: string
};

export let MovSearch  = () => {
    const [movs, setMovs] = useState<MovieType[]>([])

    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/search/movie?api_key=9d9960511c5df6b98b6e817d2577e2ab&query=la+la+land")
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

    console.log(movs)

    return(
        <div>
            <ul>
                {movs.map((mov) => {
                    return null //return <li key={mov.original_title}>{mov.original_title}</li>
                })}
            </ul>
        </div>
    )
}