import React, { useState } from 'react'

export default function CounterApp() {
    const [count, setcount] = useState(0);

    function increment(){
        setcount(count+1);
    }

    function decrement(){
        if(count >0){
            setcount(count-1);
        } 
    }
  return (
    <div className='counter-app'>
        <h2>Couter App</h2>
        <p>Count: {count}</p>
        <div style={{display:"flex" , gap:"10px" }}>
        <button onClick={()=>{increment()}} style={{ color:"white", cursor:"pointer",height:"50px", width:"100px", backgroundColor:"green"}}>+</button>
        <button onClick={()=>{decrement()}} style={{ color:"white", cursor:"pointer", height:"50px", width:"100px", backgroundColor:"red"}}>-</button>
        </div>
    </div>
  )
}
