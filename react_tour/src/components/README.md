Components 
are the building blocks of a React app. They separate your application code into discrete pieces that should be easy to understand and easy to reason about.

Components are the core of React. Everything in React is a component. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

There are two ways to create a React component. 

(1) The first way is to use a JAVASCRIPT FUNCTION.

Example;
function Component2() {
    return (
      <div >
<h1>This is Function component</h1>
      </div>
    );
  }
export default Component2

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a CAPITAL letter. Above is an example of a stateless functional component that return div element that contain head 1 element

(2)The other way to define a React component is with the ES6 CLASS syntax.

Example;

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <h1>This is class component</h1>
          );
    }
  };

The above creates an ES6 class MyComponent which extends the React.Component class.
Also notice the MyComponent class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly.