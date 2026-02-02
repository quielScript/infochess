import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

import AppLayout from "@/components/customs/AppLayout";
import Player from "@/features/chess/Player";
import TitledPlayers from "@/features/chess/TitledPlayers";
import Leaderboards from "@/features/chess/Leaderboards";
import Streamers from "@/features/chess/Streamers";
import Error from "@/components/customs/Error";

const router = createBrowserRouter([
	{
		path: "/",
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
