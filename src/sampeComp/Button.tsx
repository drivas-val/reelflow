
type ButtonProps = {
    handleClick: () => void
}

export let Button = (props:ButtonProps) => {
    return(
        <div>
            <button onClick={props.handleClick}> Click Me! </button>
        </div>
    )
}