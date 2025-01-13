import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import TitledPlayers, {
	loader as titledPlayersLoader,
} from "./features/chess/TitledPlayers";
import LeaderBoards, {
	loader as leaderboardsLoader,
} from "./features/chess/LeaderBoards";
import Streamers, {
	loader as streamersLoader,
} from "./features/chess/Streamers";
import UserProfile from "./features/user/UserProfile";
import Player, { loader as playerLoader } from "./features/chess/Player";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/app",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Navigate replace to="searchPlayer" />,
			},
			{
				path: "searchPlayer",
				element: <Player />,
			},
			{
				path: "searchPlayer/:usernameQuery",
				element: <Player />,
				loader: playerLoader,
			},
			{
				path: "titledPlayers/:title",
				element: <TitledPlayers />,
				loader: titledPlayersLoader,
			},
			{
				path: "leaderboards/:category",
				element: <LeaderBoards />,
				loader: leaderboardsLoader,
			},
			{
				path: "streamers",
				element: <Streamers />,
				loader: streamersLoader,
			},
			{
				path: "user",
				element: <UserProfile />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
