import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Blog from './Blog';

const Blogs = () => {

  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([])

  // const handlePOst = event => {
  //   event.preventDefault()
  //   const postData = { content }
  //   fetch("http://localhost:5000/postBlog", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(postData)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

  /// get post all data 

  useEffect(() => {
    fetch("http://localhost:5000/postBlog")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div> */}
        {
            blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
        }



      </div>
    </div>
  );
};

export default Blogs;