import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogsAsync } from '../../features/relatedBlogs/relatedBlogsSlice';
import Loading from '../../utils/Loading';
import RelatedBlog from './RelatedBlog';

const RelatedBlogs = ({id, tags}) => {
  const {relatedBlogs, isLoading, isError, errorMsg} = useSelector((state)=> state.relatedBlogs)  

   const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRelatedBlogsAsync({id, tags}))
      }, [dispatch, id, tags])

     // decide what to render
     let content = null;
     if(isLoading) content =<Loading/>

     if(!isLoading && isError) content =<div className="col-span-12">{errorMsg}</div>

     if(!isLoading && !isError && relatedBlogs?.length === 0 ) content = <div className="col-span-12">No videos found!</div>;

     if(!isLoading && !isError && relatedBlogs?.length > 0){
         content = relatedBlogs.map((relatedBlog) => <RelatedBlog key={relatedBlog.id} relatedBlog={relatedBlog}></RelatedBlog>)
     }
    return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {content}
      </div>
    </aside>
    );
};

export default RelatedBlogs;