import "./Styles.css"
import {Search} from './Search'
import {Link} from 'react-router-dom'

type HeaderProps = {
    title: string
}

/*
Header used in all pages. 
New Paths can be added through App.tsx for new header buttons
*/
export let Header = (props:HeaderProps) => {
    return(
        <div className="headerStyle">
            <Link className="titleStyle" to="/">{props.title}</Link>
            <Link className="navBarStyle" to="/Folio">Folio</Link>
            <Link className="navBarStyle" to='/RMP'> RMP </Link>
            <Link className="navBarStyle" to='/Compare'> Compare </Link>
            <Search/>
        </div>
    )
}
