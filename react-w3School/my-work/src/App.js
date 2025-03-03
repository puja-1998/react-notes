import Card from "./components/Card";
import PropsComponent from "./PropsComponent";

function App() {
  // const data= { name: "Pooja", age: 25, city: "Delhi"};
  // return (
  //   <>
  //   <h2>Hi I am Pooja!</h2>
  //   <PropsComponent {...data}/>
  //   </
  // );
  return(
    <div style={{display:"flex",  gap:"20px", flexDirection:"column"}}>
    <Card props={{name:"iphone-13", price:150000}}/>
    <Card props={{name:"iphone-14", price:150000}}/>
    <Card props={{name:"iphone-15", price:150000}}/>
    </div>
  );
}

export default App;
