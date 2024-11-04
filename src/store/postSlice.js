import { createSlice } from "@reduxjs/toolkit";
import { get } from "react-hook-form";
const postdata={
    posts:[]

}
const postSlice=createSlice({
    name:"post",
    initialState:postdata,
    reducers:{
        storePosts:(state,action)=>{
            state.posts=action.payload;
        }
    }
})
export const {storePosts}=postSlice.actions
export default postSlice.reducer