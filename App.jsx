
import './App.css'
import Proplearning from './Components/Proplearning'
import Usergreeting from './Components/Usergreeting'
import Lists from './Components/renderinglists'
import Button from './Components/Button'
import Learningusestate from './Components/Learningusestate'
import Learningonchange from './Components/learningonchange'
import Colorpicker from './Components/Colourpicker'
import Updaterfunctioncount from './Components/Updaterfunctioncount'
function App() {
      const arr=[{id: 1,name: "banana",calories: 105},
               {id: 2,name: "grapes",calories: 70},
               {id: 3,name: "mango",calories: 60}
              ]
  return(
    <>
    {/* learning props */}
    <Proplearning name= "Gurmehar" age={19} id={171}/>
    <Proplearning name= "Divjot" age={24} id={999}/>

    {/* usergreeting(conditional rendering) */}
    <Usergreeting isLoggedin={true} name="Gurmehar" />

    {/* rendering lists */}
    {/* {arr.length>0?<Lists items={arr} category="fruits"/>:null} */}
    {/* or */}
    {/* shortcircuiting */}
    {arr.length>0 && <Lists items={arr} category="fruits"/>}

    {/* clickevents */}
    <Button/>


    {/* usestate */}
    <Learningusestate/>


    {/* onchange event handler - event handler used primarily with form elements */}
    {/* triggers eeverytime the value of the input changes */}
    <Learningonchange/>


    {/* building a colorpicker */}
    <Colorpicker/>


    {/* Updater function-A function passed as an argument to setState() usually
    ex. setYear(arrow functuon)
    Allow for safe updates based on the previous state
    Used with multiple state updates and asynchronus functions
    Good practice to use Updater functions */}
    <Updaterfunctioncount/>
    </>
  ) 
}
//to return the error in console stating wrong type of data entered.
// Proplearning.propTypes ={
//   name: PropTypes.string
// }

//to fill up an empty created student component with the values we pass here.
// Proplearning.defaultProps={
//   name: "Guest",
//   age: 67

// }
export default App
