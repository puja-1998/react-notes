
import './App.css';
import React, { use, useState } from "react";

// function Counter(){
//   const [count, setCount] = use(0);

//   // increment 
//   const increment = ()=>{
//     setCount(count+1);
//   };
// // decrement
//   const decrement = ()=>{
//     setCount(count-1);
//   };

//   return (
//     <div className='container'>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  // increment 
  const increment = ()=>{
    setCount(count+1);
  };
  // decrement
  const decrement = ()=>{
    if(count > 0){
      setCount(count-1);
    }
    
  };

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className='btns'>
      <button onClick={increment}className='incbtn'>Increment</button>
      <button onClick={decrement} className='decbtn'>Decrement</button>
      </div>
    </div>
  );
}
export default App;

