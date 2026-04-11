function Lists(props)
{
    //using map

    // const arr=['mango','banana','grapes']
    // const usedmap=arr.map(fruit=><li>{fruit}</li>)
    // return (<ol>{usedmap}</ol>)

    //object banake uski list display karni sort karke lexicographically and har list element ko unique key dena unique id banake
    //yahape list banake ki jagha list ko app mein define karenge and yahape as props call karenge
    const arr1=props.items



    //for albhabet sorting
    arr1.sort((a,b)=> a.name.localeCompare(b.name));//reverese ke liye a and b ko swap

    //for numerically sorting
    arr1.sort((a,b)=>a.calories - b.calories);

    //for filtering
    const arr2=arr1.filter((fruit)=> fruit.calories<100);
    const listitems=arr2.map(fruit=><li key={fruit.id}>
                                       {fruit.name}: &nbsp;
                                       <b>{fruit.calories}</b></li>);
    return (<><h2>{props.category}</h2><ol>{listitems}</ol></>);

}
export default Lists