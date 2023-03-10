import { getBlog } from './blogApi';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    blog:{},
    isLoading:false,
    isError: false,
    errorMsg: '',
}

// async thunk
export const fetchBlogAsync = createAsyncThunk('blog/fetchBlogAsync', async (id)=>{
   const blogs = await getBlog(id);
   return blogs;
})

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogAsync.pending, (state) =>{
            state.isError = false;
            state.isLoading  = true;
        })
        .addCase(fetchBlogAsync.fulfilled, (state, action) =>{
            state.isLoading =false
            state.blog =action.payload;
            // state.isError =false;
        })
        .addCase(fetchBlogAsync.rejected, (state, action) =>{
            state.isLoading =false
            state.blog ={};
            state.isError =true;
            state.errorMsg = action.error?.message;
        })
    }
})

export default blogSlice.reducer;