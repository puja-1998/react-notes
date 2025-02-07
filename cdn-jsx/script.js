// Creating a simple ReactJS Component:
const MyFirstExample = ()=>{
    return <div>My First CDN Example</div>
}
// rendering function
ReactDOM.render(<MyFirstExample/>,document.querySelector('#root'));

// Creating div and p tags in ReactJS:
const element = (
     
    <div>
        {/* This is a comment */}
        <p>Hello Pooja, How are you?</p>
    </div>
);

// Rendering a JSX Element (react.render):
ReactDOM.render(element, document.querySelector("#root"));

// Creating React Elements (react.createElement):
const createEle = React.createElement('h1', null, "Hello React!");
ReactDOM.render(createEle, document.querySelector("#root"));

// Style and className in JSX:
const styleElement = <p style={{color:'red', fontSize:'16px'}} className="highLight">Style JSX Text</p>
ReactDOM.render(styleElement, document.querySelector("#root"));

// Injecting data into a JSX Element:
// Injecting a string into a JSX Element:

const name = 'Pooja';
const msg = <p>Hello {name}!</p>
ReactDOM.render(msg,document.querySelector("#root"));

// Injecting a Number into a JSX Element:
const age = 26;
const msg2= <p>Hello Pravin,  is your age {age}?</p>
ReactDOM.render(msg2,document.querySelector("#root"));

//Injecting an array into a JSX Element:
const items = ['item1','item2','item3'];
const arrList = <ul>
    {
        items.map((val , index)=>(
            <li key={index}>
                {val}
            </li>
        ))
    }
    
</ul> 
ReactDOM.render(arrList,document.querySelector("#root"));

//Injecting an object into a JSX Element:
const user = {name: 'Pooja', age: 26}
const obj = (
    <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </div>
);
ReactDOM.render(obj,document.querySelector("#root"));
