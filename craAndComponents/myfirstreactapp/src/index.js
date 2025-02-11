import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

// const element = 
// <table>
//   <tr>
//     <th>Name</th>
//   </tr>
//   <tr>
//     <td>Pooja</td>
//   </tr>
//   <tr>
//     <td>Rokade</td>
//   </tr>
// </table>
// root.render(
//   element
// );

// create class component

// class Car extends React.Component{
//   render(){
//       return <h2>Hi, I am a Car!</h2>;
//   }
// }
// root.render(<Car/>)


// create function component car
// function Car(){
//   return <h1>Hi I am a function component Car!</h1>
// }
// root.render(<Car/>)

// props
// function Car(props){
//   return<h1>Hi am  a {props.color} Car </h1>
// }
// root.render(<Car color="red"/>)

//components inside a components
// function Car(){
//   return <h1>Hi I am a Car!</h1>
// }

// function Garage(){
//   return (
//    <>
//     <h1>Who is live in my GArage</h1>
//     <Car/>
//     </>
//   );
// }
//  root.render(<Garage/>);

function obj(){
  return <h1>Hi I am Pooja</h1>
}
root.render(<obj/>)

