import React from "react";
import '../../Style/components.css'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 className="comp">This is example of Class component</h1>;
  }
}

export default MyComponent;
