import React from 'react';
import Sidebar from './../components/BlogContainer/Sidebar';
import Blogs from './../components/BlogContainer/Blogs';


const BlogsPage = () => {
    return (
        <section className="wrapper">
            <Sidebar></Sidebar>
            <Blogs></Blogs>  
        </section>
    );
};

export default BlogsPage;