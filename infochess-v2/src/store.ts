import { configureStore } from "@reduxjs/toolkit";
import chessInfoReducer from "@/features/chess/chessInfo";

const store = configureStore({
	reducer: {
		chessInfo: chessInfoReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
