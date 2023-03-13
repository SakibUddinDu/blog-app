import { getBlogs } from './blogsApi';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    blogs:[],
    isLoading:false,
    isError: false,
    errorMsg: '',
}

// async thunk
export const fetchBlogsAsync = createAsyncThunk('blogs/fetchBlogsAsync', async ({ selected, checked })=>{
   const blogs = await getBlogs(selected, checked );
   return blogs;
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogsAsync.pending, (state) =>{
            state.isError = false;
            state.isLoading  = true;
        })
        .addCase(fetchBlogsAsync.fulfilled, (state, action) =>{
            state.isLoading =false
            state.blogs =action.payload;
            // state.isError =false;
        })
        .addCase(fetchBlogsAsync.rejected, (state, action) =>{
            state.isLoading =false
            state.blogs =[];
            state.isError =true;
            state.errorMsg = action.error?.message;
        })
    }
})

export default blogsSlice.reducer;