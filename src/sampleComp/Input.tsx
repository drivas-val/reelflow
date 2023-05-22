import React from "react"
import { isPropertySignature } from "typescript"

type InputProps = {
    value:string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export let Input = (props:InputProps) => {
    return(
        <input type="text" value={props.value} onChange={props.handleChange}/>
    )
}