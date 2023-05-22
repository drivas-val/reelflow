import "./Styles.css"
import {Search} from './Search'

type HeaderProps = {
    title: string
}

export let Header = (props:HeaderProps) => {
    return(
        <div className="headerStyle">
            <a className="titleStyle" href="/">{props.title}</a>
            <a className="navBarStyle" href='/folio'> Folio </a>
            <a className="navBarStyle" href='/RMP'> RMP </a>
            <a className="navBarStyle" href='/compare'> Compare </a>
            <Search/>
        </div>
    )
}
