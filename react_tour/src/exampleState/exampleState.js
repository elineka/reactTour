  //We import the useState Hook from React. It lets us keep local state in a function component
  import React, { useState } from 'react';
 import '../Style/exampleState.css'
   function Example() {
       /*Inside the Example component, we declare a new state variable 
       by calling the useState Hook. It returns a pair of values, 
       to which we give names. We’re calling our variable count 
       because it holds the number of button clicks. 
       We initialize it to zero by passing 0 as the only useState 
       argument. The second returned item is itself a function. 
       It lets us update the count so we’ll name it setCount.*/
     const [count, setCount] = useState(0);//here in square bracket we have used array destructuring
 
     return (
       <div className="exState">
         <h2>Examples on how to use "useState hook" in function component</h2>
         <p>You clicked {count} times</p>
         { /* When the user clicks, we call setCount with a new value. 
         React will then re-render the Example component, 
         passing the new count value to it.*/}
        <button onClick={() => setCount(count + 1)}>
         Click me
       </button>
      </div>
   );
  }
  export default Example;