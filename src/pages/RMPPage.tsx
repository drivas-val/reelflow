
import {Header} from '../components/Header'
import {RMPBody} from '../components/RMPBody'

/*
Filter movies and shows by user requests
*/
export let RMPPage = () => {
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <RMPBody/>
            
        </div>
    )
}