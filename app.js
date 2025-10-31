
// REACT is a library that can be imported
// core react
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am H1 Tag"),
            React.createElement("h2", {}, "I am H2 Tag"), // way to create siblings
        ]
    ),
     React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I am H1 Tag"),
            React.createElement("h2", {}, "I am H2 Tag"), 
        ]
    )] // this way we hve created two child of parent. but the code looks ugly & complex. To solve this, we've JSX
);

console.log(parent) // returns object which is a react element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render method turns this obj to tags/ elements