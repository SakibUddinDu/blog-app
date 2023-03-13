import axios from './../../utils/axios';
export const getBlog = async (blogId) => {
    const {data} = await axios.get(`/blogs/${blogId}`);
    return data;
}

export const updateBlogSaved = async({id, isSaved}) =>{
    
    const {data}  = await axios.patch(`/blogs/${id}`, {
        isSaved,
    })
    return data;
}

export const updateBlogLikes = async({blogId, currentLikes}) =>{
    const {data}  = await axios.patch(`/blogs/${blogId}`,{
        likes: currentLikes + 1,
    })
    return data;
}
