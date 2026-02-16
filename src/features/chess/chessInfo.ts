import type { RootState } from "@/store";
import type { ChessPlayer } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface ChessInfoState {
	searchedPlayer: ChessPlayer | null;
}

const initialState: ChessInfoState = {
	searchedPlayer: null,
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
