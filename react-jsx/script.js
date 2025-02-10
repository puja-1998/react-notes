

let root = document.querySelector("#root");


let data = (
    <div className="container">
        <h1>The Evolution of Airbnb's Frontend</h1>

        <div className="link">
        <a href="#">@spikebrehm</a>
        </div>

        <div className="imgdiv">
            <img height="40px" width="40px" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RF5RJFnLARHLg4qpuTEtZOciER1W2WhEoyQ38b7PRn0O4uQQF0s7bUNuGm7JL3FOOJA&usqp=CAU"></img>
            <p>airbnb</p>
        </div>
    </div>
);

ReactDOM.render(data, root);