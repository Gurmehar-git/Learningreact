import React,{useState, useEffect, useRef, use} from "react";

function Learninguseref(){

    // const ref=useRef(0);

    // function handleclick(){
    //     ref.current=ref.current+1;
    //     console.log(ref.current)
    // }

    // return(
    //     <>
    //     <button onClick={handleclick}>Click me</button>
    //     </>
    // )
    const inputref=useRef(null);
    
    function handleclick(){
        inputref.current.focus();
        inputref.current.style.backgroundColor="Orange"
    }

    return(
        <>
        <button onClick={handleclick}>Click me</button>
        <input ref={inputref} type="text" placeholder="Enter your name"/>
        </>
    )
}
export default Learninguseref;