import React,{useState,createContext} from "react";
import Comp2 from "./Comp2";

export const NameContext = createContext();

function Comp1(){
    const [name,setName]=useState("Gurmehar")
    return (
        <div className="box">
            <h1>Component 1</h1>
            <h2>{`Hello ${name}`}</h2>
                <NameContext.Provider value={name}>
                    <Comp2/>
                </NameContext.Provider>

        </div>
    )
}
export default Comp1;