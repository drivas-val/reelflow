
import "../components/Styles.css"
import {Header} from '../components/Header'
import { useLocation } from 'react-router-dom'
import { CompareOne } from "../components/CompareOne"
import { CompareTwo } from "../components/CompareTwo"

export let ComparePageTwo = () => {
    const {state} = useLocation()
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <CompareTwo input={state}/>
        </div>
    )
}