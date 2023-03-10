import React from 'react';
import BlogDetails from '../BlogDetailsContainer/BlogDetails';
import RelatedBlogs from './RelatedBlogs';

const BlogDetailsPage = ({blog}) => {
    const {id, tags} = blog;
    return (
        <section className="post-page-container">
            <BlogDetails blog={blog} ></BlogDetails>
            <RelatedBlogs id={id} tags={tags} ></RelatedBlogs>
        </section>
    );
};

export default BlogDetailsPage;