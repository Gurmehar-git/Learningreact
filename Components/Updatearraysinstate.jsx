import { useState } from "react";
function Updatearrayinstate(){
    const [arr, setArr] = useState([
        { id: 1, name: "mango" },
        { id: 2, name: "banana" },
        { id: 3, name: "watermelon" }
    ]);

    const handleadd=()=>{
        let newfruit=document.getElementById("foodinput").value;
        document.getElementById("foodinput").value=""


// id: Date.now() — Generates a unique ID using the current timestamp in milliseconds. 
// Each time you add a fruit, Date.now() returns a different number,
//  ensuring each item has a unique identifier.

// name: newfruit — Stores the fruit name that the user typed in the input field.
        setArr(prevarr => [...prevarr, { id: Date.now(), name: newfruit }])
    }
    function handleremove(id){
        setArr(prevarr=>prevarr.filter(f=> f.id!==id))
    }



    return(
        <>
        <h2>List of Fruits</h2>
        <ul>
            {arr.map((f)=><li key={f.id} onClick={()=>handleremove(f.id)}>{f.name}</li>)}
        </ul>

        <input type="text" id="foodinput" placeholder="Enter fruit name"/>
        <button id="btn" onClick={handleadd}>Add fruit to list</button>
        </>
    )
}
export default Updatearrayinstate