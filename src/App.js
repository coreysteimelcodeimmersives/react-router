import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";
import { blogPosts } from "./utils/sampleBlogs";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path="all" element={<AllBlogs blogPosts={blogPosts} />} />
          <Route path=":blogId" element={<BlogPost blogPosts={blogPosts} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
