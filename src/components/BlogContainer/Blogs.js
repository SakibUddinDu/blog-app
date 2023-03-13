import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';
import { fetchBlogsAsync } from './../../features/blogs/blogsSlice';
import Loading from './../../utils/Loading';

const Blogs = () => {
    const dispatch = useDispatch();
    const {blogs, isLoading, isError, errorMsg} = useSelector((state)=> state.blogs)
    const {selected, checked} = useSelector((state)=> state.filter)

    useEffect(() => {
      dispatch(fetchBlogsAsync({selected, checked}))
    }, [dispatch,selected, checked])

    // decide what to render
    let content;
    if(isLoading) content =<Loading/>
    if(!isLoading && isError) content =<div className="col-span-12">{errorMsg}</div>
    if(!isLoading && !isError && blogs?.length === 0 ) content = <div className="col-span-12">No videos found!</div>;
    if(!isLoading && !isError && blogs?.length > 0 ){
        content = blogs.map((blog)=>(
        <Blog key={blog.id} blog={blog}></Blog>
        ))
    }
    
    return (
        <main className="post-container" id="lws-postContainer">
           {content}
        </main> 
    );
};

export default Blogs;