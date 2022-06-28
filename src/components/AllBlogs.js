import React from "react";

const AllBlogs = ({ blogPosts }) => {
  return (
    <>
      <h1>All Blogs</h1>
      <ul>
        {blogPosts.map((blog, index) => {
          return (
            <li key={index}>
              <p>Id: {blog.id}</p>
              <p>Title: {blog.title}</p>
              <p>Author: {blog.author}</p>
              <p>Text: {blog.text}</p>
              <p>Date Created: {blog.createdAt}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllBlogs;
