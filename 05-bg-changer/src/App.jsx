import { useState } from "react";

// the default color in first div is black
// no need to add {} around color cause we already have it around backgroundColor
function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-600"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-3 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "olive" }}
          >
            OLIVE
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "gray" }}
          >
            GRAY
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black"
            style={{ backgroundColor: "yellow" }}
          >
            YELLOW
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black"
            style={{ backgroundColor: "pink" }}
          >
            PINK
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black"
            style={{ backgroundColor: "purple" }}
          >
            PURPLE
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black"
            style={{ backgroundColor: "lavender" }}
          >
            LAVANDER
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black"
            style={{ backgroundColor: "white" }}
          >
            WHITE
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-white"
            style={{ backgroundColor: "black" }}
          >
            BLACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

//flex wrap is for responsive design
//onclick expects fn - we could have direclty used setColor in there --> onClick = {setColor} --> but inorder to change state we need to pass argument of color --> onClick = {setColor('red')} --> but onclick only takes reference, so we use call back function
//rather can creating function for each click we directly passed a call back inside onclick
//inorder to get pure color we used separte style: {{backgroundColor: "colorName" }}
