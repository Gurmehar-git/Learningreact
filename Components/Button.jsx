function Button(){
    // function handleclick(){
    //     console.log("YO")
    // }
    // let c=1
    function stopclicking(name)
    {
        if(c<3)
        {
        console.log(`${name}clicked me ${c} times`)
        c=c+1;
        }
        else{
            console.log(`${name}Stop clicking me`)
        }
    }

    //  also making and using events
    function handleclick(e){
        e.target.textContent="OYE DABA KYA RAHA HAI"
    }
    //a click event is an interaction when a user clicks on a specific element.. we can respond to callbacks by passing a callback to the onClick event handler



    //useState()-A react hook that allows the creation of a stateful variable and a setter function to update it's value in the virtual DOM.
    //[name,setName]
return(
    <button onClick={(e)=>handleclick(e)}>Click me </button>
)
}
export default Button  
