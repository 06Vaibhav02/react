import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const root = createRoot(document.getElementById("root"));
//createRoot is function extracted from react-dom
//create a root in virtual dom with element with id root from main dom as reference and store its vdom reference in root
//create root is method defined om react-dom of react library

//  anyways bundler convert jsx to tree why not we bypass that step and pass the tree for element directly
/*
reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click to open google",
};
*/
/* Notes - root.render(<reactElement />);
root.render(<ReactElement />);
wont work cause render expects a function or a particular syntax inside it
cause key in object can be anything and render cannot understand that
*/

const anotherElement = (
  <a href="https:/www.google.com" target="_blank">
    visit google
  </a>
);
/*Notes-  root.render(anotherElement); - will work
this element is converted in to tree/object syntax that react render understands, the one which we wrote in reactElement is our own syntax  
*/

let userName = "Vaibhav MP Patil";
const reactElement_1 = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me to visit google....",
  userName
); //order matters - type, attributes, content, variable(evaluated expression)
root.render(reactElement_1); //works
// createElement takes this items and converts it to tree syntax that render would undertand (its own keys not out keys)
// while converting JSX to TREE(OBJECT) babel injects this createElement method behind the scenes


// root.render(App());
// will work but do not do it cause convention matters as well

// root.render(<App />);
/* Notes
render <App/> inside root of virtual dom and then in actual dom
react says "you take a function that return a html in it and i will render that html"
*/

//JSX --> TREE(OBJECT) --> DOM RENDER(inject in root)
