import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitBlog = ({ allBlogs, setAllBlogs }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <p></p>
      <label>Blog Title</label>
      <input
        id="title"
        size="40"
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      />
      <p></p>
      <label>Blog Text</label>
      <input
        id="text"
        size="100"
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      />
      <p></p>
      <label>Blog Author</label>
      <input
        id="author"
        size="40"
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      />
      <p></p>
      <button
        id="submit"
        onClick={
          ("click",
          () => {
            // const allBlogsCopy = JSON.parse(JSON.stringify(allBlogs));
            const allBlogsCopy = [...allBlogs];
            allBlogsCopy.push({
              title: title,
              text: text,
              author: author,
              createdAt: new Date().toISOString(),
              id: allBlogs.length + 1,
            });
            console.log("post ", allBlogsCopy);
            setAllBlogs(allBlogsCopy);
            setTitle("");
            setText("");
            setAuthor("");
            navigate("/blogs");
          })
        }
      >
        Submit
      </button>
    </>
  );
};

export default SubmitBlog;
