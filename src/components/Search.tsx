//HEAD NODE

import {useState, FormEvent} from 'react'
import "./Styles.css"
import { useNavigate } from "react-router-dom";


/*
Search for any valid movie/show.
Search Input for Header.
On Submit navigates to new page.
*/
export let Search = () => {
    let [input, setInput] = useState("");

    const navigate =  useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        navigate("/SubmitPage", {state:input})
        //Reload to avoid blank page. (Alerts on error)
        window.location.reload()

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Search Here..." 
            onChange={(event) => setInput(event.target.value)}
            className="searchStyle"/>
            <button type="submit"
            className="navBarStyle">GO!</button>
        </form>
    )
}