 import React from 'react'

export default function Info(props) {
  return (
    // Pass String as a Props
    <div>
        <h2>Hello Mr. {props.name}</h2>

         {/* Pass Number as a Props */}
        <h2>My Age is {props.age}</h2>

        {/* Pass boolean as a Props */}
        if (props.isMale) {
           <h3>Yes I am Male</h3> 
        }
        
    </div>
    
  )
}


