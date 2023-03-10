import React from 'react';
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
  const {id, title,image, tags, likes, isSaved,createdAt } = blog;
    return (
        <div className="lws-card">
            <Link to={`blogs/${id}`}>
              <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
              <div className="lws-card-header">
                <p className="lws-publishedDate">{createdAt}</p>
                <p className="lws-likeCount">
                  <i className="fa-regular fa-thumbs-up"></i>{likes}
                </p>
              </div>
            <Link to={`blogs/${id}`} className="lws-postTitle">
                {title}
              </Link>
              <div className="lws-tags">
                {
                 tags.map((tag, index) =><span key={index}>#{tag},</span>) 
                }
              </div>
              <div className="flex gap-2 mt-4">
                {
                  isSaved &&  <span className="lws-badge"> Saved </span>
                }
               
              </div>
            </div>
          </div>
    );
};

export default Blog;


// import React from 'react';
// import cardImage from "../../images/git.webp"
// import { Link } from "react-router-dom";

// const Blog = () => {
  
//     return (
//         <div className="lws-card">
//             <Link to="/blogs/1">
//               <img src={cardImage} className="lws-card-image" alt="" />
//             </Link>
//             <div className="p-4">
//               <div className="lws-card-header">
//                 <p className="lws-publishedDate">2023-05-01</p>
//                 <p className="lws-likeCount">
//                   <i className="fa-regular fa-thumbs-up"></i>100
//                 </p>
//               </div>
//             <Link to="/blogs/1" className="lws-postTitle">
//                 Top Github Alternatives
//               </Link>
//               <div className="lws-tags">
//                 <span>#python,</span> <span>#tech,</span> <span>#git</span>
//               </div>
//               {/* <!-- Show this element if post is saved --> */}
//               <div className="flex gap-2 mt-4">
//                 <span className="lws-badge"> Saved </span>
//               </div>
//             </div>
//           </div>
//     );
// };

// export default Blog;