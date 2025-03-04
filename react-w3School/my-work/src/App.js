import './App.css';
import Card from "./components/Card";
import PropsComponent from "./PropsComponent";
import Info from "./components/Info";
import ColorCard from "./components/ColorCard";
import { useState } from "react";
import ChangeMeBtn from './components/ChangeMeBtn';
function App() {
   const data= { name: "Pooja", age: 25, city: "Delhi"};

  const [ColorList] = useState([
    {
      "id":"1",
      "hex": "#FF6663",
      "name": "Pink"
    },
    {
      "id":"2",
      "hex": "#333333",
      "name": "Gray"
    },
    {
      "id":"3",
      "hex": "#000000",
      "name": "Black"
    },
    {
      "id":"4",
      "hex": "#38BB14",
      "name": "Green"
    },
    {
      "id":"5",
      "hex": "#C90B0B",
      "name": "Red"
    },
    {
      "id":"6",
      "hex": "#FF8000",
      "name": "Orange"
    },
    {
      "id":"7",
      "hex": "#FFF500",
      "name": "Yellow"
    },
    {
      "id":"8",
      "hex": "#CCCCCC",
      "name": "Light Gray"
    },
    {
      "id":"9",
      "hex": "#7E41A2",
      "name": "Purple"
    },
    {
      "id":"10",
      "hex": "#C14911",
      "name": "Brown"
    }
  ]);
  

  return(
    <>
    <h1>Color Card</h1><hr />
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
      {ColorList.map((card)=>{
      return <ColorCard key={card.id} card={card}/>
    }) 
    }
    </div>
    <hr /><hr />

    <h1>Info Card</h1><hr />
    <div>
    <Info name="Pravin" age={27} isMale={true}/>
    </div><hr /><hr />

    <h1>Card Component</h1><hr />
    <div>
    <div style={{display:"flex",  gap:"20px", flexDirection:"column"}}>
    <Card props={{name:"iphone-13", price:150000}}/>
     <Card props={{name:"iphone-14", price:150000}}/>
    <Card props={{name:"iphone-15", price:150000}}/>
    </div>
    </div><hr /><hr />

    <h1>Props Component</h1><hr />
    <div>
    <h2>Hi I am Pooja!</h2>
    <PropsComponent {...data}/>
    </div><hr /><hr />

    <h1>Change Me Button Component</h1><hr />
    <ChangeMeBtn/><hr /><hr />
    </>
    
  );
}

export default App;
