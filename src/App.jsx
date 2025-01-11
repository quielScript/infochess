import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TitledPlayers from "./pages/TitledPlayers";
import LeaderBoards from "./pages/LeaderBoards";
import Streamers from "./pages/Streamers";

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
				element: <Profile />,
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
