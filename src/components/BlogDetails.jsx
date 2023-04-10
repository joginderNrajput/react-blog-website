import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className="border-[1px] border-gray-500 hover:shadow-2xl hover:shadow-gray-500 transition-all  bg-white p-4 rounded-lg m-8">
      <NavLink
        to={`/blog/${post.id}`}
        className="text-lg font-bold text-blue-500 hover:underline"
      >
        {post.title}
      </NavLink>
      <p className="text-gray-500 text-sm">
        By <span className="font-bold">{post.author}</span> on{' '}
        <span className="font-bold italic">{post.date}</span>
      </p>

      <NavLink
        to={`/categories/${post.category.replaceAll(' ', '-')}`}
        className="text-blue-500 hover:underline"
      >
        <span className="text-gray-500">Category:</span>{' '}
        <span className="font-medium">{post.category}</span>
      </NavLink>
      <p className="mt-2 font-serif">{post.content}</p>
      <div className="mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(' ', '-')}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-gray-800  hover:text-white"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
