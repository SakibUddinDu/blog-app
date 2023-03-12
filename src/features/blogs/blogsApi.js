import axios from './../../utils/axios';
export const getBlogs = async ( selected, checked ) => {
    console.log(selected, checked);
    let queryString ='';
    if(checked === "all"){
        queryString+=`isSaved=false`;
    }
    if(checked === "saved"){
        queryString+=`isSaved=true`;
    }

    if(selected === 'newest'){
        queryString += queryString ? `&_sort=createdAt&_order=desc`: "&_sort=createdAt&_order=desc";
        console.log(queryString)
    }
    if(selected === 'most_liked'){
        queryString += queryString ? `&_sort=likes&_order=desc`: "&_sort=likes&_order=desc";
        console.log(queryString);
    }
    console.log(queryString);

    const url = queryString ? `/blogs/?${queryString}`: '/blogs'
    console.log(url)
    const response = await axios.get(url);

    return response.data;
}





























// export const getBlogs = async (selected, checked) => {
//     console.log(selected,checked);
//     let queryString = '';
//     if (selected !== '' || checked !== '') {
//       queryString = `?tags_like=${selected}&tags_like=${checked}`;
//     }
//     console.log(queryString)
//     const response = await axios.get(`/blogs${queryString}`);
//     return response.data;
//   };
// export const getBlogs = async (selected, checked) => {
//     let queryString = '';
//     if (selected.length || checked.length) {
//       const tags = [...selected, ...checked];
//       queryString = `?${tags.map((tag) => `tags_like=${tag}`).join('&')}`;
//     }
//     const response = await axios.get(`/blogs/${queryString}`);
//     return response.data;
//   };
