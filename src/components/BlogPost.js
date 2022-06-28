import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ blogPosts }) => {
  let params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
  return (
    <>
      <div>
        <p>Id: {blog.id}</p>
        <p>Title: {blog.title}</p>
        <p>Author: {blog.author}</p>
        <p>Text: {blog.text}</p>
        <p>Date Created: {blog.createdAt}</p>
      </div>
    </>
  );
};

export default BlogPost;
