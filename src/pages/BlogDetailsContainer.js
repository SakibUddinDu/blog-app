import React, {useEffect} from 'react';
import GoHome from '../components/BlogDetailsContainer/GoHome';
import BlogDetailsPage from '../components/BlogDetailsContainer/BlogDetailsPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogAsync } from '../features/blog/blogSlice';
import { useParams } from 'react-router-dom';
import Loading from '../utils/Loading';

const BlogDetailsContainer = () => {
   const {blog, isLoading, isError, errorMsg} = useSelector((state)=> state.blog)
   const dispatch = useDispatch()
   const {blogId}= useParams()

    useEffect(() => {
        dispatch(fetchBlogAsync(blogId))
      }, [dispatch, blogId])

     // decide what to render
     let content = null;
     if(isLoading) content =<Loading/>

     if(!isLoading && isError) content =<div className="col-span-12">{errorMsg}</div>

     if(!isLoading && !isError && blog?.id ) content = <div className="col-span-12">No videos found!</div>;

     if(!isLoading && !isError && blog?.id){
         content = <BlogDetailsPage blog={blog} ></BlogDetailsPage>
     }
    return (
        <div>
            <GoHome ></GoHome>
            {content}
            
        </div>
    );
};

export default BlogDetailsContainer;