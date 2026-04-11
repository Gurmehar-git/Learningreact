import React from 'react'

function Usergreeting(props){
    if(props.isLoggedin)
    {
        return <h2 className='welcome-text'>Welcome {props.name}</h2>
    }
    else{
        return <h2 className='login-text'>Please login to continue</h2>
    }
}
export default Usergreeting
