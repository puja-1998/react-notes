import React, { useState } from "react";
import './App.css';

export default function CounterFunction(){

    let [num, setState] = useState(0);

    // increment Function
    const increment = ()=>{
        setState(num + 1);
    }

    // decrement Function
    const decrement = ()=>{
        if(num > 0){
            setState(num - 1);
        }
       
    }
    return(
        <div className="container">
            <h1>Counter</h1>
            <h1>{num}</h1>
            <div className='btns'>
                <button onClick={increment}className='incbtn'>Increment</button>
                <button onClick={decrement} className='decbtn'>Decrement</button>
            </div>
        </div>
    );
}



