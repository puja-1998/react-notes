import React, { useState } from 'react'

export default function ChangeMeBtn() {
    let [state, setState] = useState("Change Me Using A Button");

  return (
    
    <div>
        <h2>{state}</h2>
        <button onClick={()=>{ setState ( "Changed..!")}}>Change The Text</button>
    </div>
  )
}
