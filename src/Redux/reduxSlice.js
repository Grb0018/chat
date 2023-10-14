import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    members :[],
    chats:[]
}

const reduxStore = createSlice({
    name : "reduxStore",
    initialState:initialState,
    reducers :{
        getMembers: (state,payload)=>{
            state.members = payload
        }
    }
});

export default reduxStore.reducer;
export const {getMembers} = reduxStore.actions