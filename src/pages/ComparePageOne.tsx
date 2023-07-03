import "../components/Styles.css"
import {Header} from '../components/Header'
import { useLocation } from 'react-router-dom'
import { CompareOne } from "../components/CompareOne"



export let ComparePageOne = () => {
    const {state} = useLocation()
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <CompareOne input={state}/>  
        </div>
    )
}