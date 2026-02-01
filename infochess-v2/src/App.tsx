import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

import AppLayout from "@/components/customs/AppLayout";
import Error from "@/pages/Error";
import Player from "@/pages/Player";
import TitledPlayers from "@/pages/TitledPlayers";
import Leaderboards from "@/pages/Leaderboards";
import Streamers from "@/pages/Streamers";

const router = createBrowserRouter([
	{
		path: "/app",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Navigate to="searchPlayer" />,
			},
			{
				path: "searchPlayer",
				element: <Player />,
			},
			{
				path: "searchPlayer/:userNameQuery",
				element: <Player />,
				errorElement: <Error />,
			},
			{
				path: "titledPlayers/:title",
				element: <TitledPlayers />,
				errorElement: <Error />,
			},
			{
				path: "leaderboards/:category",
				element: <Leaderboards />,
				errorElement: <Error />,
			},
			{
				path: "streamers",
				element: <Streamers />,
				errorElement: <Error />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
