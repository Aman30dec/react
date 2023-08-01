import React from "react";
import ReactDOM from "react-dom/client";


// React Element using React.createElement

// Its not an HTML element
// It basically an object
// When we render this element on the DOM then it becomes HTML element.

const heading = React.createElement("h1", { id: "heading" }, "React Element");

// To render on DOM
// It will render root and inside its element by heading
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)


// Create React Element using JSX

// To overcome this complex structure React developer 
// creates "JSX"
// JSX is different and React is different
//JSX is a HTML like syntax not Html inside JS

const jsxHeading = <h1 id="heading" className="head">React using JSX</h1>


// React Element is a JSX
const jsxHeadingMultiLine = (
    <div>
        <h1 id="heading" className="head">React using JSX</h1>
        <h2>Hello react</h2>
    </div>
)

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(jsxHeadingMultiLine)


// React Component:
// 1. Class Based Component
// 2. Functional Component

// React functional Component
const HeadingComponent1 = () => {
    return <h1>Hello Aman Agrawal!</h1>;
}

const HeadingComponent2 = () => (
    <div id="container">
        <h1>Hello Aman Agrawal!</h1>
    </div>
);


const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(<HeadingComponent1 />)


// Rendereing React Component inside React functional Component
const HeadingComponent3 = () => (
    <div id="container">
        <h1>Hello Aman Agrawal!</h1>
        <HeadingComponent2 />
    </div>
);


// Normal Javascript function
const HeadingComponent5 = function() { 
  return (
    <div id="container">
        <h1>Hello Aman Agrawal!</h1>
        <HeadingComponent2 />
    </div>
    );
};


// We can write Javascript inside JSX using {}
const HeadingComponent6 = function() { 
    return (
      <div id="container">
          <h1>Hello Aman Agrawal!</h1>
          <h2>{100 + 100}</h2>
          <HeadingComponent2 />
      </div>
      );
  };


  // Rendering React Element inside React functional component.
  const HeadingComponent7 = function() { 
    return (
      <div id="container">
          <h1>Hello Aman Agrawal!</h1>
          <h2>{jsxHeadingMultiLine}</h2>
          <HeadingComponent2 />
      </div>
      );
  };

  const root3 = ReactDOM.createRoot(document.getElementById("root"));

  root3.render(<HeadingComponent7 />);

  