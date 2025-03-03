import PropsComponent from "./PropsComponent";

function App() {
  const data= { name: "Pooja", age: 25, city: "Delhi"};
  return (
    <>
    <h2>Hi I am Pooja!</h2>
    <PropsComponent {...data}/>
    </>
  );
}

export default App;
