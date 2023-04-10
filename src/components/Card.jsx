import React from "react";

const Card = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-6">
      {posts.length === 0 ? (
        <p className="text-gray-500 text-lg text-center py-4">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white shadow shadow-black rounded-md p-6">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-500 text-sm italic">
              By <span className=" font-semibold"><span >{post.author}</span></span> on{" "}
              <span className="font-medium text-pink-900">{post.category}</span>
            </p>
            <p className="text-gray-500 text-sm">
              Posted on <span className="text-gray-950 font-semibold">{post.date}</span>
            </p>
            <p className="mt-4 font-serif">{post.content}</p>
            <div className="mt-4">
              {post.tags &&
                post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 shadow-md shadow-blue-900 text-blue-600 text-sm py-1 px-2 rounded-md mr-2"
                    >
                      #{tag}
                    </span>
                  );
                })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
