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
				path: "titledPlayers",
				element: <TitledPlayers />,
			},
			{
				path: "leaderboards",
				element: <LeaderBoards />,
			},
			{
				path: "streamers",
				element: <Streamers />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
