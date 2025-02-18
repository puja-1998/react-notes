import "./HeadingComponent.css";

export default function HeadingComponent(props){
    return(
        <div className="header">
            <h1 className="heading">GeekBlog</h1>
            <p>{props.blogCount}</p>
            <div className="profile-container">PR</div>
        </div>
    );
}