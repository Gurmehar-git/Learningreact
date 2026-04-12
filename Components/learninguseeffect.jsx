import { useState,useEffect } from "react"
function Learninguseeffect() {

    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green")    
    useEffect(()=>{
        document.title=`Count:${count} ${color}`
    },[count][color])
    //here if we want it to only happen when the component is mounted, we add a [] after the curly brakcet.and another means when mounted and when the value changes
    function addd(){
        setCount(c=>c+1)
    }
    function changec(){
        setColor(c=>c==="green"? "red":"green");
    }
    return (
        <div>
            <p style={{color:color}}>Count: {count}</p>
        <button onClick={addd} style={{height:"50px" , width:"50px"}}>add</button>
        <button onClick={changec}>change color</button>
        </div>
    )
}

export default Learninguseeffect