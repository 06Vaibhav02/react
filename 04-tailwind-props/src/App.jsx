import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card username="Vaibhav" textBTN="Patil" />
      <Card username="Akash" textBTN="Kankariya" />
      <Card />
    </>
  );
}
// when there are multiple cards which have own values from db we need to use props - properties
// passing variable enclose it in {}

export default App;
