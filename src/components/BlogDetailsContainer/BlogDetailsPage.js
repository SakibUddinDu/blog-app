import React from 'react';
import BlogDetails from '../BlogDetailsContainer/BlogDetails';
import RelatedBlogs from './RelatedBlogs';

const BlogDetailsPage = ({blog}) => {
    return (
        <section className="post-page-container">
            <BlogDetails blog={blog} ></BlogDetails>
            <RelatedBlogs></RelatedBlogs>
        </section>
    );
};

export default BlogDetailsPage;