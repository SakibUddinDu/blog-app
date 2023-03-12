import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   selected:'Default', //Newest, most liked
   checked: 'All', //saved
}
// const initialState = {
//    selected:'', //Newest, most liked
//    checked: '', //saved
// }

const filterSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
         filterBySelect: (state, action)=>{
            state.selected =action.payload;
         },
         filterByCheckBox: (state, action)=>{
            state.checked = action.payload;
         }

    }
})

export default filterSlice.reducer;
export const {filterBySelect, filterByCheckBox} = filterSlice.actions;
