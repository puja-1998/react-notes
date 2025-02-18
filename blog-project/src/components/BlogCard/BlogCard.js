import "./BlogCard.css";

export default function BlogCard(props){
    let {id, blogImg, title, content, likes} = props.blog;

    return(
        <div className="blog-container">
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={blogImg} alt="blog-image" />
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
      <button className="like-btn" onClick={() => props.updateCount(id)}>
        Likes:{likes}
      </button>
    </div>
    );
}