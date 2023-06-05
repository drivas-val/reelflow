import React from "react";

type ToggleProps = {
    isToggled: boolean | undefined,
    onToggle: any
}


const Switch = (props: ToggleProps) => {
    return (
        <label className="SwitchStyle">
            <input type="checkbox" checked={props.isToggled} onChange={props.onToggle}/>
            <span className="ToggleStyle"/>
        </label>
    )
}

export default Switch 