import React from 'react';
import BlogDetails from '../BlogDetailsContainer/BlogDetails';
import RelatedBlogs from './RelatedBlogs';

const BlogDetailsPage = () => {
    return (
        <section className="post-page-container">
            <BlogDetails></BlogDetails>
            <RelatedBlogs></RelatedBlogs>
        </section>
    );
};

export default BlogDetailsPage;