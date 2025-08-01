import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Syncing of state change in JS and UI

//button click - setCount set new value to count - react "reacts" to this change and re renders (only the change)

function App() {
  let [counter, setCounter] = useState(5); // [variable, function()]
  // setCounter is responsible for updating value of counter
  //the moment setCounter sets new value to counter - react "reacts" and updates new counter value to UI

  // let counter = 5;

  function increase() {
    // console.log("Value added ", Math.random()) // to check click working
    // setCounter(counter + 1); //in here value does not change immediately like it does in below (check in browser and console)

    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter); //giving new counter value to setCounter
    } else {
      counter = 20; //cause eventhough UI will halt 20 its value of counter will increase above 20
    }
    console.log("Clicked ", counter); //updates in js but not in UI

    /* Notes
    so we use hooks - react - reacts to change in this hooks(here useState()) and then re render to update the UI
    react says - I give you a methodology of hooks(here usestate()) to update the variable and based on that update I will update it to UI not you, you just focus on js code
    cause after initial render dom is not re render until an update happens in hook, "not in js"
    */
  }

  function decrease() {
    // setCounter(counter - 1);

    counter = counter - 1;
    if (counter >= 20) {
      setCounter(counter); //giving new counter value to setCounter
    } else {
      counter = 0; //cause eventhough UI will halt at 0 its value of counter will decrease below 0    
      }

    console.log("Clicked ", counter); //updates in js but not in UI
  }
  return (
    <>
      <h1>Vaibhav Patil</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increase}>Increase Value {counter}</button>
      <button onClick={decrease}>Decrease Value {counter}</button>

      <p>Counter Value {counter}</p>
    </>
  );
}
//if we do increase() inside onClick it will execute without click so we just pass the reference
export default App;
