import React from 'react'

export default function Card({props}) {
    console.log(props);
  return (
    <div style={{height:"100px", backgroundColor:"gray", boxShadow:"1px 1px 5px 0.5px black", padding:"10px"}}>
        <h3>name:-{props.name}</h3>
        <h3>Price:-{props.price}</h3>
    </div>
  )
}
