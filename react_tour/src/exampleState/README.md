React components has a built-in state object. The state object is where you store property values that belongs to the component.
State consists of any data your application needs to know about, that can change over time. When the state object changes, the component re-renders.

You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

```JS
this.state = {

}
```

You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.

The state object is initialized in the constructor:
Class example

```JS
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: "Ford"
        };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

Refer to the state object anywhere in the component by using the ( this.state.propertyname ) syntax

```JS
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: "Ford",
        color: "red"
        };
  }
  render() {
    return (
      <div>
        <h1>My Car {this.state.brand}</h1>
        <p> It is a {this.state.color} in color</p>
      </div>
    );
  }
}
```

To CHANGE a value in the state object, use the this.setState() method
When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Add a button that will change color;

```JS
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      color: "red"
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My Car {this.state.brand}</h1>
        <p> It is a {this.state.color} in color</p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

How to declare a new state in react using useState hook? Assuming we use functional components in this whole journey.
How to update state?
State accepts any type of data from strings, booleans, arrays, objects, numbers etc, how to update a single key in an object while leaving other keys unaffected? How to update array data( adding or removing an item in an array)?
Assume array of objects is passes as a state, how to update a single key in a single object of an array without affecting other keys of a particular object and without affecting other objects in the array?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

//Function example

```JS
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

function components in React look like this:

```JS
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

or this

```JS
function Example(props) {
  // You can use Hooks here!
  return <div />;
}
```

You might have previously known these as “stateless components”. We’re now introducing the ability to use React state from these, so we prefer the name “function components”.
Hooks don’t work inside classes. But you can use them instead of writing classes.

The following example starts by importing the useState Hook from React:

```JS
import React, { useState } from 'react';

function Example() {
  // ...
}
```

What is a Hook?
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. There ae other Hooks in React.

When to use a Hooks
If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class. But, now you can do it by using a Hook inside the existing function component

Hooks are similar to JavaScript functions, but you need to follow these two rules when using them
(a)Do not call Hooks inside loops, conditions, or nested functions. Hooks should always be used at the top level of the React functions. This rule ensures that Hooks are called in the same order each time a components renders.
(b)You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components. Hooks can also be called from custom Hooks.

Declaring a State Variable
In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component

```JS
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```

We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.

Reading State:
In a function, we can use count directly:

```JS
 <p>You clicked {count} times</p>
```

Updating State:
In a function, we already have setCount and count as variables so we don’t need this:

```JS
 <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

Using Multiple State Variables

Declaring state variables as a pair of [something, setSomething] is also handy because it lets us give different names to different state variables if we want to use more than one:

```JS
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
In the above component, we have age, fruit, and todos as local variables, and we can update them individually:

  function handleOrangeClick() {
    // Similar to this.setState({ fruit: 'orange' })
    setFruit('orange');
  }
```

You don’t have to use many state variables. State variables can hold objects and arrays just fine, so you can still group related data together. However, unlike this.setState in a class, updating a state variable always replaces it instead of merging it.
