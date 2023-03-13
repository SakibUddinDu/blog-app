import { getBlog, updateBlogLikes, updateBlogSaved } from './blogApi';
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
export const fetchUpdateBlogSaved = createAsyncThunk(
    "blog/fetchUpdateBlogSaved",
    async ({ id, isSaved}) => {
      const blog = await updateBlogSaved({ id, isSaved });
      return blog;
    }
  );
  
  export const fetchUpdateBlogLikes = createAsyncThunk(
    "blog/fetchUpdateBlogLikes",
    async ({ blogId, currentLikes }) => {
      const blog = await updateBlogLikes({blogId, currentLikes});
      return blog;
    }
  );

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
        .addCase(fetchUpdateBlogSaved.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog.isSaved = action.payload.isSaved;
          })
        .addCase(fetchUpdateBlogLikes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog.likes = action.payload.likes;
          })
         
    }
})

export default blogSlice.reducer;