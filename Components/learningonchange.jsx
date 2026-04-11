import { useState } from "react"

function Learningonchange(){
    const [name,setName]=useState()
    const [payment,setpayment]=useState()
    const [shipping,setshipping]=useState("Delivery")

    const handlenamechange=(event)=>{
        setName(event.target.value)
    }

    const handlepayment=(event)=>{
        setpayment(event.target.value)
    }
    const handleshipping=(event)=>{
        setshipping(event.target.value)
    };
    return (
        <>
        <input value={name} onChange={handlenamechange}/>
        <p>Name:{name}</p>

        <select value={payment} onChange={handlepayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment:{payment}</p>


        {/* radio button */}
        <label>
        <input value="Pick up" onChange={handleshipping} type="radio"
               checked={shipping==="Pick up"}/>
        Pick up
        </label>
        <label>
        <input value="Delivery" onChange={handleshipping} type="radio"
               checked={shipping==="Delivery"}/>
        Delivery
        </label>
        <p>Status: {shipping}</p>
        </>
    )

}
export default Learningonchange