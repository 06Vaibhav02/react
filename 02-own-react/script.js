// react library is written in js
// this is is a very very basic react created by me to understand the working of react

function render(reactElement, root) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    root.appendChild(domElement)
    not a good code for multiple attributes/props
    */

    //loop based better code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop !== 'children') { //previously in react children was included in props so for safety
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    } //prop value changes
    root.appendChild(domElement)
}


reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click to open google"
} //this is how react sees an element after compilation from jsx and sends to render function 

const root = document.getElementById('root')

render(reactElement, root) //such method is also present in react library

/*
in react also we have a function(babel/bundler) that continuosly converts jsx -> treeStructure(obj in js) and this object is sent to render function that injects the html into root element (all behind the scene)
cause react does not understand html syntax so it need to be converted to tree (object)
*/ 