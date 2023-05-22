import "./Styles.css"
import {Slide} from './Slide'
import {genres} from '../components/genres'
import Select from 'react-select'

export let RMPBody = () => {
    return(
        <div className="bodyStyle">
            <Select options={genres} isMulti closeMenuOnSelect={false}></Select>
            
        </div>
    )
}