import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  function increase() {
    /* Method 1
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
      this will not give 19 but 16 only - because in react updates are propogates in batches so if we do continuos same update it will only do it once
      for it to update to 19 we need to use callback inside setCounter

      Assuming counter is 15, all four lines evaluate counter + 1 as 16, so React batches them and effectively just updates to 16 once, not incrementing four times.
      This is because:
        counter doesn't change immediately — React updates state asynchronously.
        Multiple setCounter(counter + 1) calls are batched, and since each uses the same stale value of counter, the result is only one effective increment.
  */

    setCounter((prevCounter) => prevCounter + 1); //15 -- 16
    setCounter((prevCounter) => prevCounter + 1); //16 -- 17
    setCounter((prevCounter) => prevCounter + 1); //17 -- 18
    setCounter((prevCounter) => prevCounter + 1); //18 -- 19

    // here each one uses state or previous
    //Now React knows each call depends on the previous value, so it processes them sequentially, resulting in a final value of 19 (if starting from 15).
  }

  return (
    <>
      <h1>Vaibhav Patil</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increase}>Increase Value {counter}</button>

      <p>Counter Value {counter}</p>
    </>
  );
}
export default App;
