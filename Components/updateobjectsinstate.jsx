import { useState } from "react";
function Updateobjectsinstate(){
    const [car,setCar]=useState({year:2016,
                        make: "Lamborghini",
                        model: "Aventador"})
    const updateyear=(event)=>{
        setCar({...car,year: event.target.value})
    }
    const updatemake=(event)=>{
        setCar({...car,make: event.target.value})
    }
    const updatemodel=(event)=>{
        setCar({...car,model: event.target.value})
    }
    return(
        <>
        <h2>My favourite car is: {car.year} {car.make} {car.model}</h2>
        <input type="number" value={car.year} onChange={updateyear}/>
        <input type="text" value={car.make} onChange={updatemake}/>
        <input type="text" value={car.model} onChange={updatemodel}/>
        </>
    )
}
export default Updateobjectsinstate
