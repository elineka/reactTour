import React, { useState } from "react";
import "../Style/exampleState.css";

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState("Learn Hooks");

  function handleOrangeClick() {
    // Similar to this.setState({ fruit: 'orange' })
    setFruit("orange");
  }
  return (
    <div className="exState">
      <h2>
        Assume array of objects is passes as a state, how to update a single key
        in a single object of an array without affecting other keys of a
        particular object and without affecting other objects in the array
      </h2>
      <p>Age is {age} </p>
      <p>My Todos is {todos} </p>
      <p>This fruit is called {fruit}</p>
      <button onClick={handleOrangeClick}>Change fruit</button>
    </div>
  );
}
export default ExampleWithManyStates;
