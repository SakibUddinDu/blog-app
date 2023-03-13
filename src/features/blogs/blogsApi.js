import axios from './../../utils/axios';
export const getBlogs = async ( selected, checked ) => {
    let queryString ='';
   
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
    const url = queryString ? `/blogs/?${queryString}`: '/blogs'
    const response = await axios.get(url);

    return response.data;
}














// import axios from './../../utils/axios';
// export const getBlogs = async ( selected, checked ) => {
//     let queryString ='';
//     if(checked === "all"){
//         queryString+=`isSaved=false`;
//     }
//     if(checked === "saved"){
//         queryString+=`isSaved=true`;
//     }

//     if(selected === 'newest'){
//         queryString += queryString ? `&_sort=createdAt&_order=desc`: "&_sort=createdAt&_order=desc";
//         console.log(queryString)
//     }
//     if(selected === 'most_liked'){
//         queryString += queryString ? `&_sort=likes&_order=desc`: "&_sort=likes&_order=desc";
//         console.log(queryString);
//     }
//     const url = queryString ? `/blogs/?${queryString}`: '/blogs'
//     const response = await axios.get(url);

//     return response.data;
// }


