
type ContainerProps = {
    styles: React.CSSProperties
}

export let Container = (props: ContainerProps) => {
    return(
        <div style={props.styles}>
            Some Text
        </div>
    )
}