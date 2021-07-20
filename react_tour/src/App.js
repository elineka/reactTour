import MyComponent from "./components/Component/co";
import Component2 from "./components/co2/Component2";
import Jsx from "./Jsx/jsx";
import Example from "./exampleState/exampleState";
import ExampleWithManyStates from "./exampleState/multipleState";

function App() {
  return (
    <div className="App">
      <Jsx />
      <MyComponent />
      <Component2 />
      <Example />
      <ExampleWithManyStates />
    </div>
  );
}

export default App;
