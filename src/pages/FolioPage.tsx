import {Header} from '../components/Header'
import { FolioBody } from '../components/FolioBody'


/*
Add movies and shows to rate
*/
export let FolioPage = () => {
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <FolioBody/>
        </div>
    )
}