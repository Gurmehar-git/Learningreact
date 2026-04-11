import { useState } from "react"
function Updaterfunctioncount()
{
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(prevcount=>prevcount+1)
    }
    const decrement=()=>{
        setCount(prevcount=>prevcount-1)
    }
    const reset=()=>{
        setCount(prevcount=>0)
    }
    return(
        <>
        <h1>Counter feature</h1>
        <h1>{count}</h1>
        <button className="inc" value="increment" onClick={increment}>Increment</button>
        <button className="reset" value="reset" onClick={reset}>Reset</button>
        <button className="dec" value="decrement" onClick={decrement}>Decrement</button>
        </>
    )
}
export default Updaterfunctioncount