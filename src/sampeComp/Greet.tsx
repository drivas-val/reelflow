import {useState} from 'react'
import './Styles.css'

type GreetProps = {
    name:string
    age:number
    isLoggedIn:boolean

}

export let Greet = (props:GreetProps) => {
    let [nameStart, setName] = useState("Bravo")
    return (
    <div>
        {props.isLoggedIn ?
        <h1 className="start">Hello There {nameStart}</h1> :
        <h1>Guest</h1>}

        <button onClick={() => 
            {
            let x:number = 0;
            if (x === 0){
                setName("Charlie")
                x = 1;
            }
            else{
                setName("Bravo");
                x = 0;
            }
            }
            }>Change</button>
    </div>

    )
}
