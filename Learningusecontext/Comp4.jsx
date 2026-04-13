import React, { useContext } from "react";
import { NameContext } from "./Comp1";
function Comp4(){
    const name = useContext(NameContext);
    return (
        <div className="box">
            <h1>Component 4</h1>
            <h2>{`Bye ${name}`}</h2>
        </div>
    )
}
export default Comp4;