import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateName(state, action) {
			state.username = action.payload;
		},
	},
});

// User slice reducer
export default userSlice.reducer;

// User slice action creator(s)
export const { updateName } = userSlice.actions;

// User slice selector function(s)
export const getUsername = (state) => state.user.username;
