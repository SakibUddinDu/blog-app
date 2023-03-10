import React from 'react';

const RelatedBlog = ({relatedBlog}) => {
  const {image, title, tags, createdAt} = relatedBlog;
    return (
        <div className="card">
        <a href="post.html">
          <img src={image} className="card-image" alt="" />
        </a>
        <div className="p-4">
          <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
            {title}
          </a>
          <div className="mb-0 tags">
            {
              tags.map((tag, index) =><span key={index}>#{tag},</span>)
            }
          </div>
          <p>2010-03-27</p>
        </div>
      </div>
    );
};

export default RelatedBlog;