import type { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface ChessInfoState {
	searchedPlayer: object;
}

const initialState: ChessInfoState = {
	searchedPlayer: {},
};

const chessInfoSlice = createSlice({
	name: "chessInfo",
	initialState,
	reducers: {
		setSearchedPlayer(state, action) {
			state.searchedPlayer = action.payload;
		},
	},
});

// Chess slice reducer
export default chessInfoSlice.reducer;

// Chess slice action creator(s)
export const { setSearchedPlayer } = chessInfoSlice.actions;

// Chess slice selector function(s)
export const getSearchedPlayer = (state: RootState) =>
	state.chessInfo.searchedPlayer;
