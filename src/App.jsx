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
import Error from "./ui/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/app",
		element: <AppLayout />,
		errorElement: <Error />,
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
				errorElement: <Error />,
				loader: playerLoader,
			},
			{
				path: "titledPlayers/:title",
				element: <TitledPlayers />,
				errorElement: <Error />,
				loader: titledPlayersLoader,
			},
			{
				path: "leaderboards/:category",
				element: <LeaderBoards />,
				errorElement: <Error />,
				loader: leaderboardsLoader,
			},
			{
				path: "streamers",
				element: <Streamers />,
				errorElement: <Error />,
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
