import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/HeadingComponent/HeadingComponent';
import BlogCard from './components/BlogCard/BlogCard';
import React, {useState} from 'react';

function App() {
  const [blogList, setBlogList] = useState([
    {
      id: 1,
      blogImg: "https://picsum.photos/id/1/100/100",
      title: "Blog 1",
      content: "dummy content",
      likes: 0,
    },
    {
      id: 2,
      blogImg: "https://picsum.photos/id/1/100/100",
      title: "Blog 2",
      content: "dummy content",
      likes: 0,
    },
    {
      id: 3,
      blogImg: "https://picsum.photos/id/1/100/100",
      title: "Blog 3",
      content: "dummy content",
      likes: 0,
    },
  ]);

  const updateCount = (id) => {
    let index = blogList.findIndex((blog) => blog.id == id); //0
    let newBlogList = [...blogList];
    newBlogList[index].likes = 1;
    setBlogList(newBlogList);
  };
  return (
    <div>
      <HeadingComponent blogCount={blogList.length} />
      <div>
        {blogList.map((blog) => (
          <BlogCard key={blog.id} blog={blog} updateCount={updateCount} />
        ))}
      </div>
    </div>
  );
}

export default App;
