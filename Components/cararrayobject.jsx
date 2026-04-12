import { useState } from "react";
function Cararrayobject(){
    const [cars,setCars]=useState([])
    const [caryear,setCaryear]=useState(new Date().getFullYear())
    const [carmodel,setCarmodel]=useState("")
    const [carmake,setCarmake]=useState("")
    const handleaddcar=()=>{
        const newcar={year:caryear,make:carmake,model:carmodel}
        setCars(prevcars=>[...prevcars,newcar])
        setCaryear(new Date().getFullYear())
        setCarmake("")
        setCarmodel("")
    }
    const handleremovecar=(index)=>{
        setCars(prevcars=>prevcars.filter((_,i)=>i!==index))

    }
    const handleyearchange=(event)=>{
        setCaryear(event.target.value)
    }
    const handlemakechange=(event)=>{
        setCarmake(event.target.value)
    }
    const handlemodelchange=(event)=>{
        setCarmodel(event.target.value)
    }
    
    return(
        <>
        <h1>Car List</h1>
        <ul>
            {cars.map((car,index)=><li key={index} onClick={()=>handleremovecar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={caryear} onChange={handleyearchange} placeholder="Enter car Year"/>
        <input type="text" value={carmake} onChange={handlemakechange} placeholder="Enter car Make"/>
        <input type="text" value={carmodel} onChange={handlemodelchange} placeholder="Enter car Model"/>
        <button onClick={handleaddcar}>Add Car</button>

        </>
    )
}       
export default Cararrayobject
