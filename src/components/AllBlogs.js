import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const AllBlogs = ({ blogPosts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const sortField = searchParams.get("sortField") || "createdAt";
  const blogPostsCopy = blogPosts;
  const compare = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }

      return 0;
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      return 0;
    }
  };
  const sortedBlogPosts = blogPostsCopy.sort(compare);
  return (
    <>
      <h1>All Blogs</h1>
      <ul>
        {sortedBlogPosts.map((blog, index) => {
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

// const sortBlogs = (sortOrder, sortField, posts) => {
//   if (sortOrder.toLowerCase() === "asc") {
//     return posts.sort((a, b) => {
//       if (sortField === "createdAt") {
//         return new Date(a[sortField]) - new Date(b[sortField]);
//       }
//       if (sortField === "id") {
//         return Number(a[sortField]) - Number(b[sortField]);
//       }
//       return b[sortField] < a[sortField]
//         ? -1
//         : b[sortField] > a[sortField]
//         ? 1
//         : 0;
//     });
//   }
//   if (sortOrder.toLowerCase() === "desc") {
//     return posts.sort((a, b) => {
//       if (sortField === "createdAt") {
//         return new Date(b[sortField]) - new Date(a[sortField]);
//       }
//       return a[sortField] < b[sortField]
//         ? -1
//         : a[sortField] > b[sortField]
//         ? 1
//         : 0;
//     });
//   }
//   return posts;
// };

export default AllBlogs;
