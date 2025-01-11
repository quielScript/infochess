import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import chessInfoReducer from "./features/chess/chessInfoSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		chessInfo: chessInfoReducer,
	},
});

export default store;
