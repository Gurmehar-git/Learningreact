import { useState } from "react"

function Learningusestate(){
    const [name,setName]=useState();

    const updatename=()=>{
        setName("Gurmehar")
    }
    const [age,setAge]=useState(0)

    const updateAge=()=>{
        setAge(age+1)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updatename}>set name</button>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Set AGE</button>
        </div>
    )


}
export default Learningusestate