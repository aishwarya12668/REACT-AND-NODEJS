import { useState } from "react";

export default function Form(){

    const [name,setName] = useState("");
    const [lname,setLastName] = useState("");
    const [password,setPassword] = useState("");

    return(
        <div>

            <form>

                First Name :
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <br /><br />

                Last Name :
                <input
                    type="text"
                    value={lname}
                    onChange={(e)=>setLastName(e.target.value)}
                />

                <br /><br />

                Password :
                <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

            </form>

            {name}
            <br />
            {lname}
            <br />
            {password}

            <h2>First Name : {name}</h2>
            <h2>Last Name : {lname}</h2>
            <h2>Password : {password}</h2>

        </div>
    )
}