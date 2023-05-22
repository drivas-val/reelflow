import {useState, FormEvent } from 'react'


export let Form = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        alert(`Form Data is ${username}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username </label>
                <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <button type="submit">Submit!</button>
        </form>
    )
}