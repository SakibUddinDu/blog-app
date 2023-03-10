import axios from './../../utils/axios';
export const getBlogs = async () => {
    const response = await axios.get("/blogs");
    console.log(response.data)
    return response.data;
}