import React from 'react'

export default function ColorCard ({card}) {
  return (
    <div style={{height:"150px", width:"200px", boxShadow:"1px 1px 5px gray", display:"flex", gap:"5px", flexDirection:"column"}}>
    <div style={{height:"100px", width:"200px", backgroundColor: card.hex}}></div>
    <div style={{height:"80px", width:"200px"}}>
            <p>{card.hex}</p>
            <p>{card.name}</p>
        </div>
        </div>
  )
}
