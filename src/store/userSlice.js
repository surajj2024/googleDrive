import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            let userDetails = action.payload;
            return userDetails;
        },
        removeUser: () => {
            return null;
        }
    }
})

const userSliceReducer = userSlice.reducer;

export const { addUser, removeUser} = userSlice.actions;
export default userSliceReducer;