import React from 'react';
import { Link } from 'react-router-dom';

const RelatedBlog = ({relatedBlog}) => {
  const {id, image, title, tags, createdAt} = relatedBlog;
    return (
        <div className="card">
        <Link to={`blogs/${id}`}>
          <img src={image} className="card-image" alt="" />
        </Link>
        <div className="p-4">
          <Link to={`blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
            {title}
          </Link>
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