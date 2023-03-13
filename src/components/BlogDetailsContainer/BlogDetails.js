import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpdateBlogLikes, fetchUpdateBlogSaved } from './../../features/blog/blogSlice';


const BlogDetails = ({blog}) => {
  const {id, title, description, image, tags, likes, isSaved } =blog;
  const dispatch = useDispatch();

  const handleLike = (blogId, currentLikes)=>{
    dispatch(fetchUpdateBlogLikes({blogId, currentLikes}))
  }
  const handleSave = (id, isSaved)=>{
    dispatch(fetchUpdateBlogSaved({id, isSaved}))
  }

    return (
        <main className="post">
        <img src={image} alt="github" className="w-full rounded-md" id="lws-megaThumb" />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {
              tags.map((tag, index) =><span key={index}>#{tag},</span>)
            }
          </div>
          <div className="btn-group">
            <button onClick={()=>handleLike(id, likes)} className="like-btn" id="lws-singleLinks">
              <i className="fa-regular fa-thumbs-up"></i> {likes}
            </button>
  
            <button onClick={()=>handleSave(id, true)} className={`save-btn ${isSaved ? 'active' : ''}`} id="lws-singleSavedBtn">
              <i className="fa-regular fa-bookmark"></i> {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    );
};

export default BlogDetails;
