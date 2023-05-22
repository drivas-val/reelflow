import {Header} from '../components/Header'
import { SearchBody } from '../components/SearchBody'
import { useLocation } from 'react-router-dom'


export let SubmitPage = () => {
    const {state} = useLocation()
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <SearchBody input={state}/>

            
        </div>
    )
}