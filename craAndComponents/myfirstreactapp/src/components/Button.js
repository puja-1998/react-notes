import React from 'react'

export default function Button({name}) {
    const btnstle = {
        height: "150px",
        width:"100px",
        color: "red"
    }
  return (
    <div>
        <button style={btnstle}>{name}</button>
    </div>
  )
}
