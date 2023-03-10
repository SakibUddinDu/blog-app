import axios from './../../utils/axios';
export const getBlog = async (blogId) => {
    const response = await axios.get(`/blogs/${blogId}`);
    console.log(response.data)
    return response.data;
}