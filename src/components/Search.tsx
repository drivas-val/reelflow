//HEAD NODE

import {useState, FormEvent} from 'react'
import "./Styles.css"
import { useNavigate } from "react-router-dom";


export let Search = () => {
    let [input, setInput] = useState("");

    const navigate =  useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        navigate("/SubmitPage", {state:input})
        window.location.reload()
        // {input}

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