import { useState } from "react";
function Colorpicker(){
    const [color,setColor]=useState("#FFFFFF")
    const handlecolor=(event)=>{
        setColor(event.target.value)
    }
    return(
        <div className="color-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected color:{color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" className="color-picker" onChange={handlecolor} value={color}/>
        </div>
    )
}
export default Colorpicker