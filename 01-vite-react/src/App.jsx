import Tech from "./Tech.jsx";

function App() {
  let name = "Vaibhav MP Patil";
  return (
    <div>
      <Tech />
      <h1>Vaibhav Patil - vite react {name}</h1>
    </div>
  );
}
// {} - evaluated expression - final output of js code not entire js code - why we cannot write entire js code in {} because after jsx -> tree(object), object cannot have js code in its properties can only have value - refer  reactElement_1 in main.jsx
export default App;

//fragment first used <div></div> - jsx function can only return one element so wrap in div or <></>
