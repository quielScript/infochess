import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import TitledPlayers from "./pages/TitledPlayers";
import LeaderBoards from "./pages/LeaderBoards";
import Streamers from "./pages/Streamers";
import PlayerProfile from "./pages/PlayerProfile";
import { loader as titledPlayersLoader } from "./features/chess/TitledPlayersList";
import { loader as leaderboardsLoader } from "./features/chess/LeaderBoardsList";
import { loader as streamersLoader } from "./features/chess/StreamersList";
import UserProfile from "./features/user/UserProfile";

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
				element: <PlayerProfile />,
			},
			{
				path: "searchPlayer/:usernameQuery",
				element: <PlayerProfile />,
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
