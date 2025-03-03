import React from 'react'

export default function PropsComponent({name,age,city}) {
  return (
    <div>
        <p>Hello {name}</p>
        <p>my age is {age}</p>
        <p>I am from {city}</p>
    </div>
  )
}
